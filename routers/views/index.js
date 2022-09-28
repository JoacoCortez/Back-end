const {Router} = require("express")

const Container = require("../../db/index.js")
const products = new Container("products.txt")

const router = Router()



router.get("/", (req, res, next) =>{

    
    
    res.render("layout", )


})


router.get("/products", async (req, res, next) =>{

    try{
        const items = await products.getAll(products)

        console.log(items)
        res.render("products", items)
        
    }catch(error){

        next(error)
    }
})


router.get("/product/:id", async (req, res, next) =>{

    try{
        const id = parseInt(req.params.id)

        const item = await products.getById(id)
        res.render("product", item)
    
    } catch(error){

        next(error)
    }
})

module.exports = router