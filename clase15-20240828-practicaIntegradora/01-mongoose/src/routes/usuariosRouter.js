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

}) // get

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

}) // getById

router.post("/", async(req, res)=>{
    let {nombre, email, ...otros}=req.body  // ... es el op. rest
    if(!nombre || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`nombre | email son requeridos`})
    }

    // validaciones
    let exRegEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    if(!exRegEmail.test(email)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Formato invalido del email`})
    }

    try {
        let existe=await UsuariosManager.getUserBy({email})
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Usuario existente en DB ${email}`})
        }
        let nuevoUsuario=await UsuariosManager.createUser({nombre, email, ...otros})  // ... es op. spread

        req.io.emit("nuevoUsuario", nuevoUsuario)

        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoUsuario});

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
}) // create


router.put("/:id", async(req, res)=>{
    let {id}=req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`id invalido`})
    }

    let aModificar=req.body
    // validaciones... 

    try {
        let usuarioModificado=await UsuariosManager.updateUser(id, aModificar)
        if(!usuarioModificado){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No se ha podido modificar el usuario`})
        }
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({usuarioModificado});    
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

router.delete("/:id", async(req, res)=>{
    let {id}=req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`id invalido`})
    }

    try {
        let usuarioEliminado=await UsuariosManager.deleteUser(id)
        if(!usuarioEliminado){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No se ha podido eliminar el usuario`})
        }
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({usuarioEliminado});    
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