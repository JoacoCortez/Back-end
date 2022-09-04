
const fs = require('fs')


const escribirArchivo = async (root, content) => {
    try {
        await fs.promises.writeFile(root, content, 'utf-8')
    } catch (error) {
        console.log("algo salió mal")
        throw new Error(error)
    }
}

const leerArchivo = async (root) => {
    try {
        const data = await fs.promises.readFile(root, 'utf-8')
        return data
    } catch (error) {
        console.log("algo salió mal");
        throw new Error(error)
    }
}

(async function () {

    try {

        const objets = [
            {
                title: "Coca-Cola",
                price: "200",
                thumbnail: "dsa ",
            },
            {
                title: "Doritos",
                price: "240",
                thumbnail: "dsa ",
            },
            {
                title: "Cerveza Quilmes",
                price: "200",
                thumbnail: " dsa",
            }
        ]

        await escribirArchivo("objets.txt", JSON.stringify(objets, null, 2))
        const stringContent = await leerArchivo("objets.txt")
        
        const jsonContent = JSON.parse(stringContent)


        
        
        await escribirArchivo("objets.txt", JSON.stringify(jsonContent, null, 2))
        

        function save (){
            
            jsonContent.forEach( () => {

                let id = 1
                
                if(id.value < jsonContent.lenght){
                    
                    jsonContent.push(id+1)
                }else{
                    console.log("hola")
                }
                
            });

        }

        save()
        console.log(jsonContent)
        console.log(objets)
        
        
        
    } catch (error) {

        throw new Error(error)
    }

})()


