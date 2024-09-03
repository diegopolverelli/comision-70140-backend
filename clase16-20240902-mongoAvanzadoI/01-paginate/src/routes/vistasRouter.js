import { Router } from 'express';
export const router=Router()

router.get('/usuarios',(req,res)=>{

    
    res.setHeader('Content-Type','text/html')
    res.status(200).render("usuarios")
})