const koaRouter = require('koa-router')

function routerCreater(_options = {}){
    let routerInstance = false
    if(Object.prototype.toString.call(_options) !== '[object Object]'){
        throw new Error('options should be an object')
        return
    }
    if(routerInstance){
        return
    }
    return new koaRouter(_options)
}

module.exports.init = routerCreater

