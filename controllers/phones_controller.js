// DEPENDENCIES
const phones = require('express').Router()
const db = require('../models')
const { Phone } = db 
const { Op } = require('sequelize')

// FIND ALL PHONESS, get all route
phones.get('/', async (req, res) => {
    try {
        const foundPhones = await Phone.findAll()
        res.status(200).json(foundPhones)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC PHONE, show route
phones.get('/:id', async (req, res) => {
    try {
        const foundPhones = await Phone.findOne({
            where: { phones_id: req.params.id }
        })
        res.status(200).json(foundPhones)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A PHONE, create route
phones.post('/', async (req, res) => {
    try {
        const newPhone = await Phone.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new phone',
            data: newAppliance
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A PHONE, update route
phones.put('/:id', async (req, res) => {
    try {
        const updatedPhones = await Phone.update(req.body, {
            where: {
                phones_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedPhones} phone(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A PHONE, delete route
phones.delete('/:id', async (req, res) => {
    try {
        const deletedPhones = await Phone.destroy({
            where: {
                phones_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedPhones} phone(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = phones
