import { usuariosModelo } from "./models/usuariosModelo.js";


export class UsuariosManager{
    static async getUsers(){
        return usuariosModelo.find()
    }

    static async getUserBy(filtro={}){  // {nombre:"Juan", edad:24}
        return usuariosModelo.findOne(filtro)
    }

    static async createUser(usuario){
        return usuariosModelo.create(usuario)
    }

}