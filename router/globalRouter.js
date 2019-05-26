const fs = require('fs')
const path  = require('path')

const globalApi = require("../conf/router/globalApi")


module.exports.init = {
    method: 'get',
    api: globalApi.init,
    cb: (ctx) => {
        ctx.redirect('/index')
    }
}

module.exports.index = {
    method: 'get',
    api: globalApi.index,
    cb: (ctx) => {
        ctx.response.type = 'text/html;charset=utf-8'
        ctx.response.status = 200
        ctx.body = fs.readFileSync(path.join(process.cwd(), '/page/index.html'), 'utf-8')
    }
}




// userRouter.get('/index', ctx => {
//     ctx.response.type = 'text/html;charset=utf-8';
//     ctx.response.status = 200;
//     // ctx.res.write(fs.readFileSync(path.join(__dirname, './page/index.html'), 'utf-8'))
//     ctx.body = fs.readFileSync(path.join(root, './page/index.html'), 'utf-8')
// })
//
// userRouter.get('/test', ctx => {
//     ctx.body = fs.readFileSync(path.join(root, './page/test.html'), 'utf-8')
// })
//
// userRouter.get('/index/getapi', ctx => {
//     let query = ctx.request.query
//     console.log(query)
//     // ctx.response.type = 'text/json';
//     ctx.response.status = 200;
//     ctx.body = query
// })
//
// userRouter.post('/index/postapi', ctx => {
//     let query = ctx.request.body
//     console.log(query)
//     ctx.response.status = 200;
//     ctx.body = query
// })



