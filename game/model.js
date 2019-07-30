const Sequelize = require('sequelize');
const db = require('../db');

const Game = db.define|(
    'game',
    {
        identifier: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'games'
    }
)

module.exports = Game;