"""Dump the reference DOM (JS disabled, browser-grade parse, case-preserving) to JSON."""
import sys, json, asyncio
from playwright.async_api import async_playwright
JS = r"""
() => {
  function walk(n){
    if(n.nodeType===3) return {t:n.nodeValue};
    if(n.nodeType!==1) return null;
    const o={n:n.localName,a:[],c:[]};
    for(const at of n.attributes) o.a.push([at.name,at.value]);
    for(const ch of n.childNodes){const r=walk(ch); if(r) o.c.push(r);}
    return o;
  }
  return walk(document.body);
}
"""
async def main(url,out):
    async with async_playwright() as p:
        b=await p.chromium.launch()
        ctx=await b.new_context(java_script_enabled=False)
        async def route(r):
            u=r.request.url
            if u.startswith(('http://localhost','data:','file:')): return await r.continue_()
            return await r.abort()
        await ctx.route('**/*',route)
        pg=await ctx.new_page(); await pg.goto(url)
        tree=await pg.evaluate(JS)
        json.dump(tree,open(out,'w',encoding='utf-8'),ensure_ascii=False)
        print('ok',out)
        await b.close()
asyncio.run(main(sys.argv[1],sys.argv[2]))
