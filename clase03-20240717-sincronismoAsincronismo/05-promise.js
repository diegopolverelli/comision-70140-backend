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
                                suma(res4, 5)
                                    .then(resFinal=>console.log("Callback promises:", resFinal))
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
