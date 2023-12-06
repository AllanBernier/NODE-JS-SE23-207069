const express = require("express")
const app = express();
const path = require('path')
const productRouter = require("./router/productRouter")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(3000, ()=> {
    console.log("App linstening on port 3000")
})

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views")) // "./views"

app.get("/", (req, res) => {
    res.render('helloworld', {name : "Toto"})
})

app.use(express.static(path.join(__dirname, "public")))

app.use("/product", productRouter)


