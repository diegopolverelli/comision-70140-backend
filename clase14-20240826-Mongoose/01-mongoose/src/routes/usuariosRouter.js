import { Router } from 'express';
import { UsuariosManager } from '../dao/UsuariosManager.js';
import { isValidObjectId } from 'mongoose';
export const router=Router()

router.get('/',async(req,res)=>{

    try {
        let usuarios=await UsuariosManager.getUsers()
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({usuarios});
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
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`id formato inválido`})
    }

    try {
        let usuario=await UsuariosManager.getUserBy({_id:id})
        if(!usuario){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existen usuarios con id ${id}`})
        }
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({usuario});
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

