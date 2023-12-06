
require("dotenv").config()
const sequelize = require("sequelize")

const db = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect : "mysql",
        host: process.env.DB_HOST
    }
)

db.sync()

module.exports = db;