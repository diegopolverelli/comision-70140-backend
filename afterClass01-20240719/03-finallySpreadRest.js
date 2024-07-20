// operador Spread: ...
let defensa={
    primerCentral:'Romero',
    lateralIzquierdo:'Montiel',
    lateralDerecho:'Tagliafico',
    segundoCentral:'Otamendi',
}
let propiedadesValidasDefensa=Object.keys(defensa)
console.log({propiedadesValidasDefensa})
// let modifica={
//     segundoCentral:"Martinez", 
//     primerCentral:"Rabina", 
//     cualquiera:"cualquiera"
// }
let modifica={
    segundoCentral:"Martinez", 
}

let propiedadesAModificar=Object.keys(modifica)
console.log({propiedadesAModificar})
if(propiedadesAModificar.every(pam=>propiedadesValidasDefensa.includes(pam))){
    defensa={
        ...defensa,
        ...modifica
    }
    console.log("Modificacion realizada...!!!")
}else{
    console.log("alguna propiedad es invalida. Verifique...!!!")
}


console.log({defensa})

let medio={
    nro5:'Paredes',
    nro8:'DePaul',
    nro7:'DiMaria',
    nro14:'Enzo'
}

let ataque={
    el10:'Lio',
    el9:'Julian',
}

const equipo={
    arquero:"Martinez",
    // primerCentral: defensa.primerCentral,
    // lateralDerecho: defensa.lateralDerecho
    ...defensa, 
    ...medio, 
    ...ataque,
    lateralIzquierdo: "Acuña"
}

console.log(equipo)

let persona={
    nombre:"Raul", 
    nombre:"Matias",
    nombre:"Carla"
}

console.log(persona)



let numeros=[1,2,3,4]
let numeros2=[5,6,7,8]
let todosLosNumeros=[...numeros, ...numeros2]
console.log(todosLosNumeros)


const suma=(a, b, c, d)=>{
    return a+b+c+d
}
console.log(suma(10,10,10,10))
console.log(suma(...numeros))




// operador Rest: ...
let suma2=(a, b, ...otros)=>{
    console.log({a, b, otros})
    // console.log("a:", a)
    return a+b
}
console.log(suma2(2,3))
console.log(suma2(2,3, 10, 10, false, {nombre:"Batman"}, "Juan"))

const sumaOK=(...sumandos)=>{
    return sumandos.reduce((a, v)=>a+v, 0)
}

console.log(sumaOK())
console.log(sumaOK(2,3))
console.log(sumaOK(2,3,10,100))
console.log(sumaOK(200))


console.log(sumaOK(...numeros))  // los ... son aquí el operador spread





// desestructuracion:
// desestructuracion de Objetos:
let posicion="el10"
// let arquero=equipo.arquero
// let lateralDerecho=equipo.lateralDerecho
// let lateralIzquierdo=equipo["lateralIzquierdo"]
// console.log(equipo[posicion])
// console.log(arquero, lateralDerecho)
let {arquero, lateralIzquierdo, el9, nro14, suplente} = equipo
console.log(arquero, lateralIzquierdo, el9, nro14, suplente)
let {arquero:arquero2, el9:delantero, el10}=equipo
console.log(arquero2, delantero, el10)


let body={nombre:"Juan", email:"juan@test.com", password:"123"}
// let nombre=body.nombre
// let email=body.email
// console.log(nombre, email)
let {email, nombre, password}=body
console.log(email, nombre, password)


const utilidades=()=>{
    let pi=3.14
    let numerosPrimos=[2,3,5,7,11,13,17,19,23]
    function suma(a,b){
        console.log(a+b)
    }
    return {
        pi,
        numerosPrimos,
        suma,
        abc:90000
    }
}

let {pi}=utilidades()
console.log(pi)



// desestructuracion de Arrays:
let heroes=["Superman", "Hulk", "Black-Widow", "Mujer Maravilla", "Batman"]
let [h1, h2, h3, h4, h5, h6, h7]=heroes
console.log(h1, h2, h3, h4, h5, h6, h7)
let [dc1,,, dc2, dc3]=heroes
console.log(dc1, dc2, dc3)
let [,marvel1, marvel2]=heroes
console.log(marvel1, marvel2)

const useContador=()=>{
    let contador={valor:0}
    const setContador=(valor)=>{
        contador.valor=valor
    }
    return [contador, setContador]
}

let [c1, setC1]=useContador()
console.log(c1)
setC1(10)
console.log(c1)


