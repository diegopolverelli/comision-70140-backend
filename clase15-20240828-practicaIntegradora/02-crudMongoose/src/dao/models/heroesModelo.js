import mongoose from "mongoose";

// {
//     "id": 1,
//     "name": "Joker",
//     "alias": "Unknown",
//     "powers": [
//          "Criminal mastermind",
//          "Insanity",
//          "Trickery"
//     ],
//     "team": "Injustice League",
//     "publisher": "DC"
// },

export const heroesModelo=mongoose.model(
    "heroes",
    new mongoose.Schema(
        {
            id:Number,
            name: {
                type: String, unique:true
            }, 
            powers:[], 
            team:String, 
            publisher:String,
            alias:String
        },
        {
            timestamps:true
        }
    )
)