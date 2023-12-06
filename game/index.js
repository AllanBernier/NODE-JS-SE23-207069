const express = require("express")
const app = express();
const gameRouter = require("./router/gameRouter")



app.listen(3000,() => {
    console.log("App started on port 3000")
})


app.use("/game", gameRouter)



module.exports = app