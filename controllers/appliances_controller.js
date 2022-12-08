//FUTURE DEVELOPMENT

// DEPENDENCIES
const appliances = require('express').Router()
const db = require('../models')
const { Appliance } = db 
const { Op } = require('sequelize')

// FIND ALL APPLIANCES WITH A searchTerm
appliances.get('/', async (req, res) => {
    let searchTerm = req.body.description
    console.log ('this serarchTerm arrived: ' + searchTerm)
    try {
        const foundAppliances = await Appliance.findAll({
            where: {description: { [Op.iLike]: `%${searchTerm ? searchTerm: ''}%` }}
    })
        res.status(200).json(foundAppliances)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC APPLIANCE, show route
appliances.get('/:id', async (req, res) => {
    try {
        const foundAppliances = await Appliance.findOne({
            where: { appliances_id: req.params.id }
        })
        res.status(200).json(foundAppliances)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE AN APPLIANCE, create route
appliances.post('/', async (req, res) => {
    try {
        const newAppliance = await Appliance.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new appliance',
            data: newAppliance
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE AN APPLIANCE, update route
appliances.put('/:id', async (req, res) => {
    try {
        const updatedAppliances = await Appliance.update(req.body, {
            where: {
                appliances_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedAppliances} appliance(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE AN APPLIANCE, delete route
appliances.delete('/:id', async (req, res) => {
    try {
        const deletedAppliances = await Appliance.destroy({
            where: {
                appliances_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedAppliances} appliance(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = appliances
