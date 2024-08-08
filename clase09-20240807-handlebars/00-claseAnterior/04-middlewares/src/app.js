import express from 'express';
import { errorHandler, formatNombre, logMidd, midPrueba } from '../middlewares/varios.js';

import { router as heroesRouter } from './routes/heroesRouter.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(logMidd, midPrueba)

app.use("/api/heroes", heroesRouter)

app.get('/',(req,res)=>{

    console.log(fafafa)

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/saludo', formatNombre, (req,res)=>{
    let{nombre}=req.query


    let saludo=nombre?`Hola, ${nombre}...!!! Bienvenido...!!!`:`Bienvenido, invitado...!!!`

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:saludo});
})

app.use(errorHandler)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
