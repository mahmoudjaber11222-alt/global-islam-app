"""Dependency-free structural HTML checks; browser layout QA is separate."""
from html.parser import HTMLParser
from pathlib import Path

VOID = set('area base br col embed hr img input link meta param source track wbr'.split())
class PolicyParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.errors = []
    def handle_starttag(self, tag, attrs):
        keys = [name for name, _ in attrs]
        if len(keys) != len(set(keys)):
            self.errors.append('Duplicate attribute on ' + tag)
        if tag not in VOID:
            self.stack.append(tag)
    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID:
            self.handle_endtag(tag)
    def handle_endtag(self, tag):
        if not self.stack or self.stack[-1] != tag:
            self.errors.append('Unmatched closing tag ' + tag)
        else:
            self.stack.pop()

root = Path(__file__).resolve().parents[1] / 'privacy-site'
for file in ['index.html', 'ar.html']:
    parser = PolicyParser()
    source = (root / file).read_text(encoding='utf-8')
    assert '\ufffd' not in source, file + ': replacement characters'
    parser.feed(source)
    parser.close()
    assert not parser.errors and not parser.stack, (file, parser.errors, parser.stack)
print('English and Arabic HTML nesting, attributes and UTF-8 structure passed; layout QA remains separate.')
