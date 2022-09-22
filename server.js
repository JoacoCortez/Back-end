const express = require("express");
const app = express()

const userAgent = require("express-useragent")
const path = require("path")

const PORT = process.env.NODE_PORT;
const ENV = process.env.NODE_ENV;

const products = require("./Routers/Products")

app.use(express.json())
app.use("/api", products)
app.use("/static", express.static(path.join(__dirname, "Media")))
app.use(userAgent.express())



const server = app.listen(PORT, () => {

    console.log("el servidor esta eschuchando el puerto" + server.address().port + ` ENV: ${ENV}`)
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

//products.save(product1)


// products.getAll(products)

//  products.deleteById(1)
// products.getById(3)
// products.deleteAll(products)