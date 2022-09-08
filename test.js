const Container = require("./index.js")

const products = new Container("./products.txt");

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

  products.save(product1)


// products.getAll(products)

//  products.deleteById(1)
// products.getById(3)
// products.deleteAll(products)