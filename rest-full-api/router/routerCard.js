const express = require('express')
const CardModels = require('../models/card')

const routerCard = express.Router()

routerCard.get('/', (req,res) => {
    CardModels.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json('server failed')
    })
})

routerCard.post('/', (req, res, next) => {
    const name = req.body.name
    const price = req.body.price
    const ava = req.body.ava
    
    CardModels.findOne({
        name: name
    })
    .then(data => {
        if(data) {
            res.json('card da ton tai')
        }else{
            return CardModels.create({
                name: name,
                price: price,
                ava: ava
            })
        }
    }) 
    .then((data) => {
        res.json('card success')
    })
    .catch((err) => {
        res.status(500).json('card failed')
    })
})

module.exports = routerCard