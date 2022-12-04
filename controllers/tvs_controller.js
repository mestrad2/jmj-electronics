// DEPENDENCIES
const tvs = require('express').Router()
const db = require('../models')
const { Tv } = db 

// FIND ALL TVS, get all route
tvs.get('/', async (req, res) => {
    try {
        const foundTvs = await Tv.findAll()
        res.status(200).json(foundTvs)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC TV, show route
tvs.get('/:id', async (req, res) => {
    try {
        const foundTvs = await Tv.findOne({
            where: { tvs_id: req.params.id }
        })
        res.status(200).json(foundTvs)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A TV, create route
tvs.post('/', async (req, res) => {
    try {
        const newTv = await Tv.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new TV',
            data: newAppliance
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A TV, update route
tvs.put('/:id', async (req, res) => {
    try {
        const updatedTvs = await Tv.update(req.body, {
            where: {
                tvs_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedTvs} TV(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A TV, delete route
tvs.delete('/:id', async (req, res) => {
    try {
        const deletedTvs = await Tv.destroy({
            where: {
                tvs_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedTvs} TV(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = tvs