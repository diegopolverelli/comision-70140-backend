import Persona from "./Persona.js"
import cualquierCosa from "./Persona.js"
import {usuarios, f1 as suma, Heroe} from "./varios.js"
import * as varios from "./varios.js"
import Villano, {Heroe as Hero, usuarios as users} from "./varios.js"

import __dirname from "./utils.js"

import fs from "fs"
import {writeFileSync} from "fs"
import {writeFileSync as grabaArchivoSincronicamente} from "fs"

import {join} from "path"

// fs.writeFileSync("./archivos/prueba1.txt", "hola1")
// writeFileSync("./archivos/prueba2.txt", "hola2")
// grabaArchivoSincronicamente("./archivos/prueba3.txt", "hola2")




let persona01=new Persona("Mariana", "Arias")
console.log(persona01.nombreCompleto())

let persona02=new cualquierCosa("Matias", "Rivas")
console.log(persona02.nombreCompleto())

console.log(usuarios)
console.log(suma(5,4))

const heroe01=new Heroe("Superman", "Clark Kent")
console.log(heroe01)

console.log(varios.resta(100,5))

const villano01=new Villano("Thanos", "-")
console.log(villano01)

console.log("Dirname:", __dirname)
console.log(import.meta.dirname)
console.log(import.meta.filename)
console.log(import.meta.url)

let ruta=join(import.meta.dirname, "archivos", "pruebaRutaAbs.txt")
fs.writeFileSync(ruta, "prueba ruta abs...!!!")