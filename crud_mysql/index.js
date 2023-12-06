
const express = require("express")
const app = express()
const productRouter = require("./router/productRouter")
const bodyParser = require('body-parser');
const cors = require("cors")
app.use(cors())


require("dotenv").config()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(process.env.SERVER_PORT, () => {
    console.log("Serveur démarré !")
})    



app.use('/product', productRouter)

app.get('/helloworld/', (req, res) => {
    console.log("in helloworld")
    res.send('Hello world !')
})