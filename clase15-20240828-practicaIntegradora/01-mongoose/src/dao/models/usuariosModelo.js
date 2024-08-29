import mongoose from "mongoose";

const usuariosColl="usuarios"
const usuariosSchema=new mongoose.Schema(
    {
        nombre: String,
        email: {
            type: String, unique: true
        },
        edad: Number,
        rol: {
            type: String, default:"user"   
        }, 
        materias: []
    },
    {
        timestamps:true, 
        strict: false,
        // collection: "usuarios2019"
    }
)

export const usuariosModelo=mongoose.model(
    usuariosColl,
    usuariosSchema
)


