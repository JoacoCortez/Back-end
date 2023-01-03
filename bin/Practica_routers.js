const { json, application } = require("express")
const express = require("express")
const {Router} = express
const multer = require("multer")

const router = Router()

// MIDDLEWARES
// function step1(req, res, next){

//     console.log("midelwer 1")

//     next()

// }

// function step2( req, res, next){

//     console.log("midelwer 2")

//     next()
// }


const storage = multer.diskStorage({

    destination: function(req, file, cb){

        cb(null, "uploads_test")
    },
    filename: function(req, file, cb){

        cb(null, file.originalname)


    }
})

const upload = multer({storage})

const calculateId = (arr) =>{

    return arr.length

}

const pets = [{

    name: "cat",
    years: 2

},{
    name: "dog",
    years: 4

},{
    name:"fish",
    years: 1
}

]
const people = ["Martin", "Samuel", "Carlos"];


router.get("/pets", (req, res) =>{

    const data = pets.map(i => i.name)
    
    
    console.log(data.join(", "))
    
    res.send(data)

})

router.post("/upload-file", upload.single("single-file"), (req, res) =>{

    const file = req
    
    res.send(file)
    
    // const data = req

    // console.log(data)
    // res.send(data)


})


router.get("/people", (req, res) =>{

    console.log(people)
    res.send(people)


})

router.post("/people", /*step1, step2, (ASI SE APLICAN LOS MIDDLEWARES)*/  (req, res) =>{

    let data = req.body
    console.log(data)

    console.log(calculateId(people))
    let lastId = calculateId(people)
    
    console.log(people.push({id:lastId, ...data}))
    people.push({id:lastId, ...data})
    
    console.log(people)
    res.json(data)

})




module.exports = router