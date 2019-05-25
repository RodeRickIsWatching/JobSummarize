const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

// const configHandler = require('../utils/configHandler')
// const DB = configHandler(fs.readFileSync(path.resolve(__dirname, '../conf/db.conf'),'utf8'))

const DB = require('../conf/db/dbConfig')

function DBinit({name, user, password, host, port}){
    return new Sequelize(name, user, password, {
        host: host,
        dialect: 'mysql',

    })
}



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
