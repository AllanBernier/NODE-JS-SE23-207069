const sequelize = require("sequelize")
const db = require("../config/database")


const productSchema = db.define(
    "product",
    {
        id : {type : sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        name : {type : sequelize.STRING},
        price : {type : sequelize.FLOAT}
    }
)

module.exports = productSchema
