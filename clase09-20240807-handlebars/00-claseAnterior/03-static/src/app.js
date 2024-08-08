import express from 'express';
import {join} from "path"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(express.static("./src/public"))
let ruta=join(import.meta.dirname, "public")
// console.log(ruta)
app.use(express.static(ruta))

// app.get('/',(req,res)=>{
// 
//     res.setHeader('Content-Type','text/plain');
//     res.status(200).send('OK');
// })


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
