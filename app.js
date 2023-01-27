const express = require("express");
const app = express()
const http = require("http")

const PORT = process.env.NODE_PORT;
const ENV = process.env.NODE_ENV;


const userAgent = require("express-useragent")
const path = require("path")


app.set("views", path.join(__dirname, "public/views"))
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "pug")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(userAgent.express())


const products = require("./routers/api/Products")
const viewRoutes = require("./routers/views");
const  Socket  = require("./socket/socket");


app.use("/api", products)
app.use("/", viewRoutes)


const server = http.createServer(app)
Socket.init(server)

server.listen(PORT, () => {
    
    console.log("el servidor esta eschuchando el puerto " + server.address().port + ` ENV: ${ENV}`)
})


server.on("Error", () => {

    console.log("Error")
})

//Para manejar versiones de terceros con npm -->  ~(para parches) ^(para features) *(para todo, no recomendable)





