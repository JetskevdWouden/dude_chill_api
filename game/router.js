const { Router } = require('express');
const Game = require('./model');
const User = require('../user/model');

const router = new Router()

//CREATE GAME
router.post('/games', (req, res, next) => {
    Game
        .create()       //identifier?
        .then(game => {
            res
                .status(201)
                .send({
                    message: "A NEW GAME WAS CREATED",
                    game: game
                })
        })
        .catch(error => next(error))
})

//DELETE GAME
router.delete('/games/:id', (req, res, next) => {
    const gameId = req.params.id

    Game
        .findOne({
            where: {
                id: gameId
            }
        })
        .then(game => {
                game
                .destroy(game)
                .then(game => {
                    if (!game) {
                        res
                            .status(404)
                            .send({
                                message: `GAME WITH ID ${gameId} DOES NOT EXIST`
                            })
                    } else {
                        res
                            .status(200)
                            .send({
                                message: `GAME WITH ID ${gameId} WAS DELETED`
                            })
                    }
                })
                .catch(error => next(error))
        })
        .catch(error => next(error))
})


module.exports = router;

