import { heroesModelo } from "./models/heroesModelo.js"

export class HeroesMongoDAO{
    static async get(){
        return await heroesModelo.find().lean()
    } // fin get

    static async create(heroe={}){
        let nuevoHeroe=await heroesModelo.create(heroe)
        return nuevoHeroe.toJSON()
    } // fin create

    static async update(id, aModificar={}){
        // return await heroesModelo.findOneAndUpdate({_id:id}, aModificar)
        return await heroesModelo.findByIdAndUpdate(id, aModificar, {new:true}).lean()
    } // fin update

    static async delete(id){
        return await heroesModelo.findByIdAndDelete(id).lean()
    }

} // fin HeroesDAO