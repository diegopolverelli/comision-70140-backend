// const contador=0

// // codigo
// // codigo
// // codigo
// // codigo
// contador++

// // codigo

// // codigo
// // codigo
// // codigo
// contador++

// // codigo
// contador="es el que cuenta cuentos"
// // codigo
// // codigo
// console.log(contador)

// let saludo=()=>{
//     console.log("hola")
// }

// saludo()

let nombre="Juan";

(()=>{
    console.log("hola")
})()

const contador=(()=>{
    let contador=0

    const incrementar=()=>{
        contador++
    }

    const decrementar=()=>{
        contador--
    }

    const getContador=()=>{
        return contador
    }

    return {incrementar, decrementar, getContador}

})()

contador.incrementar()
contador.incrementar()
contador.incrementar()
contador.incrementar()
contador.incrementar()
contador.incrementar()
console.log(contador.getContador())