const express = require ("express")
const {Router} = express

const Container = require ("../../db/index.js")
const products = new Container("./products.txt");

const router = Router()





router.get("/products", async (req, res) =>{

    const items =  await products.getAll(products)
    
    res.status(200).json(items)

})


router.get("/product/:id", async (req, res) => {

    let id = parseInt(req.params.id)
    
    const product = await products.getById(id)
    
    res.status(200).json(product)
})


router.post("/products", async (req, res) => {

    //let data = req.body
    
    const data = {title,price,thumbnail} = req.body
    
    const product = await products.save(data)
    
    console.log(product)
    res.status(201).json(data)


})


router.put("/product/:id", async (req, res) => {

    let id = parseInt(req.params.id)
    let data = {title,price,thumbnail} = req.body
    
    const modified = await products.modify(id, data)

    res.status(200)
})


router.delete("/product/:id", async (req, res) => {

    let id = parseInt(req.params.id)

    products.deleteById(id)

    res.status(200).end()
})


module.exports = router