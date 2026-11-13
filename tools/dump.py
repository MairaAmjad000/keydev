import sys, asyncio
from playwright.async_api import async_playwright
async def main(url,out):
    async with async_playwright() as p:
        b=await p.chromium.launch()
        ctx=await b.new_context(java_script_enabled=False)
        async def route(r):
            u=r.request.url
            if u.startswith('http://localhost') or u.startswith('data:'): return await r.continue_()
            return await r.abort()
        await ctx.route('**/*',route)
        pg=await ctx.new_page()
        await pg.goto(url)
        html=await pg.evaluate('document.documentElement.outerHTML')
        open(out,'w',encoding='utf-8').write(html)
        print(out,len(html))
        await b.close()
asyncio.run(main(sys.argv[1],sys.argv[2]))
