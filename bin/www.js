//archivo para testing de la app

const Socket = require("./socket")
const http = require("http")
const app = require("./app")

const server = http.createServer(app)

Socket.init(server)

server.listen(3001, () =>{

    console.log("Sv on " + server.address().port)

})