const express=require("express")
const { heroes } = require("./data/heroes.js")

const PORT=3000

const app=express()

app.get("/", (req, res)=>{

    console.log(req.url)

    res.send("Home Page Express Server (sin módulo http...!!!)")
})

app.get("/saludo", (req, res)=>{

    res.send("<h1 style='color:blue;'>Hola...!!!</h1>")
})

app.get("/heroes", (req, res)=>{

    res.send(heroes)
})

app.listen(PORT, ()=>console.log(`Server on line en puerto ${PORT}!`))

