// DEPENDECIES 
const express = require('express')
const app = express()
const cors = require('cors')
const { Sequelize } = require('sequelize')
const cors = require ('cors')

app.use(cors())


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to JMJ Electronics'
    })
})


// CONTROLLERS 
const appliancesController = require('./controllers/appliances_controller')
app.use('/appliances', appliancesController)

const cartsController = require('./controllers/carts_controller')
app.use('/carts', cartsController)

const computersController = require('./controllers/computers_controller')
app.use('/computers', computersController)

const phonesController = require('./controllers/phones_controller')
app.use('/phones', phonesController)

const tvsController = require('./controllers/tvs_controller')
app.use('/tvs', tvsController)

const productsController = require('./controllers/products_controller')
app.use('/products', productsController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎮 JMJ Electronics on port: ${process.env.PORT}`)
})
