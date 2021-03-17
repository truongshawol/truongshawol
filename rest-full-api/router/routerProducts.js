const express = require('express')
const ProductsModels = require('../models/products')

const routerProducts = express.Router()

// lay du lieu tu db
routerProducts.get('/', (req, res, next) => {
    var page = req.query.page
    var limit = req.query.limit
    var key = req.query.key
    if(page){
        // get theo page
        page = parseInt(page)
        limit = parseInt(limit)
        key = String(key)
        const start = (page - 1) * limit
        const end = page * limit
        ProductsModels.find({})
        .then(data => {
            ProductsModels.countDocuments({}).then(total=>{
                var result = data.filter( item => {
                    return item.name.toLowerCase().includes(key.toLowerCase())
                })
                var totalPage = Math.ceil(total/limit)
                res.json({
                    totalPage: totalPage,
                    data: result.slice(start, end)
                })
            })
        })
        .catch(err => {
            res.status(500).json('server failed')
        })
        
    }else{
        // get all
        ProductsModels.find({})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json('server failed')
        })
    }
})

routerProducts.get('/:id', (req,res) => {
    const id = req.params.id
    ProductsModels.findById(id)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json('server failed')
    })
})

// them moi du lieu trong db
routerProducts.post('/', (req, res, next) => {
    const name = req.body.name
    const species = req.body.species
    const price = req.body.price
    const ava = req.body.ava
    
    ProductsModels.findOne({
        name: name
    })
    .then(data => {
        if(data) {
            res.json('product da ton tai')
        }else{
            return ProductsModels.create({
                name: name,
                species: species,
                price: price,
                ava: ava
            })
        }
    }) 
    .then((data) => {
        res.json('product success')
    })
    .catch((err) => {
        res.status(500).json('product failed')
    })
})

// // sua du lieu trong db
routerProducts.put('/:id', (req, res, next) => {
    const id = req.params.id

    const newName = req.body.newName
    const newSpecies = req.body.newSpecies
    const newPrice = req.body.newPrice
    const newAva = req.body.newAva

    ProductsModels.findByIdAndUpdate(id, {
        name: newName,
        species: newSpecies,
        price: newPrice,
        ava: newAva
    })
    .then(data => {
        res.json('update success')
    })
    .catch(err => {
        res.status(500).json('loi server')
    })
})

// // xoa du lieu trong db
routerProducts.delete('/:id', (req, res, next) => {
    const id = req.params.id
    ProductsModels.deleteOne({
        _id: id
    })
    .then(data => {
        res.json('delete success')
    })
    .catch(err => {
        res.status(500).json('loi server')
    })
})

module.exports = routerProducts