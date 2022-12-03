// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const { STRING } = require('sequelize/types')
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class Tv extends Model{}

Tv.init({
    tvs_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true,  
        autoIncrement: true,
        allowNull: false 
    },
    desc: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    cost: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    image: { 
        type: DataTypes.STRING 
    },
    brand: { 
        type: DataTypes.STRING 
    },
    model_num: {
        type: DataTypes.STRING
    },
    spec: {
        type: DataTypes.STRING
    },
    screen_size: {
        type: DataTypes.STRING
    },
    resolution: {
        type: DataTypes.STRING
    },
}, {
    sequelize,                           
    modelName: 'Tv',
    tableName: 'tv',
    timestamps: false
}) 

// EXPORT
module.exports = Tv
