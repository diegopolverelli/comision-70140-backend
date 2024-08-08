import express from 'express';
import { uploader } from './utils.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.post("/jugadores", uploader.single("imagen"), (req, res)=>{
    
    let {nombre}=req.body
    let{path:rutaImagen, mimetype:formatoImagen}=req.file

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({
        nombre, 
        rutaImagen, 
        formatoImagen
    });
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
