const Sequelize = require('sequelize');
const db = require('../db');

const Content = db.define(
    'content',
    {
        url: {
            type: Sequelize.STRING,
            // alloNull: false
        }
    }, {
        timestamps: false,
        tableName: 'content'
    }
)

module.exports = Content