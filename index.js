const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const Router = require('koa-router')


const app = new Koa();
const router = new Router()


const static_path = './page'
// app.use(router.routes()).use(router.allowedMethods());


app.use(async (ctx, next) => {
    let full_path = path.join(__dirname, static_path)
    let content;
    console.log(ctx)
    let baseUrl = ctx.originalUrl.split('?')[0]
    try {
        content = fs.readFileSync(`${full_path}/${baseUrl}`)
    }catch(e){
        content = '<h1>404! 404!</h1>'
    }
    ctx.res.writeHead(200)
    ctx.res.write(content)
    ctx.res.end()
})


app.listen(12306)
