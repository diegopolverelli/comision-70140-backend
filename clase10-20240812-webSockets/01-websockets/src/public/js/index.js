console.log("cargo script...!!!")
const nombre=prompt("Ingrese su nombre")
if(nombre){
    document.title=nombre
}
const socket=io()
const divTemperatura=document.getElementById("temperatura")

socket.on("nuevaLecturaTemperatura",datos=>{
    // console.log(`La temperatura actual es de °${datos}`)
    divTemperatura.textContent=`La temperatura actual es de °${datos}`
})

socket.on("nuevoHeroe", heroe=>{
    console.log(`Se ha creado el heroe ${heroe.name}`, heroe)
})

socket.on("nuevoHeroe2", (name, dato)=>{
    console.log(`Se ha creado el heroe ${name}`, dato)
})

socket.on("saludo", saludo=>{
    console.log(saludo)
    if(nombre){
        socket.emit("id", nombre)
    }
})

socket.on("nuevoUsuario", nombre=>{
    console.log(`${nombre} se ha unido al server...!!!`)
})


