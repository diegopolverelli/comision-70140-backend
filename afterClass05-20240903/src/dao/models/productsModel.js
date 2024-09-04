import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2"

const productSchema=new mongoose.Schema(
    {
        code: {
            type: String, unique: true
        }, 
        descrip: String, 
        price: Number, 
        stock: Number
    },
    {
        timestamps:true
    }
)

productSchema.plugin(paginate)

export const productsModel=mongoose.model(
    "products", productSchema
)