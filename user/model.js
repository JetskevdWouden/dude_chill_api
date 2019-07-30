const Sequelize = require('sequelize');
const db = require('../db');
const Game = require('../game/model');

const User = db.define(
    'user',
    {
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        stress: {
            type: Sequelize.INTEGER,
            defaultValue: 50
        }
    },{
        timestamps: false,
        tableName: 'users'
    }
)

User.belongsTo(Game)

module.exports = User;