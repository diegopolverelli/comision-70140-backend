import express from 'express';
import {Server} from "socket.io"

import { router as heroesRouter } from './routes/heroesRouter.js';
const PORT=3000;
let serverSocket

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.use(
    '/api/heroes', 
    (req, res, next)=>{
        req.socket=serverSocket
        req.nombre="Gonzalo"

        next()
    },
    heroesRouter
)



const serverHTTP=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

serverSocket=new Server(serverHTTP)  // const io=new Server(server)

setInterval(() => {
    let temperatura=Math.floor(Math.random()*(7)+28)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    serverSocket.emit("nuevaLecturaTemperatura", temperatura)
}, 1000);

serverSocket.on("connection", socket=>{
    console.log(`Se conecto un cliente con id ${socket.id}`)

    socket.emit("saludo",`Bienvenido. Soy el server. Identificate...!!!`)

    socket.on("id", nombre=>{
        console.log(`El cliente con id ${socket.id} se ha identificado como ${nombre}`)
        socket.broadcast.emit("nuevoUsuario", nombre)
    })

})