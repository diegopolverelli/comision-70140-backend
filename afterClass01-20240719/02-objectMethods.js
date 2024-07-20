let alumno01={
    nombre:'Jimena',
    apellido:'Martinez',
    fechaNacimiento:new Date(1990,2,4),
    email: 'jmartinez@test.com',
    domicilio:'Las Bases 1974, Haedo'
}

console.log(890)
console.log(String(890))
console.log(String(true))
console.log(String([10, 20]))
console.log(String([10]))
console.log(String({nombre:"Juan"}))
console.log(Number("1"))
console.log(Number("Juan"))
console.log(Number(true))
console.log(Number(false))

console.log(Object.keys(alumno01))
console.log(Object.values(alumno01))
console.log(Object.entries(alumno01))




let factura={
    numero:107998,
    codigoCliente:'A005',
    fecha: new Date(2023,0,10),
    idTributario:'30333333331',
    subtotal:10000,
    impuestos:{
        tasasGenerales:1.2,
        iibb:2.4,
        iva:21,
        otros:0.5
    }
}

let impuestos=Object.values(factura.impuestos)
console.log(impuestos)

let total=factura.subtotal
impuestos.forEach(tasa=>{
    total+=factura.subtotal*tasa/100
})
console.log(total)

total=impuestos.reduce((acum,tasa)=>acum+factura.subtotal*tasa/100, factura.subtotal)
console.log(total)


