const Sequelize = require('sequelize')

const DB = require('../conf/db/dbConfig')

function DBinit({name, user, password, host, port}){
    return new Sequelize(name, user, password, {
        host: host,
        dialect: 'mysql',
        pool:{
            max: 5,
            min: 0,
            idle: 10000
        }
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
