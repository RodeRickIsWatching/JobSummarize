const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const configHandler = require('../utils/configHandler')

function DBinit({name, user, password, host, port}){
    return new Sequelize(name, user, password, {
        host: host,
        dialect: 'mysql',

    })
}

const DB = configHandler(fs.readFileSync(path.resolve(__dirname, './db.conf'),'utf8'))


const sequelize = DBinit({name: DB.DB_NAME, user: DB.DB_USER, password: DB.DB_PASSWORD, host: DB.DB_HOST, port: DB.DB_PORT})

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


module.exports = sequelize
