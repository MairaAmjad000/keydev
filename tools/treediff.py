"""Compare reference DOM tree vs rendered React DOM tree (both Chromium-parsed). usage: treediff.py mine.json [maxprint]"""
import sys, json, re, difflib, collections
sys.path.insert(0, '/home/claude/gen')
from gen import prep, norm_value, collapse, style_obj, WS

def norm_attrs(n):
    out = {}
    for k, v in n['a']:
        if k == 'class':
            v = ' '.join(v.split())
        elif k == 'style':
            v = ';'.join(f'{a}:{b}' for a, b in sorted(style_obj(v)))
        elif k in ('href', 'src', 'data-src'):
            v = norm_value(k, v)
        if k.startswith('on') and n['n'] == 'input':
            continue  # inline handlers are re-implemented as React handlers (InteractiveInput)
        out[k.lower() if k not in ('viewBox',) else k] = v
    return out

from gen import INLINE_PARENTS, NO_WS_PARENTS
def lines(root, keep_ws):
    out = []
    def walk(n, d, path):
        kids = n['c']
        for idx, c in enumerate(kids):
            if 't' in c:
                t = collapse(c['t'])
                edge = idx == 0 or idx == len(kids) - 1
                # whitespace only matters between siblings / next to text, never at the edge of a block-ish
                # parent, inside svg, or inside table-ish parents
                insig = n['n'] in NO_WS_PARENTS or 'svg' in path or n['n'] == 'svg'
                edge_drop = edge and n['n'] not in INLINE_PARENTS
                if t.strip() == '':
                    if keep_ws and not insig and not edge_drop: out.append(('  ' * d + '·ws', path))
                else:
                    L = keep_ws and t.startswith(' ') and not (idx == 0 and edge_drop)
                    T = keep_ws and t.endswith(' ') and not (idx == len(kids) - 1 and edge_drop)
                    out.append(('  ' * d + '"' + t.strip() + '"' + (' ⎵L' if L else '') + (' ⎵T' if T else ''), path))
                continue
            a = norm_attrs(c)
            out.append(('  ' * d + '<' + c['n'] + ''.join(f' {k}="{v}"' for k, v in sorted(a.items())) + '>', path))
            walk(c, d + 1, path + [c['n'] if c['n']=='svg' else c['n'] + ('.' + a['class'].split()[0] if a.get('class') else '')])
    walk(root, 0, [])
    return out

ref = prep(json.load(open('/home/claude/gen/ref_tree.json')))
mine = prep(json.load(open(sys.argv[1])))
def strip_preload(n):
    if 't' in n: return n
    n['c'] = [strip_preload(c) for c in n['c'] if not ('n' in c and c['n'] == 'link' and ('rel', 'preload') in [tuple(x) for x in c['a']])]
    return n
strip_preload(mine)
def merge_text(n):
    if 't' in n: return n
    out = []
    for c in n['c']:
        c = merge_text(c)
        if out and 't' in c and 't' in out[-1]:
            out[-1] = {'t': out[-1]['t'] + c['t']}
        else:
            out.append(c)
    n['c'] = out
    return n
merge_text(ref); merge_text(mine)
maxp = int(sys.argv[2]) if len(sys.argv) > 2 else 30

def run(keep_ws, label):
    a = lines(ref, keep_ws); b = lines(mine, keep_ws)
    sm = difflib.SequenceMatcher(None, [x for x, _ in a], [x for x, _ in b], autojunk=False)
    ops = [o for o in sm.get_opcodes() if o[0] != 'equal']
    print(f'== {label}: ref {len(a)} lines, mine {len(b)} lines, ratio {sm.ratio():.5f}, diff blocks {len(ops)}')
    n = 0
    for tag, i1, i2, j1, j2 in ops:
        n += 1
        if n > maxp: break
        ctx = '>'.join(a[i1][1][-3:]) if i1 < len(a) else ''
        print(f'--- {tag} ref[{i1}:{i2}] mine[{j1}:{j2}]  in {ctx}')
        for x, _ in a[i1:min(i2, i1 + 4)]: print('  REF ', x[:200])
        for x, _ in b[j1:min(j2, j1 + 4)]: print('  MINE', x[:200])
    return ops, a, b

ops, a, b = run(False, 'structure + text + attrs (whitespace ignored)')
if '--ws' in sys.argv:
    run(True, 'including whitespace nodes')
