import express from 'express';
import { router as petsRouter } from './routes/petsRouter.js';
import { router as usersRoter } from './routes/users.Router.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/pets", petsRouter)
app.use("/api/users", usersRoter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});