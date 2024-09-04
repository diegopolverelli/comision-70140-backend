import express from 'express';
import { connDB } from './connDB.js';
import { config } from './config/config.js';

import { router as productsRouter } from './routes/productRouter.js';
import { router as cartsRouter } from './routes/cartsRouter.js';
const PORT=config.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/products", productsRouter)
app.use("/api/carts", cartsRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

connDB()