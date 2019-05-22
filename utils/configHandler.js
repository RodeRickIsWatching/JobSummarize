module.exports = function(_file){
    const resObj = {}
    _file.trim().split('\n').forEach(item => {
        resObj[item.split('=')[0]] = item.split('=')[1].trim()
    })
    return resObj
}
