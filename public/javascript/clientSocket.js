const clientSocket = io()



const productsForm = document.getElementById("productsForm")
const titleInput = document.getElementById("title-input")
const priceInput = document.getElementById("price-input")
const table = document.getElementsByTagName("tbody")[0]


// clientSocket.on("init", (products) =>{
    
//     fetch("http://localhost:3001/views/form.pug")
//     .then((res) => res.text())
//     .then((res) =>{
        
//         console.log(res)
        
        
//     })

// })









productsForm.addEventListener("submit", (event) =>{
    
    event.preventDefault()
    
    const product = {title: titleInput.value, price: priceInput.value}
    console.log("PRODUCTO ANTes ", product)
    
    clientSocket.emit("newProduct", product)
    
    titleInput.value = " " , priceInput.value = " "
    titleInput.focus()
})


clientSocket.on("showNew", (data) =>{

    console.log("LA DATA ", data)

    let tr = document.createElement("tr")
    tr.innerHTML = `<td>${data.id}</td> <td>${data.title}</td> <td>${data.price}</td>`

    table.appendChild(tr)


})




