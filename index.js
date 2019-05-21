const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const BodyParse = require('koa-bodyparser')

const app = new Koa();
const router = new Router()

router.get('/', (ctx) => {
    ctx.redirect('/index')
})

router.get('/index', ctx => {
    ctx.body = fs.readFileSync(path.join(__dirname, './page/index.html'), 'utf-8')
})
router.get('/test', ctx => {
    ctx.body = fs.readFileSync(path.join(__dirname, './page/test.html'), 'utf-8')
})
router.get('/index/getapi', ctx => {
    let query = ctx.request.query
    console.log(query)
    ctx.response.status = 200;
    ctx.response.body = query
})
router.post('/index/postapi',ctx => {
    let query = ctx.request.body
    console.log(query)
    ctx.response.status = 200;
    ctx.response.body = query
})


app.use(BodyParse())
app.use(router.routes()).use(router.allowedMethods());

app.listen(12306)
