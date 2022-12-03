// DEPENDECIES 
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to JMJ Electronics'
    })
})

// CONTROLLERS 
const appliancesController = require('./controllers/appliances_controller')
app.use('/appliances', appliancesController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎮 JMJ Electronics on port: ${process.env.PORT}`)
})
