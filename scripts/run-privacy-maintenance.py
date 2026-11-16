"""Checkpoint BEFORE deletion. Only an opaque digest is committed to the existing
repository's recovery branch; no database, report, journal or encryption key.
"""
import base64
import json
import os
import re
import ssl
import urllib.request

REPO='mahmoudjaber11222-alt/global-islam-app'
BRANCH='privacy/recovery-checkpoints'

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self,*args,**kwargs):raise RuntimeError('Redirect forbidden')


def request_json(url,method='GET',value=None,token=None,timeout=30):
    headers={'Accept':'application/vnd.github+json','Cache-Control':'no-cache'}
    if token:headers['Authorization']='Bearer '+token
    data=None if value is None else json.dumps(value,separators=(',',':')).encode()
    if data is not None:headers['Content-Type']='application/json'
    req=urllib.request.Request(url,data=data,method=method,headers=headers)
    opener=urllib.request.build_opener(urllib.request.ProxyHandler({}),NoRedirect(),urllib.request.HTTPSHandler(context=ssl.create_default_context()))
    with opener.open(req,timeout=timeout) as response:
        raw=response.read(1024*1024+1)
        if len(raw)>1024*1024:raise RuntimeError('Response too large')
        return json.loads(raw)


def anchor_plan(plan):
    if (not isinstance(plan,dict) or set(plan)!={'schemaVersion','parentCommit','previousCatalog','catalogSha256','generation'}
            or plan['schemaVersion']!=1 or type(plan['generation']) is not int or plan['generation']<1
            or not re.fullmatch('[a-f0-9]{40}',plan['parentCommit'])
            or any(not re.fullmatch('[a-f0-9]{64}',plan[k]) for k in ('previousCatalog','catalogSha256'))):
        raise RuntimeError('Invalid checkpoint plan')
    base='https://api.github.com/repos/'+REPO;token=os.environ['GITHUB_TOKEN']
    def gh(path,method='GET',value=None):return request_json(base+path,method,value,token)
    ref=gh('/git/ref/heads/'+BRANCH);parent=ref['object']['sha']
    content=gh('/contents/checkpoint.json?ref='+parent)
    old=json.loads(base64.b64decode(content['content']))
    if old.get('catalogSha256')==plan['catalogSha256'] and old.get('generation')==plan['generation']:
        return parent  # prior job anchored successfully before an interrupted commit
    if (parent!=plan['parentCommit'] or old.get('catalogSha256')!=plan['previousCatalog']
            or old.get('generation')!=plan['generation']-1):raise RuntimeError('Recovery checkpoint advanced; no overwrite')
    tree=gh('/git/trees/'+gh('/git/commits/'+parent)['tree']['sha'])
    if tree.get('truncated') or [x['path'] for x in tree['tree']]!=['checkpoint.json']:
        raise RuntimeError('Unexpected recovery tree; preserve other files')
    value={'schemaVersion':1,'catalogSha256':plan['catalogSha256'],'generation':plan['generation']}
    created=gh('/git/trees','POST',{'tree':[{'path':'checkpoint.json','mode':'100644','type':'blob','content':json.dumps(value,separators=(',',':'))+'\n'}]})
    commit=gh('/git/commits','POST',{'message':'Record opaque privacy recovery checkpoint','tree':created['sha'],'parents':[parent]})
    gh('/git/refs/heads/'+BRANCH,'PATCH',{'sha':commit['sha'],'force':False})
    # Verify the immutable file, not a KV listing or a mutable last-writer head.
    check=gh('/contents/checkpoint.json?ref='+commit['sha'])
    if json.loads(base64.b64decode(check['content']))!=value:raise RuntimeError('Independent anchor verification failed')
    return commit['sha']


def main():
    if os.getenv('PRIVACY_MAINTENANCE_ENABLED')!='true':raise RuntimeError('Production maintenance not activated')
    key=os.environ['PRIVACY_MAINTENANCE_KEY']
    if len(key)<40:raise RuntimeError('Scoped maintenance token required')
    base='https://global-islam5-islam-g-5.hf.space/internal/privacy/maintenance'
    plan=request_json(base+'/prepare','POST',{},key,240)
    commit=anchor_plan(plan)
    value=request_json(base+'/commit','POST',{'catalogSha256':plan['catalogSha256']},key,120)
    if value.get('status')!='complete' or value.get('journalCheckpoint')!=plan['catalogSha256'] or any(type(value.get(k)) is not int or value[k]<0 for k in ('deletedReports','overdueReports')):
        raise RuntimeError('Invalid maintenance receipt')
    print(json.dumps({k:value[k] for k in ('status','deletedReports','overdueReports')}))
    print('Independent checkpoint commit: '+commit)
    if value['overdueReports']:raise RuntimeError('Administrator review overdue')

if __name__=='__main__':
    try:main()
    except Exception:raise SystemExit('Privacy maintenance failed; no credentials or content logged. Physical deletion requires a verified independent checkpoint.') from None
