import mongoose from "mongoose"
export const connDB=async()=>{
    try {
        await mongoose.connect(
            "mongodb+srv://comis70140:CoderCoder@cluster0.3rdsx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            dbName: "clase16"
        }
        )
        console.log("DB conectada...!!!")
    } catch (error) {
        console.log(`Error al conectar a DB: ${error}`)
    }
}