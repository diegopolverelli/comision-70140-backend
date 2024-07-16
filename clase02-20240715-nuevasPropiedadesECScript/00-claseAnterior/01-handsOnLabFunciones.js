
const mostrarLista=(lista=[])=>{
    // Number()
    // String()
    // BigInt()
    if(!Array.isArray(lista)){
        console.log(`El argumento ingresado no es de tipo array`)
        return
    }

    if(lista.length==0){
        console.log(`La lista no contiene elementos`)
        return 
    }

    // let dato="Juan"
    // dato.

    lista.forEach(elemento=>{
        console.log(elemento)
    })

    console.log(`La longitud de la lista es de ${lista.length}`)
}

mostrarLista([])
mostrarLista([1,2,3,4])
mostrarLista([1,"a",false,{name:"Juan"}])
mostrarLista("pepe")
