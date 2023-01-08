const {Server} = require("socket.io")
const Container = require ("../db/index.js")
const products = new Container("./products.txt");

let io


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

    let newProduct = await products.save(data) 
    let productsArray = await products.getAll(products)
    
    await productsArray.push(newProduct)
    return productsArray
}





module.exports = Socket