import mongoose from "mongoose"
import { config } from "./config/config.js"


// "mongodb+srv://comis70140:CoderCoder@cluster0.3rdsx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=clase14",

export const connDB=async()=>{
    try {
        await mongoose.connect(
            config.MONGO_URL,
            {dbName:config.DB_NAME}
        )
        console.log(`DB conectada...!!!`)
    } catch (error) {
        console.log(`Error al conectar a DB: ${error.message}`)
    }
}