(function (){

    const clientSocket = io()
    let messages = []
    
    const submitForm = document.getElementById("form-chat")
    const inputMessage = document.getElementById("input-message")
    const output = document.getElementById("output")
    
    
    
    clientSocket.on("init", (data) =>{

        messages = data

        messages.forEach( singleMessage => {
            
            const li = document.createElement("li")            
            
                li.innerText = singleMessage
            
            output.appendChild(li)

        });
        
        
        
    })
    
    
            
    submitForm.addEventListener("submit", (event) =>{
        event.preventDefault()

        clientSocket.emit("new-message", inputMessage.value)

        //output.innerHTML = `<li>${inputMessage.value}</li>`
        
        

        // messages.push(inputMessage.value)

    })


    clientSocket.on("notification", (data) =>{

        console.log(data)

        const li = document.createElement("li")
        
        li.innerText = data.message 

        output.appendChild(li)

    })


    
    clientSocket.on("connect", () =>{
        console.log("Connected")
        
        

    })


})()