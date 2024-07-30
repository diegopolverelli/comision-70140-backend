const fs = require("fs")

let rutaArchivo = "./archivos/archivoPromesas.txt"
let texto3 = `
“Debe trabajar el hombre
Para ganarse su pan;
Pues la miseria, en su afán
De perseguir de mil modos,
Llama a la puerta de todos
Y entra en la del haragán”.

“Muchas cosas pierde el hombre
Que a veces la vuelve a hallar;
Pero los debo enseñar,
Y es güeno que lo recuerden:
Si la vergüenza se pierde,
Jamás se la vuelve a encontrar”.

José Hernandez - fragmento del Martin Fierro`

// fs.promises.writeFile(rutaArchivo, texto3)
//     .then(() => {
//         console.log("Archivo generado...!!!")

//         fs.promises.readFile(rutaArchivo, { encoding: "utf-8" })
//             .then(textoRecuperado => {
//                 console.log(textoRecuperado)

//                 fs.promises.appendFile(rutaArchivo, "\n\nEditorial Sudamericana")
//                     .then(()=>{
//                         console.log("Editorial agregada")
//                     })
//             })
//             .catch(error => console.log(error.message))

//     })
//     .catch(error => console.log(error.message))


// fs.promises.writeFile(rutaArchivo, texto3)
//     .then(() => {
//         console.log("Archivo generado...!!!")
//         return fs.promises.readFile(rutaArchivo, { encoding: "utf-8" })
//     })
//     .then(textoRecuperado => {
//         console.log(textoRecuperado)
//         return fs.promises.appendFile(rutaArchivo, "\n\nEditorial Sudamericana")
//     })
//     .then(()=>{
//         console.log("Editorial agregada")

//         setTimeout(() => {
//             fs.promises.unlink(rutaArchivo)
//                 .then(()=>console.log("Archivo eliminado...!!!"))
//         }, 2000);
//     })
//     .catch(error => console.log(error.message))

const archivos=async()=>{

    try {
        await fs.promises.writeFile(rutaArchivo, texto3)
        let textoRecuperado=await fs.promises.readFile(rutaArchivo, {encoding:"utf-8"})
        console.log(textoRecuperado)
        await fs.promises.appendFile(rutaArchivo, "\n\nEditorial Planeta")
        console.log("Editorial agregada")
    
        setTimeout(async() => {
            await fs.promises.unlink(rutaArchivo)
            console.log("Archivo eliminado...!!!")
        }, 2000);
    } catch (error) {
        console.log(error.message)
    }

}

// archivos()

class HeroesManager{
    constructor(ruta){
        this.path=ruta
    }

    async getHeroes(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"}))
        }else{
            return []
        }
    }

    async addHeroe(name){
        // validaciones quedan para ustedes...
        let heroes=await this.getHeroes()

        let id=1
        if(heroes.length>0){
            id=Math.max(...heroes.map(d=>d.id))+1
        }
        
        heroes.push({
            id, name
        })

        await fs.promises.writeFile(this.path, JSON.stringify(heroes, null, 5))
        console.log(`Heroe ${name} generado con id ${id}`)
    }

}

const heroesManager=new HeroesManager("./archivos/heroes.json")
// heroesManager.getHeroes().then(heroes=>console.log(heroes))

const app=async()=>{
    console.log(await heroesManager.getHeroes())
    await heroesManager.addHeroe("Robin")
    console.log(await heroesManager.getHeroes())

}

app()

