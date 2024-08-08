import { Router } from 'express';
import { auth } from '../../middlewares/auth.js';
export const router=Router()

router.use(auth, (req, res, next)=>{
    console.log(`Middleware a nivel router, definido "on line"...!!!`)
    next()
})

router.post('/',(req,res)=>{

    let heroes="agrega heroes...!!!"
    
    res.setHeader('Content-Type','application/json')
    res.status(200).json({heroes, codigo:req.codigo})
})