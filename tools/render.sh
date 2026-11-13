#!/bin/bash
# bundle + render the React tree to static HTML (body fragment) -> /home/claude/harness/out/body.html
set -e
P=/home/claude/proj/keydev-fixed
mkdir -p /home/claude/harness/out
NODE_PATH=/opt/npm-tools/node_modules /opt/npm-tools/node_modules/.bin/esbuild /home/claude/harness/entry.tsx \
  --bundle --platform=node --format=esm --jsx=automatic --alias:@=$P/src --loader:.json=json \
  --outfile=/home/claude/harness/out/bundle.mjs --log-level=warning --banner:js="import{createRequire}from'module';const require=createRequire(import.meta.url);"
NODE_PATH=/opt/npm-tools/node_modules node /home/claude/harness/out/bundle.mjs > /home/claude/harness/out/body.html 2> /home/claude/harness/out/render.err || true
wc -c /home/claude/harness/out/body.html; head -c 1500 /home/claude/harness/out/render.err
