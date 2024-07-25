const moment=require("moment")
// const crypto=require("crypto")
// crypto.createHmac
console.log("hola...!!!")

let fecha=moment()
console.log(fecha)
console.log(fecha.add(12, "day"))

let fechaNac=moment("1978-03-23")
if(!fechaNac.isValid()){
    console.log(`Fecha invalida`)
}

console.log(`Ustede ha nacido hace ${moment().diff(fechaNac, "year")} años`)
console.log(`Ustede ha nacido hace ${moment().diff(fechaNac, "days")} dias`)
console.log(`Ustede ha nacido hace ${moment().diff(fechaNac, "seconds")} segundos`)