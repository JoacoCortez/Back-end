const Container = require("../db/index.js")
const {config} = require("../db/MySQL/config.js")

const DB = new Container(config, "products")


function getProducts(){
    
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    
    return DB.getAll()
}

function addProduct(product){
    return DB.save(product)
}

module.exports = {
    getProducts,
    addProduct

}