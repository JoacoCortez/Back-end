const {Server} = require("socket.io")

let io


class Socket{

    static init(httpServer){
        io = new Server(httpServer)

        
        io.on("connection", (clientSocket) =>{
            
            console.log("new client connected ID " + clientSocket.id)
            
            clientSocket.on("disconnect", () =>{

                console.log("User disconected")
            })


        })



    }

    

}

module.exports = Socket