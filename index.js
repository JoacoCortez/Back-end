const fs = require("fs")


class Container{
    constructor(file){
        this.file = file;
    }


    async leerArchivo(file){
    
        try{
            const data = await fs.readFileSync(file, "utf-8")
            return JSON.parse(data)
        } catch(error) {
            throw new Error(error)
        }
    }
    
    
    async escribirArchivo(root, content){
        
        try{
            
            await fs.writeFileSync(root, JSON.stringify(content, null, 2), "utf-8")
    
            
            
        } catch(error){
            console.log("fallo la escritura")
            throw new Error(error)
        }
    }
    
    verifyExistense(file){
        
        try{
            if(!fs.existsSync(file)){
                console.log("el archivo no existe")
    
            } else{
                return true
            }
        } catch(error){
    
            throw new Error(error)
        }
    }
    
    
    
    
    
    async save(product){
    
        try{
            if( await !this.verifyExistense(this.file)){
                
                const productsArray = [];

                product["id"] = 1
                
                productsArray.push(product)
                
                await this.escribirArchivo(this.file, productsArray)

                
                console.log(`se le asignó el ID ${product["id"]} a ${product.title}`)
                return product.id
    
            }else{
                const data = await this.leerArchivo(this.file)
                
                if(await data.length != 0){
                    
                    let lastId = data.length;
                    product["id"] = lastId + 1;

                    await data.push(product)

                    this.escribirArchivo(this.file, data)
                    console.log(`se agregó un nuevo producto ${product.title} con id ${product["id"]}`)
        
                    return product["id"];
                
                } else {
                    
                    product["id"] = 1
                }
            }
            
            
    
        } catch(error){
            console.log("pasa por aca")
            throw new Error(error)
        }
    }


    async getById(id){

    try{
        const data = await this.leerArchivo(this.file)

        const dataId = data.filter(item => item.id === id)

        console.log(`se obtuvo el producto con el id ${id}`)
        
       
        return dataId;

    } catch(error){
        throw new Error(error)

       }
        
    }


    async getAll(){

        try{
            const data = await this.leerArchivo(this.file)

            console.log(data)
            return data
            

        } catch(error){

            throw new Error(error)
        }



    }


    async deleteById(id){

        try{

            const data = await this.leerArchivo(this.file)

            const dataId = data.filter(item => item.id === id)

            dataId.filter(item => item.id !== id)

            await this.escribirArchivo(this.file, dataId)

            console.log(`se eliminó el producto con id ${id}`)

        } catch(error){

            throw new Error(error)
        }
    }


    async deleteAll(producs){

        let data = await this.leerArchivo(this.file)

        data = []

        await this.escribirArchivo(this.file, data)

        console.log("se eliminó todo")
    }

}

module.exports = Container;

// const files = [
//     {
//         title: "dsadsa",
//         price: 180,
//         thumbnail: "dsadas"
//     },{
//         title: "dsadsa",
//         price: 180,
//         thumbnail: "dsadas"
//     },{
//         title: "dsadsa",
//         price: 180,
//         thumbnail: "dsadas"
//     },{
//         title: "dsadsa",
//         price: 180,
//         thumbnail: "dsadas"
//     }   
// ]

































































