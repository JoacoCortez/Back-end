const {Router} = require("express")
const router = Router()

// const Container = require ("../../db/index")
// const products = new Container("./products.txt");

const controller = require("../../controllers/index.js")



router.get("/", async (req, res) =>{

    try{
        
        const items = await controller.getAll()
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        
        detailUrlBase = process.env.BASE_HOST 
        console.log("LOS ITEMS DE LA RUTA ", items)
        res.render("form", {items})


    }catch(error){

        console.log("fallo el form", error)
        throw new Error
    }


})



router.get("/products", async (req, res) =>{
    
    const items = await products.getAll(products)
    
    console.log(items)
    console.log({items})
    
    res.render("products", {items})

})


router.get("/product/:id", async (req, res) =>{

    let id = parseInt(req.params.id)
    const itemId = await products.getById(id)
    
    res.render("product", itemId )

})





module.exports = router