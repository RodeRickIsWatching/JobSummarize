const koaRouter = require('koa-router')
const routerMap = require('../utils/routerMaper')



/**
 * 通过查询routerConfig，自动进行new router
 * @param _router
 */
function autoRouterCreator(_router){
    let routerArr = []

    Object.keys(_router).forEach((item, index) => {
        routerArr.push(new koaRouter(_router[item].options))
        autoRouterConnector(routerArr[index], _router[item].src)
    })

    return routerArr
}


/**
 * 自动连接router对应方法和回调
 */
function autoRouterConnector(_router, _src){
    const file = require(_src)
    Object.keys(file).forEach(item=>{
        _router[file[item].method](file[item].api, file[item].cb)
    })
}



module.exports = autoRouterCreator(routerMap)



