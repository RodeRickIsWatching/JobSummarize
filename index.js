const Koa = require('koa')
const BodyParse = require('koa-bodyparser')
const fs = require('fs')
const path  = require('path')

const configHandler = require('./utils/configHandler')
const router = require('./router')

const configObj = configHandler(fs.readFileSync(path.resolve(__dirname, './glob.conf'),'utf8'))

const app = new Koa();


app.use(BodyParse())
app.use(router.routes()).use(router.allowedMethods());

app.listen(configObj.PORT)
