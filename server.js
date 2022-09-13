const Container = require("./index.js");
const products = new Container("./products.txt");

const express = require("express");
const app = express()

const PORT = process.env.PORT

const server = app.listen(PORT, () => {

    console.log("el servidor esta eschuchando el puerto" +server.address().port)
})





app.get( "/products", (require, response) => {

    const items = products.getAll(products)
    
    response.send(`<p> ${items} </p>`)

    console.log("hola")
})


// app.get( "/randomProduct", (require, response) => {

//     response.send(getRandom(product))

//     return response;
// })


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



  //   products.save(product3)


// products.getAll(products)

//  products.deleteById(1)
// products.getById(3)
// products.deleteAll(products)