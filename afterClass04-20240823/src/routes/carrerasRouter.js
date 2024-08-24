import { Router } from 'express';
import { CarrerasManager } from '../dao/CarrerasManager.js';
import { CursosManager } from '../dao/CursosManager.js';
export const router=Router()

router.put('/:carreraID/curso/:cursoID',async(req,res)=>{
    let {carreraID, cursoID}=req.params
    carreraID=Number(carreraID)
    cursoID=Number(cursoID)
    if(isNaN(carreraID) || isNaN(cursoID)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Los id's deben ser numéricos...!!!`})
    }

    let carreras=await CarrerasManager.get()
    let carrera=carreras.find(c=>c.id===carreraID)
    if(!carrera){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Carrera inexistente ${carreraID}`})
    }

    let cursos=await CursosManager.get()
    let existe=cursos.find(c=>c.id===cursoID)
    if(!existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Curso ${cursoID} inexistente...!!!`})
    }

    let indiceCurso=carrera.cursando.findIndex(c=>c.cursoID===cursoID)  
    if(indiceCurso!==-1){
        carrera.cursando[indiceCurso].inscripciones++
        // res.setHeader('Content-Type','application/json');
        // return res.status(400).json({error:`El alumno ya está inscripto en el curso ${cursoID}...!!!`})
    }else{
        carrera.cursando.push({
            cursoID, inscripciones:1
        })
    }
    
    carrera=await CarrerasManager.update(carreraID, carrera)

    res.setHeader('Content-Type','application/json')
    res.status(200).json({carrera})
})