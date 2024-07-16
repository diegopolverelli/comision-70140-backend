class Persona{
    // nombre=""
    // email=""
    #password=""
    id=100
    static cantidadPersonasDefinidas=0
    static #codigo="9999"
    

    constructor(nombre, email, clave){
        this.#password=clave
        this.nombre=nombre
        this.email=email
        Persona.cantidadPersonasDefinidas++
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre}`)
    }

    getEmail(){
        return this.email
    }

    getPassword(){
        return this.#password
    }

    static verCodigo(){
        return this.#codigo
    }

}

let persona01=new Persona("Rafael", "rafa@test.com", "123")
let persona02=new Persona("Mariela", "mariela@test.com", "123")
let persona03=new Persona("Oscar", "oscar@test.com", "123")
let persona04=new Persona("Oscar", 100, "123")


console.log(persona02)
persona02.saludar()
console.log(persona01.getEmail())

console.log(Persona.cantidadPersonasDefinidas)
// Persona.codigo
console.log(Persona.verCodigo())

console.log(persona04.getPassword())
