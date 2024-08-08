import { Router } from 'express';
export const router=Router()

router.get('/',(req,res)=>{
    let {nombre}=req.query
    let persona={
        nombre:"Juan", email:"juan@test.com"
    }
    let titulo="Home Page - Coder"
    res.setHeader('Content-Type','text/html');
    res.status(200).render("home", {
        titulo, 
        nombre,
        persona
    });
})

router.get('/heroes',(req,res)=>{

    

    res.setHeader('Content-Type','text/html')
    res.status(200).render("heroes")
})