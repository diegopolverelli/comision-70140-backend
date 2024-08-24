import fs from "fs"
export class CarrerasManager{
    static path

    static async get(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"}))
        }else{
            return []
        }
    }

    static async create(){
        let carreras=await this.get()
        let id=1
        if(carreras.length>0){
            id=Math.max(...carreras.map(d=>d.id))+1
        }
        carreras.push({
            id, 
            cursando:[]
        })
        await fs.promises.writeFile(this.path, JSON.stringify(carreras, null, 5))
        return id
    }

    static async update(id, carrera={}){
        let carreras=await this.get()
        let indiceCarrera=carreras.findIndex(c=>c.id===id)
        if(indiceCarrera===-1){
            throw new Error(`${id} de carrera inexistente`)
        }
        // carreras[indiceCarrera]={
        //     ...carreras[indiceCarrera],
        //     ...carrera,
        //     id
        // }
        carreras[indiceCarrera]=carrera
        await fs.promises.writeFile(this.path, JSON.stringify(carreras, null, 5))
        return carreras[indiceCarrera]
    }
}