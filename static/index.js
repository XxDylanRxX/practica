document.addEventListener("DOMContentLoaded",() =>{
    const socket = io();
 
    socket.on("message", (mensaje) =>{
        document.querySelector("#root").append(mensaje);
        document.querySelector("#root").innerHTML += "</br>"
    });

    const send_message = document.querySelector("#send-message");
    console.log(send_message)

    send_message.onclick  = () =>{
        const message = document.querySelector("#input-message").value;
        console.log(message)

        socket.emit("message",{
            message
        })
       mensaje = document.querySelector("#input-message");
        mensaje.value= ""
      
    } 
    
} )
