const koaRouter = require('koa-router')
const fs = require('fs')
const path = require('path')

const router = new koaRouter()

const apiWatcher = function(){

}


router.get('/', (ctx) => {
    ctx.redirect('/index')
})

router.get('/index', ctx => {
    ctx.response.type = 'text/html;charset=utf-8';
    ctx.response.status = 200;
    // ctx.res.write(fs.readFileSync(path.join(__dirname, './page/index.html'), 'utf-8'))
    ctx.body = fs.readFileSync(path.join(__dirname, './page/index.html'), 'utf-8')
})

router.get('/test', ctx => {
    ctx.body = fs.readFileSync(path.join(__dirname, './page/test.html'), 'utf-8')
})

router.get('/index/getapi', ctx => {
    let query = ctx.request.query
    console.log(query)
    // ctx.response.type = 'text/json';
    ctx.response.status = 200;
    ctx.body = query
})

router.post('/index/postapi', ctx => {
    let query = ctx.request.body
    console.log(query)
    ctx.response.status = 200;
    ctx.body = query
})



module.exports = router

