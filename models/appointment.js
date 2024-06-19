const sequelize = require('../util/database')
const Sequelize = require('sequelize')

const appointment_model = sequelize.define('appointment',{
    username:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    phone:{
        type:Sequelize.BIGINT(10),
        allowNull:true
    }
})

module.exports = appointment_model