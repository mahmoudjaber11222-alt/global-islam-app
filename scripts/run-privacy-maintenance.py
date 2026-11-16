"""Fixed-origin HTTPS scheduler client. Secrets stay in environment and headers."""
import json
import os
import ssl
import re
import urllib.request


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self,*args,**kwargs):
        raise RuntimeError('Maintenance redirects are forbidden')


def main():
    if os.getenv('PRIVACY_MAINTENANCE_ENABLED')!='true':
        raise RuntimeError('Production maintenance not activated')
    key=os.environ['PRIVACY_MAINTENANCE_KEY']
    if len(key)<40:raise RuntimeError('Scoped maintenance token required')
    request=urllib.request.Request('https://global-islam5-islam-g-5.hf.space/internal/privacy/maintenance',
        data=b'{}',method='POST',headers={'Authorization':'Bearer '+key,'Content-Type':'application/json'})
    opener=urllib.request.build_opener(urllib.request.ProxyHandler({}),NoRedirect(),
                                     urllib.request.HTTPSHandler(context=ssl.create_default_context()))
    with opener.open(request,timeout=90) as response:
        if response.status!=200:raise RuntimeError('Maintenance failed')
        body=response.read(16385)
        if len(body)>16384:raise RuntimeError('Invalid maintenance receipt')
        value=json.loads(body)
    if value.get('status')!='complete' or any(type(value.get(k)) is not int or value[k]<0 for k in ('deletedReports','overdueReports')):
        raise RuntimeError('Invalid maintenance receipt')
    checkpoint=value.get('journalCheckpoint')
    if not isinstance(checkpoint,str) or not re.fullmatch('[a-f0-9]{64}',checkpoint):
        raise RuntimeError('Missing independent deletion checkpoint')
    # These are aggregate operational counts, never report content or identifiers.
    print(json.dumps({k:value[k] for k in ('status','deletedReports','overdueReports')}))
    # Non-content integrity anchor, independent of both the database and backups.
    # Restore must use the latest successful authenticated job, never an old copy.
    print('Deletion journal checkpoint: '+checkpoint)
    if value['overdueReports']:raise RuntimeError('Administrator review is overdue')


if __name__=='__main__':
    try:main()
    except Exception:raise SystemExit('Privacy maintenance failed; inspect authorized operations. No credentials or content logged.') from None
