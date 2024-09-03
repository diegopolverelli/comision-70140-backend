import { usuariosModelo } from "./models/usuariosModelo.js";

export class UsuariosManager{

    static async getUsers(){
        return await usuariosModelo.find().lean()
    }

    static async getUsersPaginate(page=1){
        return await usuariosModelo.paginate({},{lean:true, page, limit:20})
    }
}