const { Router } = require('express');
const User = require('../user/model');

const router = new Router()

//ADD NEW USER
router.post('/sign-up', (req, res, next) => {
    const newUser = {
        username: req.body.username
    }

    User
        .create(newUser)
        .then(user => {
            res
                .status(201)
                .send({
                    message: "NEW USER CREATED",
                    user: user
                })
        })
        .catch(error => next(error))
})

//GET all users
router.get('/all-users', (req, res, next) => {
    User
        .findAll()
        .then(users => {
            res
                .status(200)
                .send({
                    message: "ALL USERS",
                    users: users
                })
        })
        .catch(error => next(error))
})

//GET user by id //or username?
router.get('/users/:id', (req, res, next) => {
    const userId = req.params.id         //FRONT!set user Id in params

    User
        .findOne({
            where: {
                id: userId
            }
        })
        .then(user => {
            if(!user){
                res
                    .status(404)
                    .send({
                        message: "USER DOES NOT EXIST"
                    })
            } else {
                res
                    .status(200)
                    .send({
                        message: `USER ${user.username}`,
                        user: user
                    })
            }
        })
        .catch(error => next(error))
})

//UPDATE GAME ID - JOIN GAME
router.put('/users/:userId/games/:gameId', (req, res, next) => {
    const gameId = req.params.gameId
    const userId = req.params.userId

    User
        .findOne({
            where: {
                id: userId
            }
        })
        .then(user => {
            user
                .update({
                    gameId: gameId
                })
                .then(entity => {
                    res
                        .status(204)
                        .send({
                            message: `USER ${entity.username} WAS ADDED TO GAME ${gameId}`,
                            user: entity
                        })
                })
                .catch(error => next(error))
        })
        .catch(error => next(error))
})

//UPDATE STRESS LEVEL
router.put('/users/:id/stress', (req, res, next) => {
    const userId = req.params.id 
    const stress = req.body.stress

    User
        .findOne({
            where: {
                id: userId
            }
        })
        .then(user => {
            user
                .update({
                    stress: stress
                })
                .then(entity => {
                    res
                        .status(204)
                        .send({
                            message: `USER ${entity.username}'s STRESS HAS BEEN UPDATED`,
                            user: entity
                        })
                })
                .catch(error => next(error))
        })
        .catch(error => next(error))
})

//GET USERS IN A GAME
router.get('/users/games/:id', (req,res, next) => {
    const gameId = req.params.id
    User
        .findAll({
            where: {
                gameId: gameId
            }
        })
        .then(users => {
            if(!users){
                res
                    .status(200)
                    .send({
                        message: "NO USERS IN THIS GAME"
                    })
            } else {
                res
                    .status(200)
                    .send({
                        message: `ALL USERS IN GAME ${gameId}`,
                        users: users
                    })
            }
        })
})

//DELETE user by id// or username?
router.delete('/users/:id', (req, res, next) => {
    const userId = req.params.id

    User
        .findOne({
            where: {
                id: userId
            }
        })
        .then(user => {
            if(!user) {
                res
                    .status(404)
                    .send({
                        message: "USER DOES NOT EXIST"
                    })
            } else {
                user
                    .destroy()
                    .then(user => {
                        res
                            .status(204)
                            .send({
                                message: `USER WITH ID ${userId} HAS BEEN DELETED`
                            })
                    })
                    .catch(error => next(error))
            }
        })
        .catch(error => next(error))
})

module.exports = router