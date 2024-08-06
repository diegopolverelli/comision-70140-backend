import {Router} from "express"
import { pets } from "../data/pets.js"
import { PetsManager } from "../dao/PetsManager.js"
export const router=Router()

// import express from "express"
// export const router=express.Router()

router.get("/", async(req, res)=>{
    let mascotas=`lista mascotas`
    // mascotas=pets // MAAAAALLLL...!!!
    mascotas=await PetsManager.getPets()

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:mascotas});
})  // /api/pets

router.get("/:id", (req, res)=>{
    let {id}=req.params
    let mascotas=`lista mascota ${id}`

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:mascotas});
}) 

router.post("/", (req, res)=>{
    let mascotas=`crear mascotas`

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:mascotas});
})  // /api/pets

router.put("/:id", (req, res)=>{
    let {id}=req.params
    let mascotas=`modifica mascota ${id}`

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:mascotas});
}) 

router.delete("/:id", (req, res)=>{
    let {id}=req.params
    let mascotas=`borra mascota ${id}`

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:mascotas});
}) 