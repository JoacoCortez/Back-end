const knex = require("knex")


class Container{
    constructor(config, tableName){
        this.knex = knex(config),
        this.tableName = tableName
    }

    save(data){
        return this.knex(this.tableName).insert(data)
    }


    getAll(){
        
        console.log("Pasa por index db")
        return this.knex(this.tableName).select("*")
    }


    getById(id){
        return this.knex(this.tableName).select("*").where("id", id)
    }


    deleteById(id){
        return this.knex(this.tableName).del().where("id", id)
    }

}

module.exports = Container



























































