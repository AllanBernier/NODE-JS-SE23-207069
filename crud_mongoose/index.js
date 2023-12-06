
const express = require("express")
const app = express()
const productRouter = require("./router/productRouter")
const bodyParser = require('body-parser');


const mongoose = require("mongoose")
require("dotenv").config()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


mongoose.connect(process.env.MONGO_URI)
.then( (res) => {
    console.log("Connected to db")
    app.listen(process.env.SERVER_PORT, () => {
        console.log("Serveur démarré !")
    })    
})
.catch( (err) => {
    console.log(err)

    console.log("Connection to db failed")
})



app.use('/product', productRouter)

app.get('/helloworld/', (req, res) => {
    console.log("in helloworld")
    res.send('Hello world !')
})