const {config} = require("./config.js")
const knex = require("knex")(config)

async function DBscript(){

    try{
        await knex.schema.createTable("products", (table) =>{
            table.increments("id").primary()
            table.string("title", 45).notNullable()
            table.integer("price").notNullable()
            table.string("description", 100).notNullable()
    
            console.log("Table created")
        })
    }catch(error){
        console.log(error)
    }finally{
        knex.destroy()
    }
}

module.exports = {DBscript}
