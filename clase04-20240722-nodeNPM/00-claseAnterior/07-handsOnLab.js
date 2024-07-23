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

const resta = (a, b) => {
    return new Promise((res, rej) => { // resolve / reject
        if (typeof a != "number" || typeof b != "number") {
            rej("Error: solo se aceptan argumentos numéricos...!!!")
        }

        res(a - b)
    })
}


const divide = (a, b) => {
    return new Promise((res, rej) => { // resolve / reject
        if (typeof a != "number" || typeof b != "number") {
            rej("Error: solo se aceptan argumentos numéricos...!!!")
        }

        if(b===0){
            rej("Error: el segundo argumento (divisor) no puede ser igual a 0")
        }

        res(a / b)
    })
}

async function calculadora(a, b){
    try {
        console.log(`Operando con ${a} y ${b}:`)
        console.log("suma:", await suma(a, b))
        console.log("resta:", await resta(a, b))
        console.log("multiplicacion:", await multiplica(a, b))
        console.log("division:", await divide(a, b))
    } catch (error) {
        error.message?console.log(error.message):console.log(error)
    }
}


const app=async()=>{
    await calculadora(10,8)
    await calculadora(5,7)
    await calculadora("juan",8)
    await calculadora(6,0)
}

app()



