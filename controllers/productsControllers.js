const Container = require ("../db/index.js")
const products = new Container("./products.txt");

const controller = {}


controller.getAll = async (req, res) =>{

    const items =  await products.getAll(products)
    
    res.status(200).json(items)
}


controller.getById = async (req, res) => {

    let id = parseInt(req.params.id)
    
    const product = await products.getById(id)
    
    res.status(200).json(product)
}


controller.post = async (req, res) => {

    //let data = req.body
    console.log("holaaaaaaaaaaaaaaaaaaa")
    const data = {title,price,thumbnail} = req.body
    
    const product = await products.save(data)
    
    console.log(product)
    res.status(201).json(data) 
}


controller.postForm = async (req, res) =>{

    console.log("------------------------------------------------")
    const data = {title,price,thumbnail} = req.body
    
    
    const product = await products.save(data)
    
    const items = await products.getAll(products)
    
    console.log(product)
    res.render("products", {items})
}


controller.modify = async (req, res) => {

    let id = parseInt(req.params.id)
    let data = {title,price,thumbnail} = req.body
    
    const modified = await products.modify(id, data)

    console.log(`Se modificó el producto ${data.title} con id ${id}`)
    res.status(200).send(modified)
}


controller.deleteById = async (req, res) => {

    let id = parseInt(req.params.id)

    products.deleteById(id)

    res.status(200).end()
}

module.exports = controller


















































































// const fs = require("fs")
// const ProductsDb = require("../db/index")
// const products = new ProductsDb("../products.txt")

 

// const controller = {}


// //General functions
// async function leerArchivo(file){
    
//     try{
        
//         const data = await fs.readFileSync(file, "utf-8")
//         return JSON.parse(data)
    
//     } catch(error) {
//         throw new Error(error)
//     }
// }


// async function escribirArchivo(root, content){
    
//     try{
//         await fs.writeFileSync(root, JSON.stringify(content, null, 2), "utf-8")
    
//     } catch(error){
//         console.log("fallo la escritura")
//         throw new Error(error)
//     }
// }


// async function verifyExistense(file){
        
//     try{
//         if(!fs.existsSync(file)){
//             console.log("el archivo no existe")

//         } else{
//             return true
//         }
//     } catch(error){
//         console.log("no se verifico la existencia del archivo")
//         throw new Error(error)
//     }
// }

// //API functions

// controller.save = async (product) =>{
    
//     try{
           
//         if( await !verifyExistense(this.file)){
            
//             const productsArray = [];
//             product["id"] = 1
            
//             productsArray.push(product)
            
//             await escribirArchivo(this.file, productsArray)
//             console.log(`se le asignó el ID ${product["id"]} a ${product.title}`)
            
//             return product.id
        
//         }else{
            
//             const data = await leerArchivo(this.file)
            
//             if(await data.length !== -1){
                
//                 let lastId = data.length;
//                 product["id"] = lastId + 1;

//                 await data.push(product)

//                 escribirArchivo(this.file, data)
//                 console.log(`se agregó un nuevo producto ${product.title} con id ${product["id"]}`)
    
//                 return product["id", data];
            
//             } else {
                
//                 product["id"] = 1
//             }
//         }
//     } catch(error){
//         console.log("pasa por aca")
//         throw new Error(error)
//     }
// }


// controller.modify = async (id, content) =>{

//     try{
//         let data = await leerArchivo(this.file)
        
//         let dataId = data.filter(item => item.id === id)
        
//         //Didn´t work ==> this.deleteById(dataId)
//         data = data.filter(item => item.id !== id);
        
//         dataId = {id: id, ...content}
//         data.push(dataId)
        
//         escribirArchivo(this.file, data)

//     } catch(error){
//         console.log("fallo la modificacion")
//         throw new Error
//     }
// }


// controller.getById = async (id) =>{

//     try{
//         const data = await leerArchivo(this.file)

//         const dataId = data.filter(item => item.id === id)

//         console.log(`se obtuvo el producto con el id ${id}`)
        
//         return dataId;

//     } catch(error){
//         throw new Error(error)
//     }
// }


// controller.getAll = async () =>{

//     try{
//         const data = await leerArchivo(this.file)
    
//         //console.log(data)
//         return data
        
//     } catch(error){
//         throw new Error(error)
//     }
// }


// controller.deleteById = async (id) =>{

//     try{

//         const data = await leerArchivo(this.file)

//         const dataId = data.filter(item => item.id === id)
        
//         dataId.filter(item => item.id !== id)
        
//         await escribirArchivo(this.file, dataId)

//         console.log(`se eliminó el producto con id ${id}`)

//     } catch(error){
//         throw new Error(error)
//     }
// }


// controller.deleteAll = async () =>{

//     try{
        
//         let data = await leerArchivo(this.file)

//         data = []

//         await escribirArchivo(this.file, data)

//         console.log("se eliminó todo")

//     } catch(error){
//         console.log("No se eliminaron los productos")
//     }
// }



// module.exports = controller