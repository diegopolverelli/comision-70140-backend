import mongoose from "mongoose"

const cartSchema=new mongoose.Schema(
    {
        products:{
            type:[
                {
                    product: {
                        type: mongoose.Schema.Types.ObjectId, 
                        ref: "products"
                    }, 
                    quantity: Number
                }
            ]
        }
    },
    {
        timestamps:true
    }
)

cartSchema.pre("findOne", function(){
    this.populate("products.product").lean()
})

export const cartsModel=mongoose.model(
    "carts", cartSchema
)