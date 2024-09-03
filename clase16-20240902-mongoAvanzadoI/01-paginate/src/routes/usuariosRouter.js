import { Router } from 'express';
import { UsuariosManager } from '../dao/UsuariosManager.js';
export const router=Router()

router.get('/',async(req,res)=>{

    let {page}=req.query
    if(!page || isNaN(Number(page))){
        page=1
    }

    console.log(page)

    // let usuarios= await UsuariosManager.getUsers()
    let usuarios= await UsuariosManager.getUsersPaginate(page)

    res.setHeader('Content-Type','application/json')
    res.status(200).json({usuarios})
})