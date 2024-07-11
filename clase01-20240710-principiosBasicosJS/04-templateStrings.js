let texto="prueba de texto"
console.log(texto)

texto='prueba de " texto'
console.log(texto)

texto=`prueba texto`    // template strings
console.log(texto)

console.log()

let nombreClase="Bases JS"
let temasClase="Temas de la clase "+nombreClase+":\n\n\t1)let y const\n\t2)funciones\n\t3)scopes"
console.log(temasClase)

console.log()

temasClase=`Temas clase ${nombreClase}:

    1)let const
    2)funciones
    3)scopes`

console.log(temasClase)

let titulo="Java Script bases"
let pagina=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titulo}</title>
</head>
<body>
    <h2>${titulo}</h2>
    <hr>
</body>
</html>
`

let nombre="Juan Manuel"
console.log(nombre.length)









 