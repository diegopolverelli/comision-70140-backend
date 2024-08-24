import { Router } from 'express';
import { AlumnosManager } from '../dao/AlumnosManager.js';
import { CursosManager } from '../dao/CursosManager.js';
import { CarrerasManager } from '../dao/CarrerasManager.js';
export const router=Router()

router.get('/',(req,res)=>{

    

    res.setHeader('Content-Type','text/html')
    res.status(200).render("index")
})

router.get('/cursos', async(req,res)=>{
    let {id, carreraID}=req.query
    if(!id || !carreraID){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete id / carreraID`})
    }

    id=Number(id)
    carreraID=Number(carreraID)
    if(isNaN(id) || isNaN(carreraID)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Formato argumentos inválido...!!!`})
    }

    let alumnos=await AlumnosManager.get()
    let alumno=alumnos.find(a=>a.id===id)
    if(!alumno){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Alumno con id ${id} inexistente`})
    }

    let cursos=await CursosManager.get()

    let carreras=await CarrerasManager.get()
    let carrera=carreras.find(c=>c.id===carreraID)
    if(!carrera){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Problemas con los datos del alumno`})
    }

    carrera.cursando.forEach(curso=>{
        let {descrip}=cursos.find(c=>c.id===curso.cursoID)
        if(!descrip){
            console.log(`Error con algun curso del alumno ${id}. Id curso: ${curso.cursoID}`)
        }else{
            curso.descrip=descrip
        }
    })

    console.log(carrera)

    res.setHeader('Content-Type','text/html')
    res.status(200).render("cursos",{
        alumno,
        carrera, 
        cursos
    })
})