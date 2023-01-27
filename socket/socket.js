const {Server} = require("socket.io")
// const {config} = require("../db/MySQL/config")
// const Container = require("../db/index")
//const DB = new Container(config, "products")
const DB = require("../controllers/dbController")

let io

const productsArray = DB.getProducts()


class Socket{
    
    static init(httpServer){
        io = new Server(httpServer)
        
        io.on("connection", (clientSocket) =>{
            
            console.log("new client connected ID " + clientSocket.id)
            
            
            
            //clientSocket.emit("init", productsArray)

    
            clientSocket.on("newProduct", async (data) =>{

                console.log("es esto???", data)
                
                
                
                
                let productList = await getProducts(data)
                
                console.log("ME IMAGINO Q ESTO NO ES ", productList)
                let singleProduct = data

                console.log("producto solo pa ", singleProduct)
                io.emit("showNew", singleProduct)
            })
            
                
            
            
            
            clientSocket.on("disconnect", () =>{

                console.log("User disconected")
            })


        })



    }
}


const getProducts = async (data) =>{

    console.log("data del getProducts", data)
    let newProduct = await DB.addProduct(data) 
    let productsArray = await DB.getProducts()
    
    console.log(newProduct)
    //await productsArray.push(newProduct)
    return productsArray
}





module.exports = Socket