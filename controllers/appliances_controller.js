// DEPENDENCIES
const appliances = require('express').Router()
const db = require('../models')
const { Appliance } = db 

// FIND ALL APPLIANCES, get all route
appliances.get('/', async (req, res) => {
    try {
        const foundAppliances = await Appliance.findAll()
        res.status(200).json(foundAppliances)
    } catch (error) {
        res.status(500).json(error)
    }
})


// EXPORT
module.exports = appliances
