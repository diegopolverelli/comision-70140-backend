import fs from "fs"
export class CursosManager{
    static path

    static async get(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"}))
        }else{
            return []
        }
    }

    static async create(descrip, horas){
        let cursos=await this.get()
        console.log(cursos)
        let existe=cursos.find(c=>c.descrip.toLowerCase()===descrip.toLowerCase())
        if(existe){
            throw Error(`Ya existe el curso ${descrip}`)
        }

        let id=1
        if(cursos.length>0){
            id=Math.max(...cursos.map(d=>d.id))+1
        }

        let nuevoCurso={id, descrip, horas}
        cursos.push(nuevoCurso)
        await fs.promises.writeFile(this.path, JSON.stringify(cursos, null, 5))
        return nuevoCurso
    }


}