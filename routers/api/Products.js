const express = require ("express")
const {Router} = express

const controller = require("../../controllers/index.js")
const router = Router()


router.post("/", controller.postForm)


//router.get("/", controller.getAll)


router.get("/products", controller.getAll)


router.get("/product/:id", controller.getById)


router.post("/products", controller.post)


router.put("/product/:id", controller.modify)


router.delete("/product/:id", controller.deleteById)


module.exports = router