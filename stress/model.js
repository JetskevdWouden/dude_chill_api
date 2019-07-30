const Sequelize = require('sequelize');
const db = require('../db');
const User = require('../user/model');

const Stress = db.define(
    'stress',
    {
        level: {
            type: Sequelize.INTEGER,
            // allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'stress'
    }
)

Stress.belongsTo(User);
//Stress.belongsTo(Game);

module.exports = Stress;