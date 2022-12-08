// DEPENDENCIES
const carts = require('express').Router()
const db = require('../models')
const { Cart } = db 
const { Op } = require('sequelize')

// FIND ALL CARTS, get all route
carts.get('/', async (req, res) => {
    let searchTerm = req.body.description
    console.log ('this serarchTerm arrived: ' + searchTerm)
    try {
        const foundCarts = await Cart.findAll({
            where: {description: { [Op.iLike]: `%${searchTerm ? searchTerm: ''}%` }}
    })
        res.status(200).json(foundCarts)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC CART, show route
carts.get('/:id', async (req, res) => {
    try {
        const foundCarts = await Cart.findOne({
            where: { cart_id: req.params.id }
        })
        res.status(200).json(foundCarts)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A CART, create route
carts.post('/', async (req, res) => {
    try {
        const newCart = await Cart.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new cart',
            data: newCart
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A CART, update route
carts.put('/:id', async (req, res) => {
    try {
        const updatedCarts = await Cart.update(req.body, {
            where: {
                cart_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedCarts} cart(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A CART, delete route
carts.delete('/:id', async (req, res) => {
    try {
        const deletedCarts = await Cart.destroy({
            where: {
                cart_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedCarts} cart(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = carts
