import { pets } from "../data/pets.js";

export class PetsManager{
    constructor(){}

    static async getPets(){
        return pets
    }
}