import express from "express"
import { heroes } from "./data/heroes.js"

const PORT=3000
const app=express()

app.get("/", (req, res)=>{

    res.send("Home Page")
})

app.get("/saludo/:nombre", (req, res)=>{

    // console.log(req.params)
    // let nombre=req.params.nombre
    let {nombre}=req.params

    let saludo=`Hola ${nombre}`
    res.send(saludo)
})

app.get("/saludo/apellido/:apellido", (req, res)=>{

    // console.log(req.params)
    // let nombre=req.params.nombre
    let {apellido}=req.params

    let saludo=`Hola. Su apellido es ${apellido}`
    res.send(saludo)
})

app.get("/saludo/:nombre/:apellido", (req, res)=>{

    // console.log(req.params)
    // let nombre=req.params.nombre
    let {nombre, apellido}=req.params

    let saludo=`Hola ${nombre} ${apellido}`
    res.send(saludo)
})

app.get("/heroes", (req, res)=>{

    res.send(heroes)
})

app.get("/heroes/:id", (req, res)=>{
    let {id}=req.params
    
    // let heroe=heroes.find(h=>h.id===+id)
    // let heroe=heroes.find(h=>h.id==id)
    id=Number(id)
    if(isNaN(id)){
        return res.send("error: ingrese un id numerico")
    }
    let heroe=heroes.find(h=>h.id===id)

    res.send(heroe)
})

app.listen(PORT, ()=>console.log(`Server on line en puerto ${PORT}`))