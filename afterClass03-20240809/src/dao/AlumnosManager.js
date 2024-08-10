import fs from "fs"
import { CarrerasManager } from "./CarrerasManager.js"

export class AlumnosManager{
    static path

    static async get(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"}))
        }else{
            return []
        }
    }

    static async create(alumno={}){
        if(!alumno.email){
            throw new Error("email es requerido")
        }
        let alumnos=await this.get()
        let existe=alumnos.find(a=>a.email===alumno.email)
        if(existe){
            throw new Error(`${alumno.email} ya existe en DB`)
        }
        let id=1
        if(alumnos.length>0){
            id=Math.max(...alumnos.map(d=>d.id))+1
        }

        let carreraID=await CarrerasManager.create()

        let nuevoAlumno={
            id, 
            ...alumno,
            carreraID
        }
        alumnos.push(nuevoAlumno)
        await fs.promises.writeFile(this.path, JSON.stringify(alumnos, null, 5))
        return nuevoAlumno
    }

}

// AlumnosManager.path
// const alumnosManager=new AlumnosManager()