#!/bin/bash
# static site that mimics what Next serves: page + legacy.css + /images + /fonts
S=/home/claude/harness/site; P=/home/claude/proj/keydev-fixed
rm -rf $S; mkdir -p $S
ln -s $P/public/images $S/images; ln -s $P/public/fonts $S/fonts; cp $P/public/favicon.png $S/
cp $P/src/styles/legacy.css $S/legacy.css
python3 - <<'PY'
body=open('/home/claude/harness/out/body.html',encoding='utf-8').read()
open('/home/claude/harness/site/index.html','w',encoding='utf-8').write(
 '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">'
 '<title>t</title><link rel="stylesheet" href="/legacy.css"></head><body>'+body+'</body></html>')
PY
