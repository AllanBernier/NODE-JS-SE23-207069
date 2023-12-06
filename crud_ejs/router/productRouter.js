const express = require("express")
const router = express.Router();

const productRequest = require("../middleware/productRequest")

const controller = require("../controller/productController")

router.get("", controller.getAll)

router.get("/create", controller.create)

router.get("/:id", controller.findById)
router.post("", productRequest, controller.store)
router.post("/update/:id", productRequest, controller.update)
router.get("/edit/:id", controller.edit)
router.get("/delete/:id", controller.destroy)

module.exports = router
