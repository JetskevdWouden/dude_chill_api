const Sequelize = require('sequelize');
const databaseURL = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'

const sequelize = new Sequelize(databaseURL);

sequelize
    .sync({alter:true})
    // .sync({force:true})
    .then(() => console.log('Database schema updated'))
    .catch(console.error)

module.exports = sequelize;