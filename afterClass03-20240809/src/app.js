import express from 'express';

import { router as alumnosRouter } from './routes/alumnosRouter.js';
import { router as cursosRouter } from './routes/cursosRouter.js';
import { router as carrerasRouter } from './routes/carrerasRouter.js';
import { AlumnosManager } from './dao/AlumnosManager.js';
import { CarrerasManager } from './dao/CarrerasManager.js';
import { CursosManager } from './dao/CursosManager.js';

AlumnosManager.path="./src/data/alumnos.json"
CarrerasManager.path="./src/data/carreras.json"
CursosManager.path="./src/data/cursos.json"

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/alumnos", alumnosRouter)
app.use("/api/cursos", cursosRouter)
app.use("/api/carreras", carrerasRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
