let numeros=[1,2,3,4]
let dobles=numeros.map(elementoDelArray=>elementoDelArray*2)
console.log(numeros)
console.log(dobles)
console.table({numeros, dobles})

// let boton1=document.getElementById("bnt1")
// boton1.addEventListener("click", e=>{
//     e.preventDefault()

//     // etc...
// })

const miMap=(varArray=[], fnCallback)=>{
    if(!Array.isArray(varArray)){
        console.log(`Error, argumento invalido`)
        return 
    }

    let resultado=[]

    for(let i=0; i<varArray.length; i++){
        resultado.push(fnCallback(varArray[i]))
    }

    return resultado
}

dobles=miMap(numeros, elementoDelArray=>elementoDelArray*2)
console.log(dobles)

const operar=(op1, op2, callback)=>{
    // algo... 
    return callback(op1, op2)
}

console.log(operar(5, 4, (a, b)=>a+b))
console.log(operar(5, 4, (a, b)=>a*b))

// 1 arg del callback error
const operar2=(op1, op2, callback)=>{ // (error, a, b, cb)=>{}
    // let nombre="Juan"
    try {
        if(typeof op1!="number" || typeof op2!="number"){
            throw new Error("Solo se aceptan argumentos numericos")
        }
        return callback(null, op1, op2)  // error=>{}
        
    } catch (error) {
        // return error.message
        return callback(error)
    }
    // algo... 
}

console.log(operar2(5, "Juan", (error, a, b)=>{
    if(error){
        console.log(`Envio mail avisando del error: ${error.message}` )
        return error.message
    }
    return a+b
}))
console.log(operar2("5", 4, (error, a, b)=>{
    if(error){
        console.log(`Graba error en log de errores` )
        return "error...!!!"
    }
    return a+b
}))
console.log(operar2(5, 4, (error, a, b)=>{
    if(error){
        console.log(`Envio mail avisando del error: ${error.message}` )
        return error.message
    }
    return a+b
}))








