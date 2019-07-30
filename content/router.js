const {Router} = require('express');
const Sequelize = require('sequelize');
const Content = require('./model');

const router = new Router();

//GET 10 RANDOM CONTENT
router.get('/content', (req, res, next) => {
    Content
        .findAll({
            order: Sequelize.literal('random()'), limit: 8
        })
        .then(content => {
            res
                .status(200)
                .send({
                    message: `${content.length} RANDOM ITEMS FROM CONTENT`,
                    content: content,
                })
        })
        .catch(error => next(error))
})

module.exports = router