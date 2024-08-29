import { villanosModelo } from "./models/villanosModelo.js"

export class VillanosMongoDAO{
    static async get(){
        return await villanosModelo.find().lean()
    } // fin get

    static async create(villano={}){
        let nuevoVillano=await villanosModelo.create(villano)
        return nuevoVillano.toJSON()
    } // fin create

    static async update(id, aModificar={}){
        // return await villanosModelo.findOneAndUpdate({_id:id}, aModificar)
        return await villanosModelo.findByIdAndUpdate(id, aModificar, {new:true}).lean()
    } // fin update

    static async delete(id){
        return await villanosModelo.findByIdAndDelete(id).lean()
    }

} // fin VillanosDAO