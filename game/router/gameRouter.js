const express = require("express")
const router = express.Router()
const methods = require("../controller/gameController")


console.log("In GameRouter")

router.put("/score/:win/:lose/:tie", methods.update)
router.post("/restart", methods.restart)
router.get("/score", methods.imaMiddleWare, methods.getScore)
router.get("/play/:action", methods.play)

module.exports = router