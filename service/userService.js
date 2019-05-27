/**
 * service层，由于使用了 sequelize（ORM），个人理解该库就是我们需要对dao层增删改查的封装，所以，不需要再自己写dao层
 * 除非对数据库有一些复杂对操作
 */
const userDB = require('../dao/userDB')


module.exports = {
    get(_param, ctx){
        ctx.body = '用户搜索'
    },
    post(_param, ctx){
        const user_name = _param.userName;
        const user_password = _param.userPassword;
        if(ctx.request.body.type === 'signup'){
            ctx.body = `用户注册，账号：${_param.userName}，密码：${_param.password}`
        }else{
            ctx.body = `用户登陆，账号：${_param.userName}，密码：${_param.password}`
        }
    },
    put(_param, ctx){
        ctx.body = '更改用户信息'
    },
    delete(_param, ctx){
        ctx.body = '删除用户'
    }
}
