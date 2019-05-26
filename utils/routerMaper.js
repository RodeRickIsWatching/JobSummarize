const fs = require('fs')
const path = require('path')
const routerConfig = require('../conf/router/routerConfig')
const map = {}
const root = process.cwd()


function _join(_src) {
    return path.join(root, _src)
}

const dirApp = fs.readdirSync(path.join(process.cwd(), 'router'))

dirApp.forEach(item => {
    if (!item.includes('List')) {
        map[item.split('R')[0]] = 'router/' + item
    }
})


const routerList = {}

Object.keys(map).forEach(item => {
    routerList[item] = {
        ...routerConfig[item],
        src: _join(map[item]),
    }
})


/**
 * 最后导出{[routerName]: {options: {}, src: ''}}
 */

module.exports = routerList
