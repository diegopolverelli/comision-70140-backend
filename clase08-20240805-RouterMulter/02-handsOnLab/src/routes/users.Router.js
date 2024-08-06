import { Router } from 'express';
export const router=Router()

router.get('/',(req,res)=>{

    let users=`lista users`

    res.setHeader('Content-Type','application/json')
    res.status(200).json({users})
})

router.get('/:id',(req,res)=>{

    let {id}=req.params
    let users=`lista user ${id}`

    res.setHeader('Content-Type','application/json')
    res.status(200).json({users})
})

router.post('/',(req,res)=>{

    let users=`crear users`

    res.setHeader('Content-Type','application/json')
    res.status(200).json({users})
})

router.put('/:id',(req,res)=>{

    let {id}=req.params
    let users=`modifica user ${id}`

    res.setHeader('Content-Type','application/json')
    res.status(200).json({users})
})

router.delete('/:id',(req,res)=>{

    let {id}=req.params
    let users=`borrar user ${id}`

    res.setHeader('Content-Type','application/json')
    res.status(200).json({users})
})