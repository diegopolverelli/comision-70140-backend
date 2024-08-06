const fs=require("fs")
class HeroesManager{
    static path

    static async getHeroes(){
        if(fs.existsSync(this.path)){
            let heroes=JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"}))
            // heroes=heroes.map(h=>{
            //     return {
            //         ...h, 
            //         name: h.name.toUpperCase()
            //     }
            // })
            return heroes 
        }else{
            return []
        }
    }

    static async addHeroe(heroe={}){
        let heroes=await this.getHeroes()
        let id=1
        if(heroes.length>0){
            id=Math.max(...heroes.map(d=>d.id))+1
        }

        let nuevoHeore={
            id, 
            ...heroe   // aquí los ... son el operador spread
        }

        heroes.push(nuevoHeore)

        await fs.promises.writeFile(this.path, JSON.stringify(heroes, null, 5))

        return nuevoHeore
    }

    static async updateHeroe(id, aModificar={}){
        let heroes=await this.getHeroes()
        let indiceHeroe=heroes.findIndex(h=>h.id===id)
        if(indiceHeroe===-1){
            throw new Error(`Error: no existe id ${id}`)
        }
        heroes[indiceHeroe]={
            ...heroes[indiceHeroe],
            ...aModificar,
            id
        }
        await fs.promises.writeFile(this.path, JSON.stringify(heroes, null, 5))
        return heroes[indiceHeroe]
    }

    static async deleteHeroe(id){
        let heroes=await this.getHeroes()
        let indiceHeroe=heroes.findIndex(h=>h.id===id)
        if(indiceHeroe===-1){
            throw new Error(`Error: no existe id ${id}`)
        }
        let cantidad0=heroes.length
        heroes=heroes.filter(h=>h.id!==id)   
        let cantidad1=heroes.length
       
        await fs.promises.writeFile(this.path, JSON.stringify(heroes, null, 5))

        return cantidad0-cantidad1
    }
}


module.exports=HeroesManager