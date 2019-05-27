const fs = require('fs')
const path  = require('path')

const userApi = require("../conf/router/userApi")

const userController = require('../web/userController')



module.exports.register = {
    method: 'post',
    api: userApi.user,
    cb: userController
}

module.exports.search = {
    method: 'get',
    api: userApi.user,
    cb: userController
}

module.exports.delete = {
    method: 'delete',
    api: userApi.user,
    cb: userController
}

module.exports.modify = {
    method: 'put',
    api: userApi.user,
    cb: userController
}
