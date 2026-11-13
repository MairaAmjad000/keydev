#!/usr/bin/env python3
"""
Reference DOM  ->  presentational React components + CMS content JSON + inferred TS types.

Every text node, link, image and varying attribute becomes content. Markup (tags, classes, constant
attributes, layout whitespace) stays in the component. Repeated same-shaped siblings become arrays.
"""
import json, re, hashlib, base64, os, sys, collections

ROOT = '/home/claude/proj/keydev-fixed'
TREE = json.load(open('/home/claude/gen/ref_tree.json', encoding='utf-8'))
ASSETMAP = json.load(open('/home/claude/build/assetmap.json'))

# ----------------------------------------------------------------------------- URL / asset normalisation
MISSING_ASSETS = {
    'images/author/yasir.jpg': '/images/author/yasir.jpg',
    'assets/assets/frameworks/public/images/author/nick-konechny.webp': '/images/author/nick-konechny.webp',
    'assets/assets/frameworks/public/images/brand/upwork-rating.webp': '/images/brand/upwork-rating.webp',
    'assets/assets/frameworks/public/images/author/star-user.svg': '/images/author/star-user.svg',
    'assets/assets/frameworks/public/images/brand/pph.webp': '/images/brand/pph.webp',
    'assets/assets/frameworks/public/images/footer/handshake.png': '/images/footer/handshake.png',
}
# mirror-artifact profile links: slugs were destroyed by the site mirror / brand search-replace (FLAGGED in report)
EXTERNAL_FIX = {
    '../clutch.co/profile/KeyDevs Technologies.php': 'https://clutch.co/profile/keydevs-technologies',
    '../www.goodfirms.co/company/KeyDevs Technologies.php': 'https://www.goodfirms.co/company/keydevs-technologies',
    '../www.behance.net/KeyDevs Technologies.php': 'https://www.behance.net/keydevs',
    '../www.upwork.com/o/companies/_012085085920f5cdea.php': 'https://www.upwork.com/o/companies/~012085085920f5cdea/',
}
LINK_LOG = []


def norm_href(h):
    if h in EXTERNAL_FIX:
        LINK_LOG.append((h, EXTERNAL_FIX[h])); return EXTERNAL_FIX[h]
    m = re.fullmatch(r'\.\./([^/]+)/(.*)\.php', h)
    if m:
        out = f'https://{m.group(1)}/{m.group(2)}'; LINK_LOG.append((h, out)); return out
    if h == 'index.php':
        LINK_LOG.append((h, '/')); return '/'
    if re.fullmatch(r'[\w\-/]+\.php', h):
        out = '/' + h[:-4]; LINK_LOG.append((h, out)); return out
    return h


def b64_to_hash(b64):
    b64 = re.sub(r'\s', '', b64)
    raw = base64.b64decode(b64 + '=' * (-len(b64) % 4))
    return hashlib.md5(raw).hexdigest()[:8]


DATA_RE = re.compile(r'data:([\w/+.\-]+);base64,([A-Za-z0-9+/=\s]+)')


def map_data_uris(v):
    def rep(m):
        h = b64_to_hash(m.group(2))
        if h not in ASSETMAP:
            raise SystemExit('unmapped data uri ' + h)
        return ASSETMAP[h]
    return DATA_RE.sub(rep, v)


def norm_value(attr, v):
    v = map_data_uris(v)
    if attr == 'href':
        v = norm_href(v)
    if attr in ('src', 'data-src') and v in MISSING_ASSETS:
        v = MISSING_ASSETS[v]
    return v


# ----------------------------------------------------------------------------- tree prep
VALID_ATTR = re.compile(r'^[a-zA-Z_:][-a-zA-Z0-9_:.]*$')
DROP_TAGS = {'script', 'style', 'noscript'}


def prep(n):
    if 't' in n:
        return n
    attrs = [(k, v) for k, v in n['a']]
    if n['n'] == 'a' and any(k == '<' for k, _ in attrs):  # malformed `<a ... title="x"</a>` artefact
        attrs = [(k, v) for k, v in attrs if k not in ('<', 'a')]
    attrs = [(k, v) for k, v in attrs if VALID_ATTR.match(k)]
    n['a'] = attrs
    n['c'] = [prep(c) for c in n['c'] if not ('n' in c and c['n'] in DROP_TAGS)]
    return n


# ----------------------------------------------------------------------------- helpers
WS = re.compile(r'[ \t\r\n\f]+')
INLINE_PARENTS = {'a', 'span', 'i', 'b', 'strong', 'em', 'u', 'small', 'label', 'sup', 'sub'}
NO_WS_PARENTS = {'table', 'thead', 'tbody', 'tfoot', 'tr', 'select', 'colgroup', 'optgroup'}
VOID = {'img', 'br', 'hr', 'input'}
RICH_TAGS = {'a', 'strong', 'b', 'em', 'i', 'br', 'span', 'u', 'sup', 'sub', 'small'}
BOOL_ATTRS = {'required', 'disabled', 'checked', 'selected', 'readonly', 'multiple', 'autofocus', 'hidden', 'novalidate'}
DATA_ATTRS = {'href', 'src', 'data-src', 'alt', 'title', 'placeholder', 'aria-label', 'srcset', 'content', 'value', 'data-count'}
IMG_DATA_ATTRS = {'width', 'height'}
ATTR_MAP = {
    'class': 'className', 'for': 'htmlFor', 'tabindex': 'tabIndex', 'maxlength': 'maxLength', 'minlength': 'minLength',
    'readonly': 'readOnly', 'colspan': 'colSpan', 'rowspan': 'rowSpan', 'srcset': 'srcSet', 'referrerpolicy': 'referrerPolicy',
    'autocomplete': 'autoComplete', 'enctype': 'encType', 'novalidate': 'noValidate', 'xml:space': 'xmlSpace',
    'xmlns:xlink': 'xmlnsXlink', 'xlink:href': 'xlinkHref', 'enable-background': 'enableBackground',
    'autofocus': 'autoFocus', 'crossorigin': 'crossOrigin', 'charset': 'charSet', 'frameborder': 'frameBorder',
}
SVG_KEBAB = re.compile(r'^(stroke|fill|clip|stop|font|text|shape|marker|flood|lighting|color|paint|vector|alignment|baseline|dominant|glyph|image|letter|word|writing|pointer|unicode|enable|mask)-')
NOISE = re.compile(
    r'^(col(-.*)?|row|container(-.*)?|d-.*|align-.*|justify-.*|text-.*|m[trblxy]?-.*|p[trblxy]?-.*|fa[srlb]?|fa-.*|wow|animated|'
    r'fade.*|slide.*|zoom.*|bounce.*|active|show|collapse|btn(-.*)?|float-.*|order-.*|offset-.*|w-\d+|h-\d+|flex-.*|position-.*|'
    r'bg-.*|border.*|rounded.*|lazy|clearfix|nav|nav-.*|navbar|navbar-.*|waves-.*|o-hidden|padding-.*|ml-auto|mr-auto|mx-auto|'
    r'no-gutters|img-fluid|list-.*|tab-.*|slick-.*|owl-.*|container|nopadding|text.*center)$')
TAG_NAMES = {
    'h1': 'heading', 'h2': 'heading', 'h3': 'heading', 'h4': 'subheading', 'h5': 'subheading', 'h6': 'subheading',
    'p': 'text', 'span': 'text', 'a': 'link', 'img': 'image', 'li': 'item', 'ul': 'list', 'div': 'block',
    'strong': 'strong', 'i': 'icon', 'label': 'label', 'button': 'button', 'input': 'input', 'select': 'select',
    'figure': 'figure', 'figcaption': 'caption', 'section': 'section', 'sup': 'sup', 'form': 'form', 'br': 'br',
    'option': 'option', 'textarea': 'textarea', 'footer': 'footer', 'header': 'header', 'nav': 'nav', 'center': 'center',
}


def camel(s):
    s = re.sub(r'[^A-Za-z0-9]+', ' ', s).strip()
    parts = s.split()
    if not parts:
        return 'x'
    out = parts[0][0].lower() + parts[0][1:] + ''.join(p[0].upper() + p[1:] for p in parts[1:])
    return ('_' + out) if out[0].isdigit() else out


def attrs_of(n):
    return dict(n['a'])


def classes(n):
    return attrs_of(n).get('class', '').split()


def name_of(n):
    for c in classes(n):
        if not NOISE.match(c):
            return camel(c)
    return TAG_NAMES.get(n['n'], camel(n['n']))


def plural(base):
    if base == 'item':
        return 'items'
    return base + 's' if not base.endswith('s') else base + 'List'


def collapse(s):
    return WS.sub(' ', s)


def is_ws(n):
    return 't' in n and not n['t'].strip(' \t\r\n\f')


def elements(n):
    return [c for c in n['c'] if 'n' in c]


def is_rich(n):
    if n['n'] in ('svg', 'select', 'textarea', 'script', 'style'):
        return False
    has_text = any('t' in c and not is_ws(c) for c in n['c'])
    els = elements(n)
    if not (has_text and els):
        return False
    def ok(e):
        return e['n'] in RICH_TAGS and all(ok(x) for x in elements(e))
    return all(ok(e) for e in els)


def is_leaf_text(n):
    return len(n['c']) >= 1 and all('t' in c for c in n['c']) and any(not is_ws(c) for c in n['c'])


# ----------------------------------------------------------------------------- structural signature + entries
_sig_cache = {}


def entries(n):
    """children as entries: ('text', core, lead, trail) | ('ws',) | ('el', node) | ('run', [nodes], sep_ws)"""
    raw = []
    for c in n['c']:
        if 't' in c:
            t = collapse(c['t'])
            if t.strip() == '':
                if raw and raw[-1][0] == 'ws':
                    continue
                raw.append(('ws',))
            else:
                raw.append(('text', t.strip(), t.startswith(' '), t.endswith(' ')))
        else:
            raw.append(('el', c))
    # group runs of same-signature elements separated consistently by ws / nothing
    out = []
    i = 0
    while i < len(raw):
        e = raw[i]
        if e[0] != 'el':
            out.append(e); i += 1; continue
        sig = ssig(e[1])
        run = [e[1]]
        sep = None
        j = i + 1
        while j < len(raw):
            if raw[j][0] == 'el' and ssig(raw[j][1]) == sig:
                s = False; nj = j
            elif raw[j][0] == 'ws' and j + 1 < len(raw) and raw[j + 1][0] == 'el' and ssig(raw[j + 1][1]) == sig:
                s = True; nj = j + 1
            else:
                break
            if sep is None:
                sep = s
            elif sep != s:
                break
            run.append(raw[nj][1]); j = nj + 1
        if len(run) >= 2:
            out.append(('run', run, bool(sep)))
        else:
            out.append(('el', run[0]))
        i = j
    return out


def ssig(n):
    key = id(n)
    if key in _sig_cache:
        return _sig_cache[key]
    if n['n'] == 'svg':
        s = ('svg',)
    else:
        names = tuple(sorted(k for k, _ in n['a'] if k != 'class'))
        if n['n'] == 'select':
            s = ('select', names, tuple((attrs_of(o).get('value'), collapse(''.join(c['t'] for c in o['c'] if 't' in c)).strip()) for o in elements(n)))
        elif is_rich(n) or n['n'] == 'textarea':
            s = (n['n'], names, 'rich' if is_rich(n) else n['n'])
        else:
            parts = []
            for e in entries(n):
                if e[0] == 'text':
                    parts.append(('t', e[2], e[3]))
                elif e[0] == 'ws':
                    parts.append('w')
                elif e[0] == 'el':
                    parts.append(('1', ssig(e[1])))
                else:
                    parts.append(('*', ssig(e[1][0]), e[2]))
            s = (n['n'], names, tuple(parts))
    _sig_cache[key] = s
    return s


# ----------------------------------------------------------------------------- style attr -> JS object
def style_obj(v):
    decls = []
    for d in v.split(';'):
        if ':' not in d:
            continue
        k, val = d.split(':', 1)
        k = k.strip(); val = val.strip()
        if not k:
            continue
        if k.startswith('--'):
            pk = k
        else:
            pk = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
            if pk.startswith('Ms'): pk = 'ms' + pk[2:]
        decls.append((pk, val))
    return decls


def jsq(s):
    return json.dumps(s, ensure_ascii=False)


def style_literal(v):
    decls = style_obj(v)
    return '{{ ' + ', '.join((jsq(k) if not re.fullmatch(r'[A-Za-z_$][\w$]*', k) else k) + ': ' + jsq(val) for k, val in decls) + ' }}'


# ----------------------------------------------------------------------------- icon registry (inline SVG)
ICONS = collections.OrderedDict()


def svg_canon(n):
    if 't' in n:
        return ''
    return '<%s %s>%s</%s>' % (n['n'], ' '.join('%s=%s' % (k, v) for k, v in sorted(n['a'])), ''.join(svg_canon(c) for c in n['c']), n['n'])


def svg_attr_name(k):
    if k in ATTR_MAP:
        return ATTR_MAP[k]
    if k.startswith(('data-', 'aria-')):
        return k
    if SVG_KEBAB.match(k) or '-' in k:
        return re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
    return k


def svg_jsx(n, ind):
    if 't' in n:
        return ''
    pad = '  ' * ind
    attrs = []
    for k, v in n['a']:
        v = map_data_uris(v)
        an = svg_attr_name(k)
        if k == 'style':
            attrs.append('style=' + style_literal(v))
        elif re.fullmatch(r'[^"\\\n{}&<>]*', v):
            attrs.append('%s="%s"' % (an, v))
        else:
            attrs.append('%s={%s}' % (an, jsq(v)))
    kids = [svg_jsx(c, ind + 1) for c in n['c'] if 'n' in c]
    head = n['n'] + (' ' + ' '.join(attrs) if attrs else '')
    if not kids:
        return f'{pad}<{head} />'
    return f'{pad}<{head}>\n' + '\n'.join(kids) + f'\n{pad}</{n["n"]}>'


def register_icon(n):
    h = hashlib.md5(svg_canon(n).encode()).hexdigest()[:6]
    key = 'svg-' + h
    if key not in ICONS:
        ICONS[key] = svg_jsx(n, 3)
    return key


# ----------------------------------------------------------------------------- forms registry (shared <select> option lists)
FORMS = collections.OrderedDict()


def register_options(select_nodes):
    """select_nodes: all instances; returns key. Option lists are shared by identical content."""
    n = select_nodes[0]
    opts = []
    for o in elements(n):
        a = attrs_of(o)
        text = collapse(''.join(c['t'] for c in o['c'] if 't' in c)).strip()
        d = {}
        if 'value' in a:
            d['value'] = a['value']
        d['label'] = text
        opts.append(d)
    first = opts[0]['label'] if opts else ''
    guess = {'-- Select the Service --': 'service', 'Your Region': 'region', '-- Your Budget --': 'budget',
             'Where Did You Hear About Us?': 'reference'}.get(first)
    base = camel(guess or attrs_of(n).get('name') or attrs_of(n).get('id') or 'options')
    for k, v in FORMS.items():
        if v == opts:
            return k
    key = base
    i = 2
    while key in FORMS:
        key = f'{base}{i}'; i += 1
    FORMS[key] = opts
    return key


# ============================================================================= generation core
STATS = {'slots': 0}
USED = set()


class Scope:
    def __init__(self, expr, dicts, depth=0):
        self.expr = expr
        self.dicts = dicts
        self.depth = depth
        self.used = set()

    def key(self, hint):
        base = camel(hint)
        k = base
        i = 2
        while k in self.used:
            k = f'{base}{i}'; i += 1
        self.used.add(k)
        return k

    def slot(self, hint, values):
        k = self.key(hint)
        for d, v in zip(self.dicts, values):
            if v is not None:  # None = attribute absent on this instance -> key omitted
                d[k] = v
        STATS['slots'] += 1
        return k

    def obj(self, hint):
        k = self.key(hint)
        new = []
        for d in self.dicts:
            o = {}
            d[k] = o
            new.append(o)
        return k, Scope(f'{self.expr}.{k}', new, self.depth)


def acc(expr, key):
    return f'{expr}.{key}' if re.fullmatch(r'[A-Za-z_$][\w$]*', key) else f'{expr}[{jsq(key)}]'


def jsx_name(tag, k):
    if tag == 'input' and k == 'value':
        return 'defaultValue'
    if tag == 'input' and k == 'checked':
        return 'defaultChecked'
    if k in ATTR_MAP:
        return ATTR_MAP[k]
    return k


def field_name(k):
    return {'class': 'className', 'data-src': 'src'}.get(k) or camel(k)


def inline_edge_keep(tag):
    return tag in INLINE_PARENTS


def serialize_rich(n, strip_edges):
    def ser(x):
        if 't' in x:
            return collapse(x['t']).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        a = ''.join(' %s="%s"' % (k, norm_value(k, v).replace('&', '&amp;').replace('"', '&quot;')) for k, v in x['a'])
        if x['n'] in VOID:
            return f'<{x["n"]}{a}>'
        return f'<{x["n"]}{a}>' + ''.join(ser(c) for c in x['c']) + f'</{x["n"]}>'
    s = ''.join(ser(c) for c in n['c'])
    return s.strip() if strip_edges else s


def interactive_input_flags(n):
    flags = []
    a = attrs_of(n)
    for k, v in a.items():
        if not k.startswith('on'):
            continue
        v = v.strip()
        if k == 'onfocus' and re.fullmatch(r"this\.placeholder\s*=\s*''", v):
            flags.append('clearPlaceholderOnFocus')
        elif k == 'onblur' and re.fullmatch(r"this\.placeholder\s*=\s*'([^']*)'", v):
            txt = re.fullmatch(r"this\.placeholder\s*=\s*'([^']*)'", v).group(1)
            if txt != a.get('placeholder'):
                raise SystemExit(f'onblur placeholder mismatch: {txt!r} vs {a.get("placeholder")!r}')
            flags.append('restorePlaceholderOnBlur')
        elif k == 'onkeydown' and v == 'checkNumberOnly(event);':
            flags.append('numericOnly')
        else:
            raise SystemExit(f'unhandled inline handler {k}={v}')
    return flags


def gen_el(nodes, scope, direct=False):
    n0 = nodes[0]
    tag = n0['n']
    if tag == 'svg':
        USED.add('Icon')
        keys = [register_icon(n) for n in nodes]
        if len(set(keys)) == 1:
            return ('el', 'Icon', [('name', 'lit', keys[0])], [], [])
        k = scope.slot('icon', keys)
        return ('el', 'Icon', [('name', 'expr', acc(scope.expr, k))], [], [])

    # ---- attributes
    names = []
    for n in nodes:
        for k, _ in n['a']:
            if k not in names and not k.startswith('on'):
                names.append(k)
    flags = interactive_input_flags(n0) if tag == 'input' else []
    for n in nodes:
        if tag != 'input' and any(k.startswith('on') for k, _ in n['a']):
            raise SystemExit('inline handler on non-input')
    const, slotted = [], []
    for k in names:
        vals = [norm_value(k, attrs_of(n)[k]) if k in attrs_of(n) else None for n in nodes]
        same = all(v == vals[0] for v in vals)
        is_data = k in DATA_ATTRS or (k in IMG_DATA_ATTRS and tag == 'img')
        if k == 'class':
            (const if same else slotted).append((k, vals))
        elif is_data and any(v not in ('', None) for v in vals):
            slotted.append((k, vals))
        elif same:
            const.append((k, vals))
        else:
            slotted.append((k, vals))

    if slotted and not direct:
        okey, sub = scope.obj(name_of(n0))
        has_obj = True
    else:
        sub = scope
        has_obj = direct
    attrs, spread = [], []

    for k, vals in const:
        v = vals[0]
        jn = jsx_name(tag, k)
        if k == 'style':
            attrs.append((jn, 'expr', style_literal(v)[1:-1]))
        elif k in BOOL_ATTRS and v == '':
            attrs.append((jn, 'bool', None))
        else:
            attrs.append((jn, 'lit', v))
    for k, vals in slotted:
        fk = sub.slot(field_name(k), vals)
        ex = acc(sub.expr, fk)
        jn = jsx_name(tag, k)
        if tag == 'a' and k == 'href':
            USED.add('link'); spread.append(f'...link({ex})')
        elif k == 'class':
            attrs.append((jn, 'expr', ex))
        elif k == 'style':
            USED.add('css'); attrs.append((jn, 'expr', f'css({ex})'))
        else:
            attrs.append((jn, 'expr', ex))

    # ---- special tags
    if tag == 'input' and flags:
        USED.add('InteractiveInput')
        for f in flags:
            attrs.append((f, 'bool', None))
        if 'restorePlaceholderOnBlur' in flags and 'placeholder' not in names:
            raise SystemExit('restore without placeholder')
        return ('el', 'InteractiveInput', attrs, [], spread)
    if tag == 'center':
        USED.add('Center')
        tag = 'Center'
    if tag in VOID or tag == 'textarea':
        return ('el', tag, attrs, [], spread)
    if tag == 'select':
        USED.add('FormOptions'); USED.add('forms')
        key = register_options(nodes)
        return ('el', 'select', attrs, [('el', 'FormOptions', [('options', 'expr', f'forms.{key}')], [], [])], spread)

    text_hint = 'text' if has_obj else name_of(n0)
    if is_rich(n0):
        vals = [serialize_rich(n, n['n'] not in INLINE_PARENTS) for n in nodes]
        k = sub.slot('html' if has_obj else name_of(n0), vals)
        attrs.append(('dangerouslySetInnerHTML', 'expr', '{ __html: %s }' % acc(sub.expr, k)))
        return ('el', tag, attrs, [], spread)
    kids = gen_children(n0['n'], nodes, sub, text_hint)
    return ('el', tag, attrs, kids, spread)


def gen_children(ptag, parents, scope, text_hint):
    ents = [entries(p) for p in parents]
    L = len(ents[0])
    assert all(len(e) == L for e in ents), 'entry length mismatch under <%s>' % ptag
    keep_edges = ptag in INLINE_PARENTS or ptag == '#frag-inline'
    out = []
    for k in range(L):
        kind = ents[0][k][0]
        assert all(e[k][0] == kind for e in ents), 'entry kind mismatch under <%s>' % ptag
        edge_first = (k == 0); edge_last = (k == L - 1)
        if kind == 'ws':
            if ptag in NO_WS_PARENTS:
                continue
            if (edge_first or edge_last) and not keep_edges:
                continue
            out.append(('ws',))
        elif kind == 'text':
            vals = [e[k][1] for e in ents]
            lead, trail = ents[0][k][2], ents[0][k][3]
            if lead and not (edge_first and not keep_edges):
                out.append(('ws',))
            key = scope.slot(text_hint, vals)
            out.append(('expr', acc(scope.expr, key)))
            if trail and not (edge_last and not keep_edges):
                out.append(('ws',))
        elif kind == 'el':
            out.append(gen_el([e[k][1] for e in ents], scope))
        else:  # run
            runs = [e[k][1] for e in ents]
            sep = ents[0][k][2]
            out.extend(gen_run(runs, sep, scope))
    return out


def gen_run(runs, sep, scope):
    item_nodes = [n for r in runs for n in r]
    equal_len = all(len(r) == len(runs[0]) for r in runs)
    # dry run: does one item carry any content at all?
    before = STATS['slots']
    dummy = Scope('item', [{} for _ in item_nodes], scope.depth + 1)
    gen_el(item_nodes, dummy, direct=True)
    carries = STATS['slots'] != before
    if not carries and equal_len:
        out = []
        for p in range(len(runs[0])):
            if p and sep:
                out.append(('ws',))
            out.append(gen_el([r[p] for r in runs], scope))
        return out
    key = scope.key(plural(name_of(runs[0][0])))
    lists = []
    for d in scope.dicts:
        l = []; d[key] = l; lists.append(l)
    item_dicts = []
    for l, r in zip(lists, runs):
        for _ in r:
            d = {}; l.append(d); item_dicts.append(d)
    depth = scope.depth + 1
    var = 'item' if depth == 1 else f'item{depth}'
    iv = 'i' if depth == 1 else f'i{depth}'
    item_scope = Scope(var, item_dicts, depth)
    el = gen_el(item_nodes, item_scope, direct=True)
    USED.add('Fragment') if sep else None
    return [('map', acc(scope.expr, key), var, iv, sep, el)]


# ============================================================================= JSX printer
def lit_attr(name, v):
    if re.fullmatch(r'[^"\\\n{}&<>]*', v):
        return f'{name}="{v}"'
    return f'{name}={{{jsq(v)}}}'


def pr(node, ind, out):
    pad = '  ' * ind
    kind = node[0]
    if kind == 'ws':
        out.append(pad + "{' '}")
    elif kind == 'expr':
        out.append(pad + '{' + node[1] + '}')
    elif kind == 'map':
        _, arr, var, iv, sep, el = node
        out.append(pad + '{%s.map((%s, %s) => (' % (arr, var, iv))
        if sep:
            out.append(pad + '  <Fragment key={%s}>' % iv)
            out.append(pad + "    {%s > 0 && ' '}" % iv)
            pr(el, ind + 2, out)
            out.append(pad + '  </Fragment>')
        else:
            pr(('el',) + (el[1], el[2] + [('key', 'expr', iv)], el[3], el[4]), ind + 1, out)
        out.append(pad + '))}')
    else:
        _, tag, attrs, kids, spread = node
        parts = [lit_attr(n, v) if k == 'lit' else (n if k == 'bool' else f'{n}={{{v}}}') for n, k, v in attrs]
        parts += ['{%s}' % s for s in spread]
        one = '<' + tag + ''.join(' ' + p for p in parts)
        if len(pad) + len(one) + 4 > 118 and parts:
            out.append(pad + '<' + tag)
            for p in parts:
                out.append(pad + '  ' + p)
            tail = pad + ('/>' if not kids else '>')
            out.append(tail)
        else:
            out.append(pad + one + (' />' if not kids else '>'))
        if kids:
            for c in kids:
                pr(c, ind + 1, out)
            out.append(pad + f'</{tag}>')


# ============================================================================= types
def schema(v):
    if isinstance(v, str):
        return ('s',)
    if isinstance(v, list):
        it = None
        for x in v:
            it = merge(it, schema(x))
        return ('a', it)
    return ('o', {k: [schema(x), 1] for k, x in v.items()}, 1)


def merge(a, b):
    if a is None: return b
    if b is None: return a
    if a[0] != b[0]:
        return ('u', [a, b])
    if a[0] == 's':
        return a
    if a[0] == 'a':
        return ('a', merge(a[1], b[1]))
    keys = dict(a[1])
    for k, (sch, c) in b[1].items():
        if k in keys:
            keys[k] = [merge(keys[k][0], sch), keys[k][1] + c]
        else:
            keys[k] = [sch, c]
    return ('o', keys, a[2] + b[2])


def ts(sch, ind):
    pad = '  ' * ind
    if sch is None:
        return 'unknown'
    if sch[0] == 's':
        return 'string'
    if sch[0] == 'a':
        inner = ts(sch[1], ind)
        return f'Array<{inner}>'
    if sch[0] == 'u':
        return ' | '.join(ts(x, ind) for x in sch[1])
    lines = ['{']
    for k, (s, c) in sch[1].items():
        kk = k if re.fullmatch(r'[A-Za-z_$][\w$]*', k) else jsq(k)
        lines.append(f'{pad}  {kk}{"?" if c < sch[2] else ""}: {ts(s, ind + 1)};')
    lines.append(pad + '}')
    return '\n'.join(lines)


# ============================================================================= emit
TYPES = collections.OrderedDict()
COMPONENTS = []  # (group, Name, file_key, dir, needs_forms)


def lcfirst(s):
    return s[0].lower() + s[1:]


def emit_component(group, name, nodes):
    USED.clear()
    STATS['slots'] = 0
    root = {}
    scope = Scope('data', [root], 0)
    els = [n for n in nodes if 'n' in n]
    out = []
    if len(els) == 1:
        body = [gen_el([els[0]], scope, direct=True)]
    else:
        fake = {'n': '#frag', 'a': [], 'c': nodes}
        body = gen_children('#frag', [fake], scope, 'text')
    needs_forms = 'forms' in USED
    if len(body) == 1:
        lines = []
        pr(body[0], 2, lines)
        jsx = '\n'.join(lines)
        ret = f'  return (\n{jsx}\n  );'
    else:
        lines = []
        for b in body:
            pr(b, 3, lines)
        ret = '  return (\n    <>\n' + '\n'.join(lines) + '\n    </>\n  );'
    imports = []
    if 'Fragment' in USED:
        imports.append("import { Fragment } from 'react';")
    tyname = f'{name}Content'
    imports.append(f"import type {{ {tyname}{', FormsContent' if needs_forms else ''} }} from '@/types/content';")
    if 'Icon' in USED:
        imports.append("import { Icon } from '@/components/icons';")
    if 'InteractiveInput' in USED:
        imports.append("import { InteractiveInput } from '@/components/ui/InteractiveInput';")
    if 'FormOptions' in USED:
        imports.append("import { FormOptions } from '@/components/ui/FormOptions';")
    helpers = [h for h in ('link', 'css', 'Center') if h in USED]
    if helpers:
        imports.append("import { %s } from '@/lib/markup';" % ', '.join(helpers))
    sig = f'{{ data{", forms" if needs_forms else ""} }}: {{ data: {tyname}{"; forms: FormsContent" if needs_forms else ""} }}'
    src = '\n'.join(imports) + f'\n\nexport function {name}({sig}) {{\n{ret}\n}}\n'
    cdir = f'{ROOT}/src/components/{group}'
    os.makedirs(cdir, exist_ok=True)
    open(f'{cdir}/{name}.tsx', 'w', encoding='utf-8').write(src)
    jdir = f'{ROOT}/content/{group}'
    os.makedirs(jdir, exist_ok=True)
    fk = lcfirst(name)
    json.dump(root, open(f'{jdir}/{fk}.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
    open(f'{jdir}/{fk}.json', 'a').write('\n')
    TYPES[tyname] = schema(root)
    COMPONENTS.append((group, name, fk, needs_forms))
    return root


def write_types():
    out = ['// Generated from content/*.json by tools/gen.py. These types mirror the CMS content shape.', '']
    for ty, sch in TYPES.items():
        out.append(f'export interface {ty} ' + ts(sch, 0))
        out.append('')
    fs = ('o', {k: [schema(v), 1] for k, v in FORMS.items()}, 1)
    out.append('export interface FormOption {\n  value?: string;\n  label: string;\n}\n')
    out.append('export interface FormsContent {')
    for k in FORMS:
        out.append(f'  {k}: FormOption[];')
    out.append('}\n')
    open(f'{ROOT}/src/types/content.ts', 'w', encoding='utf-8').write('\n'.join(out))


def write_icons():
    lines = ["import type { ReactElement } from 'react';", '',
             '/**', ' * Inline SVG registry. Content refers to icons by key (e.g. "svg-1a2b3c"); markup stays here.', ' */',
             'const ICONS: Record<string, () => ReactElement> = {']
    for k, jsx in ICONS.items():
        lines.append(f"  '{k}': () => (")
        lines.append(jsx)
        lines.append('  ),')
    lines += ['};', '', 'export function Icon({ name }: { name: string }) {',
              '  const render = ICONS[name];', '  return render ? render() : null;', '}', '']
    os.makedirs(f'{ROOT}/src/components/icons', exist_ok=True)
    open(f'{ROOT}/src/components/icons/index.tsx', 'w', encoding='utf-8').write('\n'.join(lines))
