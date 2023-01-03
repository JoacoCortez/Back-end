const {Router} = require("express")
const router = Router()

const Container = require ("../../db/index")
const products = new Container("./products.txt");

const controller = require("../../controllers/productsControllers")



router.get("/", async (req, res) =>{

    try{
        
        
        detailUrlBase = process.env.BASE_HOST 
    
        res.render("form")


    }catch(error){

        console.log("fallo el form")
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