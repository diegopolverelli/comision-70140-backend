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