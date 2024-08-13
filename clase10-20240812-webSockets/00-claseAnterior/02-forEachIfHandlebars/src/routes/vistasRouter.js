import { Router } from 'express';
import { HeroesManager } from '../dao/HeroesManager.js';
export const router=Router()

router.get('/heroes',async(req,res)=>{

    let {detalle}=req.query

    let heroes=await HeroesManager.getHeroes()

    res.setHeader('Content-Type','text/html')
    res.status(200).render("heroes",{
        heroes, detalle
    })
})
