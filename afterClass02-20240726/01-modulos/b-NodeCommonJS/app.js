const Persona=require("./Persona.js")
const {Heroe, f1, f2:resta, saludos, usuarios } = require("./varios.js")
const Hero = require("./varios.js").Heroe
const {usuarios:users} = require("./varios.js")

const fs=require("fs")
const {writeFileSync} = require("fs")
const {writeFileSync:grabarArchivoSincrono} =require("fs")
const path=require("path")


// fs.writeFileSync("./archivos/prueba.txt", "hola...!!! 1")
// writeFileSync("./archivos/prueba2.txt", "hola...!!! 2")
// grabarArchivoSincrono("./archivos/prueba3.txt", "hola...!!! 3")
// let ruta=__dirname+"/archivos/pruebaRutaAbsoluta.txt"
let ruta=path.join(__dirname, "archivos", "pruebaConPath.txt")
console.log(ruta)
grabarArchivoSincrono(ruta, "prueba ruta abs...!!!")

const persona01=new Persona("Maria", "Lopez")
console.log(persona01.nombreCompleto())

// const Persona=require("./Persona.js").Persona
// const {Persona} = require("./Persona.js")

console.log(usuarios)
console.log(resta(10, 4))
console.log(f1(10,10))
const heroe01=new Heroe("Robin", "Dick Grayson")
console.log(heroe01.verIdentidad())
const heroe02=new Hero("Batman", "Bruce Wayne")
console.log(heroe02)

console.log(__dirname)