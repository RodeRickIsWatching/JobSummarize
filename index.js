const Koa = require('koa')
const BodyParse = require('koa-bodyparser')
const fs = require('fs')
const path  = require('path')

const globalConfig =  require('./conf/globalConfig')
const RouterList = require('./router/routerList')

require('./router/userRouter')

// 使用.conf文件
// const configHandler = require('./utils/configHandler')
// const configObj = configHandler(fs.readFileSync(path.resolve(process.cwd(), './conf/glob.conf'),'utf8'))

const app = new Koa();

app.use(BodyParse())

Object.keys(RouterList).forEach(item=>{
    app.use(RouterList[item].routes()).use(RouterList[item].allowedMethods());
})


app.listen(globalConfig.PORT, ()=>{
    console.log(`opened on 127.0.0.1:${globalConfig.PORT}，rootSrc: ${globalConfig.ROOT}`)
})
