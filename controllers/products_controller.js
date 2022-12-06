// DEPENDENCIES
const products = require('express').Router()
const db = require('../models')
const { Product } = db 
const { Op } = require('sequelize')

// FIND ALL PRODUCTS, get route
products.get('/', async (req, res) => {
    try {
        const foundProducts = await Product.findAll()
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC PRODUCT, show route
products.get('/:id', async (req, res) => {
    try {
        const foundProducts = await Product.findOne({
            where: { prod_id: req.params.id }
        })
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A PRODUCT, create route
products.post('/', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new product',
            data: newProduct
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A PRODUCT, update route
products.put('/:id', async (req, res) => {
    try {
        const updatedProducts = await Product.update(req.body, {
            where: {
                prod_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedProducts} product(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A PRODUCT, delete route
products.delete('/:id', async (req, res) => {
    try {
        const deletedProducts = await Product.destroy({
            where: {
                prod_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedProducts} product(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = products
