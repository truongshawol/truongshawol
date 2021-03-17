const express = require('express')
const AccountModels = require('../models/account')
const jwt = require('jsonwebtoken')

const routerAccount = express.Router()

routerAccount.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    AccountModels.findOne({
        username: username
    })
    .then(data => {
        if(data) {
            res.json('account da ton tai')
        }else{
            return AccountModels.create({
                username: username,
                password: password
            })
        }
    }) 
    .then((data) => {
        res.json('account success')
    })
    .catch((err) => {
        res.status(500).json('account failed')
    })
})

routerAccount.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    AccountModels.findOne({
        username: username,
        password: password
    })
    .then((data)=>{
        if(data) {
            var token = jwt.sign({
                _id: data._id
            }, 'token')
            var ketqua = jwt.verify(token, 'token')
            res.json({
                data: data,
                token: token,
                message: ketqua._id
            })
        }else{
            res.status(400).json('login failed')
        }
    })
    .catch((err)=>{
        res.status(500).json('err sever')
    })
})

routerAccount.get('/', (req,res) => {
    var token = req.body.token
    var result = jwt.verify(token, 'token')
    console.log(result)
    AccountModels.findOne({_id: result._id})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json('server failed')
    })
})

module.exports = routerAccount