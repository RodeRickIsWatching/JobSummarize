const Sequelize = require('sequelize')
const sequelize = require('../dao/sequelize')

const User = sequelize.define('user_case', {
    user_name: {
        type: Sequelize.STRING
    },
    user_password: {
        type: Sequelize.INTEGER
    }
    },{
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    underscored: true,
    tableName: 'user_case'
    })
User.sync()


module.exports = User
