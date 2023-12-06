const express = require("express")
const app = express()

app.listen(3000, () => {
    console.log("App running on port 3000")
})

app.get("/", (req, res) => {
    res.send("Hello World !")
})

app.get("/json", (req, res) => {
    res.json( { message : "Hello World !"})
})

module.exports = app