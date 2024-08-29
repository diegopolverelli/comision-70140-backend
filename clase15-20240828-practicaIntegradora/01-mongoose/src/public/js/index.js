let ulUsuarios=document.querySelector("ul")

const socket=io()

socket.on("nuevoUsuario", nuevoUsuario=>{
    let liNuevoUsuario=document.createElement("li")
    liNuevoUsuario.innerHTML=`${nuevoUsuario.nombre} - email: <strong>${nuevoUsuario.email}</strong></li>`
    ulUsuarios.append(liNuevoUsuario)
})
