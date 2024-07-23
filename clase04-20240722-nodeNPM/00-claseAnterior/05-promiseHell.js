const suma = (a, b) => {
    return new Promise((res, rej) => { // resolve / reject
        if (typeof a != "number" || typeof b != "number") {
            rej("Error: solo se aceptan argumentos numéricos...!!!")
        }

        res(a + b)
    })
}


const multiplica = (a, b) => {
    return new Promise((res, rej) => { // resolve / reject
        if (typeof a != "number" || typeof b != "number") {
            rej("Error: solo se aceptan argumentos numéricos...!!!")
        }

        res(a * b)
    })
}

// 5x6
suma(5, 5)
    .then(res1=>{
        suma(res1, 5)
            .then(res2=>{
                suma(res2, 5)
                    .then(res3=>{
                        suma(res3, 5)
                            .then(res4=>{
                                console.log("Acá esta res1...!!!",res1)
                                suma(res4, 5)
                                    .then(resFinal=>console.log("Promise Hell:", resFinal))
                            })
                    })
            })
    })

suma(5, 5)
    .then(res1=>{
        return suma(res1, 5)
    })
    .then(res2=>suma(res2, 5))
    .then(res3=>suma(res3, 5))
    .then(res4=>suma(res4, 5))
    .then(resFinal=>console.log("Encadenamiento de promesas:",resFinal))
    .catch(error=>error.message?console.log(error.message):console.log(error))
    // .catch(error=>{
    //     if(error.message){
    //         console.log(error.message)
    //     }else{
    //         console.log(error)
    //     }
    // })

suma(3,3)
    .then(()=>{
        return "Juan"
    })
    .then(nombre=>{
        // console.log(fafafa)
        let persona={
            // nombre:nombre, 
            nombre, 
            edad:28
        }
        return persona
    })
    .then(objetoPersona=>{
        console.log("Imprime persona:", objetoPersona)
    })
    .catch(error=>error.message?console.log(error.message):console.log(error))

// 3x3 + 5x4
let aux=0
multiplica(3,3)
    .then(res1=>{
        aux=res1
        return multiplica(5, 4)
    })
    .then(res2=>{
        // return suma(res1, res2)
        return suma(aux, res2)
    })
    .then(resFinal=>console.log("Operacion:", resFinal))
    .catch(error=>error.message?console.log(error.message):console.log(error))

// const suma2=(a, b)=>a+b

// try {
//     suma2(4,60)
    
// } catch (error) {
    
// }


// suma(4,4).