import mongoose from 'mongoose';
import { mongourl } from './utils.js';

const usuariosEsquema = new mongoose.Schema(
    {
        first_name: {
            type:String, index: true
        },
        last_name: String,
        email: {
            type: String, unique:true
        },
        gender: String,
        code: Number
    }, { collection: 'bigUsers' }
)

export const usuariosModelo = mongoose.model('usuarios', usuariosEsquema)


const entorno = async () => {
    try {
        await mongoose.connect(mongourl)
        console.log(`Conexión a DB establecida`)

        // let resultado=await usuariosModelo.find().explain("executionStats")
        // console.log(resultado)
        // let resultado=await usuariosModelo.find({first_name:"Bill"}).explain("executionStats")
        // console.log(JSON.stringify(resultado.executionStats, null, 5))
        // let resultado=await usuariosModelo.findOne({first_name:"Bill"}).explain("executionStats")
        // console.log(JSON.stringify(resultado.executionStats, null, 5))
        // let resultado=await usuariosModelo.findOne({first_name:"Marcellina"}).explain("executionStats")
        // console.log(JSON.stringify(resultado.executionStats, null, 5))
        // let resultado=await usuariosModelo.find({first_name:/^A/i}).explain("executionStats")
        // console.log(JSON.stringify(resultado.executionStats, null, 5))
        let resultado=await usuariosModelo.find({first_name:/^A/i})//.explain("executionStats")
        console.log(JSON.stringify(resultado, null, 5))

        process.exit()

    } catch (error) {
        console.log(error.message)
    }
}

entorno()