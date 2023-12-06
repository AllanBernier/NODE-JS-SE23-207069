const express = require("express")
const router = express.Router();

const productRequest = require("../middleware/productRequest")

const controller = require("../controller/productController")

router.get("", controller.getAll)
router.get("/:id", controller.findById)
router.post("", productRequest, controller.store)
router.put("/:id", productRequest, controller.update)
router.delete("/:id", controller.destroy)

module.exports = router
