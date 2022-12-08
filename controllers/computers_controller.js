//FUTURE DEVELOPMNET

// DEPENDENCIES
const computers = require('express').Router()
const db = require('../models')
const { Computer } = db 
const { Op } = require('sequelize')

// FIND ALL COMPUTERS, get all route
computers.get('/', async (req, res) => {
    let searchTerm = req.body.description
    console.log ('this serarchTerm arrived: ' + searchTerm)
    try {
        const foundComputers = await Computer.findAll({
            where: {description: { [Op.iLike]: `%${searchTerm ? searchTerm: ''}%` }}
    })
        res.status(200).json(foundComputers)
    } catch (error) {
        res.status(500).json(error)
    }
})


// FIND A SPECIFIC COMPUTER, show route
computers.get('/:id', async (req, res) => {
    try {
        const foundComputers = await Computer.findOne({
            where: { computers_id: req.params.id }
        })
        res.status(200).json(foundComputers)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A COMPUTER, create route
computers.post('/', async (req, res) => {
    try {
        const newComputer = await Computer.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new computer',
            data: newComputer
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A COMPUTER, update route
computers.put('/:id', async (req, res) => {
    try {
        const updatedComputers = await Computer.update(req.body, {
            where: {
                computers_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedComputers} computer(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A COMPUTER, delete route
computers.delete('/:id', async (req, res) => {
    try {
        const deletedComputers = await Computer.destroy({
            where: {
                computers_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedComputers} computer(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = computers