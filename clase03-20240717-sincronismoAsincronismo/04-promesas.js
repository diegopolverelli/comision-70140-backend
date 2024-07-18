const suma = (a, b) => {
    return new Promise((res, rej) => { // resolve / reject
        if (typeof a != "number" || typeof b != "number") {
            rej("Error: solo se aceptan argumentos numéricos...!!!")
        }

        res(a + b)
    })
}

console.log(suma(5, 6))
let resultado = suma(5, 6) + 100
console.log(resultado)

suma(5, 6)
    .then(res => {
        console.log("resultado con res")
        console.log(res)
    })
    .catch(error => {
        console.log("resultado con rej")
        console.log(error)
    })
    .finally(() => {
        console.log("se ejecuta siempre...")
    })

suma(5, "6")
    .then(res => {
        console.log("resultado con res")
        console.log(res)
    })
    .catch(error => {
        console.log("resultado con rej")
        console.log(error)
    })
    .finally(() => {
        console.log("se ejecuta siempre...")
    })

fetch("https://reqres.in/api/users?page=2")
    .then(res => {
        res.json()
            .then(res => console.log(res))
            .catch(e=>console.log(e.message))
        })
    .catch(e=>console.log(e.message))

// throw new Error("fetch failed")

