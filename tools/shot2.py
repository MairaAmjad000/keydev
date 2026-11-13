import sys, asyncio
from playwright.async_api import async_playwright
async def main(url,out,w):
    async with async_playwright() as p:
        b=await p.chromium.launch()
        ctx=await b.new_context(java_script_enabled=False, viewport={'width':int(w),'height':900})
        async def route(r):
            u=r.request.url
            if u.startswith(('http://localhost','data:','file:')): return await r.continue_()
            return await r.abort()
        await ctx.route('**/*',route)
        pg=await ctx.new_page(); await pg.goto(url, wait_until='load')
        await pg.wait_for_timeout(500)
        h=await pg.evaluate('document.documentElement.scrollHeight')
        await pg.screenshot(path=out, full_page=True)
        print(out,'height',h)
        await b.close()
asyncio.run(main(*sys.argv[1:4]))
