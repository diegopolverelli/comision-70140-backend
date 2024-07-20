// operador ** (potencia):
console.log(Math.pow(9, 2))
console.log(Math.pow(3, 3))
console.log(9**2)
console.log(3**3)

let numeros=[1,2,3,4,5]
console.log(numeros.includes(4))
console.log(numeros.includes(72))

// map
console.log(numeros)
let dobles=numeros.map(n=>n*2)
console.log(dobles)

dobles=numeros.map(function por2(e){
    return 2*e
})
console.log(dobles)

const duplica=e=>{
    return 2*e
}
dobles=numeros.map(duplica)
console.log(dobles)

dobles=numeros.map((n, indice, arrayOriginal)=>{
    console.log(`Recorriendo elemento ${indice}, con valor ${n}. Array original: ${arrayOriginal}`)
    return n*2
})
console.log(dobles)


// every
console.log(numeros.every(n=>n>=0))
console.log(numeros.every(n=>n>3))
console.log(numeros.every((n, indice, arrayOriginal)=>{
    console.log(`Every. Recorriendo elemento ${indice}, con valor ${n}. Array original: ${arrayOriginal}`)
    return n>3
}))
console.log(numeros.every((n, indice, arrayOriginal)=>{
    console.log(`Every. Recorriendo elemento ${indice}, con valor ${n}. Array original: ${arrayOriginal}`)
    return n<4
}))

// some
console.log(numeros.some(n=>n>3))
console.log(numeros.some(n=>n>30))

// filter
console.log(numeros.filter(n=>n>2 && n<5))
console.log(numeros.filter((n, indice, arrayOriginal)=>{
    console.log(`Filter: Recorriendo elemento ${indice}, con valor ${n}. Array original: ${arrayOriginal}`)
    return n>2 && n<5
}))

// find / findIndex
let nombres1=['Martina', 'Mariela', 'Sandra', 'Ana', 'Jimena', 'Marcelo', 'Julian', 'Ernesto']
// console.log(nombres1.includes("Ana"))
// console.log(nombres1.includes("Diego"))
console.log(nombres1.find(nombre=>nombre==="Ana"))  // 1=="1" true   1==="1" false 
console.log(nombres1.find(nombre=>nombre==="Diego"))
console.log(nombres1.findIndex(nombre=>nombre==="Ana"))  
console.log(nombres1.findIndex(nombre=>nombre==="Diego"))

let heroes=[
    {
        id:1,
        name:'Spider-Man',
        alias:'Peter Parker',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:2,
        name:'Superman',
        alias:'Clark Kent',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:3,
        name:'Iron Man',
        alias:'Tony Stark',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:4,
        name:'Wonder Woman',
        alias:'Diana Prince',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:5,
        name:'Black Widow',
        alias:'Natasha Romanoff',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:6,
        name:'Batman',
        alias:'Bruce Wayne',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:7,
        name:'Aquaman',
        alias:'Arthur Curry',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:8,
        name:'Captain America',
        alias:'Steve Rogers',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:9,
        name:'Flash',
        alias:'Barry Allen',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:10,
        name:'Black Panther',
        alias:'TChalla',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:11,
        name:'Green Lantern',
        alias:'Hal Jordan',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:12,
        name:'Thor',
        alias:'Thor Odinson',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:13,
        name:'Batwoman',
        alias:'Kate Kane',
        team:'Bat Family',
        publisher:'DC',
    },
    {
        id:14,
        name:'Hulk',
        alias:'Bruce Banner',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:15,
        name:'Zatanna',
        alias:'Zatanna Zatara',
        team:'Justice League Dark',
        publisher:'DC',
    },
    {
        id:16,
        name:'Doctor Strange',
        alias:'Stephen Strange',
        team:'Defenders',
        publisher:'Marvel',
    },
    {
        id:17,
        name:'Green Arrow',
        alias:'Oliver Queen',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:18,
        name:'Scarlet Witch',
        alias:'Wanda Maximoff',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:19,
        name:'Martian Manhunter',
        alias:'Jonn Jonzz',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:20,
        name:'Deadpool',
        alias:'Wade Wilson',
        team:'None',
        publisher:'Marvel',
    },
]
console.log(heroes.find(h=>h.id==3))
console.log(heroes.find(h=>h.id==30))
console.log(heroes.findIndex(h=>h.id==3))
console.log(heroes.findIndex(h=>h.id==30))
console.log(heroes.find(h=>h.name=="Thor"))
console.log(heroes.find(h=>h.name=="Robin"))
console.log(heroes.find(h=>h.name=="Thor" && h.publisher=="Marvel"))
console.log(heroes.find(h=>h.name=="Thor" && h.publisher=="DC"))
console.log(heroes.find(h=>h.name=="Thor" || h.publisher=="DC"))

// reduce
console.log(numeros.reduce((acum, elem)=>acum+elem ,0))
console.log(numeros.reduce((acum, elem)=>acum+elem ,100))
console.log(numeros.reduce((acum, elem, indice, arrayOriginal)=>{
    console.log(`Reduce. Recorriendo elemento ${indice}, con valor ${elem}. Acum: ${acum} Array original: ${arrayOriginal}`)
    return acum+elem
}, 0))

console.log("Inicializa en 0",numeros.reduce((acum, elem)=>acum+elem ,0))
console.log("No inicializa",numeros.reduce((acum, elem)=>acum+elem))

console.log(numeros.reduce((acum, elem, indice, arrayOriginal)=>{
    console.log(`Reduce c/ini. Recorriendo elemento ${indice}, con valor ${elem}. Acum: ${acum} Array original: ${arrayOriginal}`)
    return acum+elem
}, 0))
console.log(numeros.reduce((acum, elem, indice, arrayOriginal)=>{
    console.log(`Reduce s/ini. Recorriendo elemento ${indice}, con valor ${elem}. Acum: ${acum} Array original: ${arrayOriginal}`)
    return acum+elem
}))


numeros=[10, 22, 33, 44]
console.log(numeros.reduce((acum, elem, indice, arrayOriginal)=>{
    console.log(`Reduce s/ini. Recorriendo elemento ${indice}, con valor ${elem}. Acum: ${acum} Array original: ${arrayOriginal}`)
    return acum+elem
}))

numeros=[1,2,3,4,5]
console.log("Inicializa en 0",numeros.reduce((acum, elem)=>acum+elem*10 ,0))
console.log("No inicializa",numeros.reduce((acum, elem)=>acum+elem*10))

console.log(numeros.map(e=>{
    console.log("hola")
    // return "Juan"
}))