const {Server} = require("socket.io")

let io // io = socket del servidor    socket = socket del cliente
let messages = []


class Socket {
    static init(httpServer){
        console.log("Sv config")
        io = new Server(httpServer)

        
        io.on("connection", (clientSocket) =>{

            clientSocket.emit("init", messages)


            clientSocket.on("new-message", (data) =>{

                io.emit("notification", {id: clientSocket.id, message: data})

                messages.push(data)

            })

           
            
           
           console.log("new client connected ID " + clientSocket.id)
            
            


            clientSocket.on("disconnect", () =>{

                console.log("User disconected")
            })

        })
         
    }


}

module.exports = Socket






















