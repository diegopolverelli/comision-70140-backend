const express=require('express');
const fs=require("fs");
const {router:heroesRouter}=require("./routes/heroes.router.js")
// const HeroesManager = require('./dao/HeroesManager.js');
// const { heroes } = require('./data/heroes.js');
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/heroes", heroesRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('Home Page');
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


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
