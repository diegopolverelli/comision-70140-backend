function suma(a, b){
    // varias instrucciones

    // varias instrucciones
    console.log("resultado:",a+b)

}

suma(10, 8)
suma(15, 8)
suma(1, 8)

function saludo(){
    console.log("Hola...!!!")
    // return  "pp"
}

saludo()
saludo()
saludo()

// saludo="Hola...!!!"

saludo()

const resta=function(a, b){
    return a-b
}

console.log(resta(100,20))
// resta="cuando restamos...!!!"


const sumaFlecha=(a, b)=>{
    // codigo
    console.log("se va a ejecutar...")
    return a+b
}

let resultado=sumaFlecha(10,20)
console.log(resultado)

console.log(sumaFlecha(5,5))

const sumaFlecha2=(a, b)=>a+b

console.log(sumaFlecha2(3,2))


console.log(saludo())

const cuadrado=a=>a*a
console.log(cuadrado(9))


