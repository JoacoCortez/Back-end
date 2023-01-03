// const HTTP = require("http");
// const PORT = 8080;

// const server = HTTP.createServer((req, res) =>{

//     greetings()
//     res.end("Fokiu")
// })

// const connectedServer = server.listen(PORT, ()=>{

//     console.log(`El sv escucha el puerto ${connectedServer.address().port}`)

// })

// const actuallHour = 00;


// const greetings = () =>{

//     if(actuallHour >= 6 &&  actuallHour <= 12){

//         console.log("gudmornin")
//     }else if(actuallHour >= 12 && actuallHour <= 18){

//         console.log("gudafternun")
//     }else{

//         console.log("gudnai")
//     }

// }




const express = require("express")
const app = express()
const path = require("path")
const useragent = require("express-useragent") //se tiene que declarar Y tiene que estar escrito en minuscula


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "media_test")))
app.use(useragent.express())

const pets = require("./Practica_routers")
const people = require("./Practica_routers")
const upload = require("./Practica_routers")
app.use("/api", upload, people) 


const PORT = 8080

const server = app.listen(PORT,() =>{

    console.log("dios todo lo ve y todo lo escucha " + server.address().port)
    
})

//-------------------------------------------------------------------------------------------------

app.get("/", (req, res) =>{

    const userInfo = req.useragent.browser + req.useragent.version
    
    const hi = `<h1 style="color: blue">Homero chino</h1>
                <h2> ${userInfo} </h2>`
    
    
    res.send(hi)
})

app.set("quantity", 0)
app.get("/visitas", (req, res) =>{

    let quantity = app.get("quantity")
    
    quantity ++

    

    console.log("la cantidad de visitas es "+ quantity)
    res.send(quantity.toString())
    app.set("quantity", quantity)
})

app.get("/hora", (req, res) =>{

    const fyh = "10/04/2003"

    res.send({"fehca y hora ": fyh})
})

//-------------------------------------------------------------------------------------------------

const frase = "Hello world";

app.get("/api/frase", (req, res) =>{

    const container = `<input type="text"> ${frase}</input>`;

    res.send(container)

})

app.get("/api/letras/:pos", (req, res) =>{

    let letter = req.params.pos

    
   
    
    console.log(letter)
    res.send(frase[letter])
})


app.get("/api/palabras/:pos", (req, res) => {

    let word = req.params.pos

    const divided = frase.split(" ")

    res.send(divided[word])

})

//-------------------------------------------------------------------------------------------------


function step1 (req, res, next){

    let data = req.useragent.browser
    console.log(data)
    next()
}

function step2 (req, res, next){

    console.log(data)
}