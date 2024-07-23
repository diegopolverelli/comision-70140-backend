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

async function operacion2(){

}

const operacion3=async function (){

}

// 3x3 + 5x4
const operacion=async()=>{
    try {
        let res1=await multiplica(3,3)
        let res2=await multiplica(5,"4")
        let resFinal=await suma(res1, res2)
        console.log("Operacion", resFinal)
        // await fetch()
    } catch (error) {
        error.message?console.log(error.message):console.log(error)
    }
}

operacion()

const operacion4=async()=>{
    // console.log(lalala)
    try {
        let res1=await multiplica(3,3)
        let res2=await multiplica(5,4)
        let resFinal=await suma(res1, res2)
        return resFinal
        
    } catch (error) {
        error.message?console.log(error.message):console.log(error)
    }
}

operacion4()
    .then(res=>console.log("Llamada op4 c/ then", res))
    .catch(error=>error.message?console.log(error.message):console.log(error))


const app=async()=>{
    let dato=await operacion4()
    console.log("llamada op4 c/ async await",dato)
}

app()
