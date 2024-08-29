import express from 'express';
import handlebars from "express-handlebars"
import {Server} from "socket.io"
import { connDB } from './connDB.js';
import { config } from './config/config.js';
import { router as usuariosRouter } from './routes/usuariosRouter.js';
import { router as vistasRouter } from './routes/viewsRouter.js';

const PORT=config.PORT;
let io

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.engine("handlebars", handlebars.engine({
//     runtimeOptions: {
//         allowProtoPropertiesByDefault: true,
//         allowProtoMethodsByDefault: true,
//     },
// }))
app.engine("handlebars", handlebars.engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")
app.use(express.static("./src/public"))

app.use(
    "/api/usuarios", 
    (req, res, next)=>{
        req.io=io
        next()
    },
    usuariosRouter
)
app.use("/", vistasRouter)



const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

connDB()

io=new Server(server)
