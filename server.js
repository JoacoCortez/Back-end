const Container = require("./index.js");
const products = new Container("./products.txt");

const express = require("express");
const app = express()

const PORT = process.env.NODE_PORT;
const ENV = process.env.NODE_ENV;

const server = app.listen(PORT, () => {

    console.log("el servidor esta eschuchando el puerto" + server.address().port + `ENV: ${ENV}`)
})





app.get( "/products", async (req, res) => {

    const items =  await products.getAll()
    
    res.send(JSON.stringify(items))

    
})





app.get( "/random", (req, res) => {

    async function random(){
        
        data = await products.getAll()

        let number = Math.floor(Math.random() * data.length)

        let randomProduct = [];

        newList = data.map((item, index) => index === number && randomProduct.push(item))
        
        console.log(randomProduct)
        res.send(randomProduct)
    }
    
    random()
    
    
    
})


server.on("Error", () => {

    console.log("Error")
})


const product1 = {
    
    title: "Coca-Cola",
    price: 200,
    thumbnail: "dsa "


}

const product2 = {
    
    title: "Doritos",
    price: 240,
    thumbnail: "dsa" 
      
}

const product3 = {
    title: "Cerveza Quilmes",
    price: 200,
    thumbnail: "dsa"
}

//  products.save(product1)


// products.getAll(products)

//  products.deleteById(1)
// products.getById(3)
// products.deleteAll(products)