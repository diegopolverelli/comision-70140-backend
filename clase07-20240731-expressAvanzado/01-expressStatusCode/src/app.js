const express=require('express');
const fs=require("fs");
const HeroesManager = require('./dao/HeroesManager.js');
// const { heroes } = require('./data/heroes.js');
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

HeroesManager.path="./src/data/demonSlayer.json"

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/saludo',(req,res)=>{
    console.log(req.query)
    let {nombre, despedida}=req.query
    if(!nombre){
        return res.send("Complete nombre via query param...!!!")
    }

    let saludo=`${despedida?"Chau":"Hola"}, ${nombre}`

    res.setHeader('Content-Type','text/plain');
    res.status(200).send(saludo);
})


app.get("/heroes", async(req, res)=>{
    // let heroes=JSON.parse(await fs.promises.readFile("./src/data/demonSlayer.json", {encoding:"utf-8"}))
    let heroes=await HeroesManager.getHeroes()
    console.log(heroes)
    let {limit, skip}=req.query
    if(limit){
        limit=Number(limit)
        if(isNaN(limit)){
            return res.status(400).send("El argumento limit tiene que ser numerico")
        }
    }else{
        limit=heroes.length
    }

    if(skip){
        skip=Number(skip)
        if(isNaN(skip)){
            return res.status(400).send("El argumento skip tiene que ser numerico")
        }
    }else{
        skip=0
    }

    let resultado=heroes.slice(skip, skip+limit)

    res.status(200).send(resultado)
})

app.get("/heroes/:id", async(req, res)=>{
    let {id}=req.params
    id=Number(id)
    if(isNaN(id)){
        return res.status(400).send("id debe ser numerico")
    }
    
    // let heroes=JSON.parse(await fs.promises.readFile("./src/data/demonSlayer.json", {encoding:"utf-8"}))
    let heroes=await HeroesManager.getHeroes()
    let heroe=heroes.find(h=>h.id===id)
    if(!heroe){
        return res.status(404).send(`Heroe con id ${id} not found`)
    }

    // res.status(200).send(heroe)
    // res.setHeader('Content-Type','application/json');
    res.status(200).json({heroe});
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
