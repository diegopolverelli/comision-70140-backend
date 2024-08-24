import { Router } from 'express';
import { CursosManager } from '../dao/CursosManager.js';
export const router=Router()

router.get('/',async(req,res)=>{

    try {
        let cursos=await CursosManager.get()
    
        res.setHeader('Content-Type','application/json')
        res.status(200).json({cursos})
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

router.post("/", async(req, res)=>{
    let {descrip, horas}=req.body
    if(!descrip || !horas){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete todos los datos`})
    }

    horas=Number(horas)
    if(isNaN(horas)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Horas en formato invalido`})
    }

    try {
        let nuevoCurso=await CursosManager.create(descrip, horas)
        req.io.emit("nuevoCurso", nuevoCurso)
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoCurso});
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