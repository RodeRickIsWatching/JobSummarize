// 处理接口传来的参数，进行简单截取后传入service层
const userService = require('../service/userService')



module.exports = function(ctx){
    switch (ctx.method.toLowerCase()) {
        case 'get':
            userService.get(ctx.query, ctx)
            break
        case 'post':
            userService.post(ctx.request.body, ctx)
            break
        case 'put':
            userService.put(ctx.query, ctx)
            break
        case 'delete':
            userService.delete(ctx.query, ctx)
            break
    }
}
