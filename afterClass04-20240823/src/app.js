import express from 'express';
import {engine} from "express-handlebars"
import {Server} from "socket.io"

import { router as alumnosRouter } from './routes/alumnosRouter.js';
import { router as cursosRouter } from './routes/cursosRouter.js';
import { router as carrerasRouter } from './routes/carrerasRouter.js';
import { router as vistasRouter } from './routes/vistasRouter.js';

import { AlumnosManager } from './dao/AlumnosManager.js';
import { CarrerasManager } from './dao/CarrerasManager.js';
import { CursosManager } from './dao/CursosManager.js';

let io

AlumnosManager.path="./src/data/alumnos.json"
CarrerasManager.path="./src/data/carreras.json"
CursosManager.path="./src/data/cursos.json"

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.use("/api/alumnos", alumnosRouter)
app.use(
    "/api/cursos", 
    (req, res, next)=>{
        req.io=io

        next()
    },
    cursosRouter
)
app.use("/api/carreras", carrerasRouter)
app.use("/", vistasRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{  //http server
    console.log(`Server escuchando en puerto ${PORT}`);
});

io=new Server(server)  //websockets server
