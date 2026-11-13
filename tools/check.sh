#!/bin/bash
# regenerate + render + tree diff.  usage: check.sh [--ws]
set -e
cd /home/claude/gen && python3 build.py | tail -2
/home/claude/harness/render.sh | tail -1
python3 - <<'PY'
html=open('/home/claude/harness/out/body.html',encoding='utf-8').read()
open('/home/claude/harness/out/page.html','w',encoding='utf-8').write('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>t</title></head><body>'+html+'</body></html>')
PY
python3 /home/claude/gen/walk.py file:///home/claude/harness/out/page.html /home/claude/harness/out/mine_tree.json >/dev/null
python3 /home/claude/gen/treediff.py /home/claude/harness/out/mine_tree.json 20 $1
