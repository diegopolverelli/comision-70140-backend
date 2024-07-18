const fs=require("fs") // import
// const cubo=a=>a**3
// console.log(cubo(3))
// const cuadrado=a=>a**2
// console.log(cuadrado(9))

// const op4=()=>{
//     console.log("iniciando op4")
//     let fechaFin=Date.now()+2000
//     while(Date.now()<fechaFin){
//         // espero...
//     }
//     console.log("op4")
// }

// const op5=()=>{
//     console.log("iniciando op5")
//     let fechaFin=Date.now()+1000
//     while(Date.now()<fechaFin){
//         // espero...
//     }
//     console.log("op5")
// }

// console.log("Inicio")
// console.log("op1")

// console.log("op2")


// console.log("op3")
// op4()
// op5()
// console.log("op6")

// console.log("Fin")

fs.writeFile("./archivo1.txt", "datos 1", error=>{
    console.log("archivo1 guardado...!!!")
})

function cb(error){
    console.log("archivo1 guardado...!!!")
}

fs.writeFile("./archivo2.txt", "datos 2", cb)


setTimeout(() => {
    console.log("op a 0 sec")
}, 0);

setTimeout(() => {
    console.log("op 1 a 2 sec")
}, 2000);

setTimeout(() => {
    console.log("op 2 a 2 sec")
}, 2000);

setTimeout(() => {
    console.log("op 2 a 2 sec")
}, 2000);

console.log("Inicio")
console.log("op1")

console.log("op2")


console.log("op3")


console.log("Fin")

// fetch()
