import { Router } from 'express';
import { AlumnosManager } from '../dao/AlumnosManager.js';
import { CarrerasManager } from '../dao/CarrerasManager.js';
import { CursosManager } from '../dao/CursosManager.js';
export const router=Router()

router.get('/',async(req,res)=>{

    try {
        let alumnos=await AlumnosManager.get()
    
        res.setHeader('Content-Type','application/json')
        res.status(200).json({alumnos})
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }
})

router.get('/:id',async(req,res)=>{
    let {id}=req.params
    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id numérico`})
    }

    let alumnos=await AlumnosManager.get()
    let alumno=alumnos.find(a=>a.id===id)
    if(!alumno){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existe alumon con id ${id}`})
    }

    let carreras=await CarrerasManager.get()
    let carrera=carreras.find(c=>c.id===alumno.carreraID)
    if(!carrera){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error en los datos del alumno`})
    }
    let cursosAlumno=[]
    let cursos=await CursosManager.get()
    carrera.cursando.forEach(c=>{
        let datos=cursos.find(curso=>curso.id===c.cursoID)
        if(datos){
            cursosAlumno.push(datos)
        }
    })

    res.setHeader('Content-Type','application/json')
    res.status(200).json({alumno, cursosAlumno})
})

router.post('/login',async(req,res)=>{
    let {email}=req.body
    if(!email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete email`})
    }
    let alumnos=await AlumnosManager.get()
    let alumno=alumnos.find(a=>a.email===email)
    if(!alumno){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Error: alumno inexistente con email ${email}`})
    }

    res.setHeader('Content-Type','application/json')
    res.status(200).json({alumno})
})

router.post("/",async(req, res)=>{
    let {nombre, email}=req.body
    if(!nombre || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete nombre / email`})
    }

    try {
        let nuevoAlumno=await AlumnosManager.create({nombre, email})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoAlumno});
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }

})