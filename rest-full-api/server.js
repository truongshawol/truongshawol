const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routerAccount = require('./router/routerAccount')
const routerProducts = require('./router/routerProducts')
const routerCard = require('./router/routerCard')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.get(`/`, (req, res, next) => {
    res.json(`kieu van truong`)
})

app.use('/api/account/', routerAccount)
app.use('/api/products/', routerProducts)
app.use('/api/card', routerCard)


app.listen(8080, () => {
    console.log("server started on port 8080")
})