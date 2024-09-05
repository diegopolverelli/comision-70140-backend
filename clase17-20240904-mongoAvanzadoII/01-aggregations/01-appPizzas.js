import express from 'express';
import mongoose from 'mongoose';
import { mongourl } from './utils.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const ventasCol='ventas'

const ventasEsquema=new mongoose.Schema({
    name:String,
    size:{
        type: String,
        enum:["small","medium","large"],
        default:"medium"
    },
    price:Number, 
    quantity:Number,
    date:Date, 
})

const ventasModelo=mongoose.model(ventasCol,ventasEsquema);

const env=async()=>{
    try {
        await mongoose.connect(mongourl)
        console.log(`Conexión a DB establecida`);

    } catch (error) {
        console.log(`Error en la app: ${error.message}`);
    }
}

env()

app.get('/',async(req,res)=>{

    let ventas=await ventasModelo.find()

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({ventas});

})

app.get('/informe',async(req,res)=>{

    let ventas=await ventasModelo.aggregate(
        [
            {
                $match: {size:"medium"}
            },
            {
                $group:{
                    _id: "$name",
                    totalQuantity:{$sum:"$quantity"},
                    precioPromedio: {$avg:"$price"}
                }
            },
            {
                $sort:{totalQuantity:-1}
            }
        ]
    )

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({ventas});

})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
