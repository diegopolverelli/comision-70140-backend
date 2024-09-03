import mongoose from "mongoose";

const cursosModelo = mongoose.model(
    "cursos",
    new mongoose.Schema(
        {
            descrip: String,
            horas: Number,
            docente: String
        },
        {
            timestamps: true
        }
    )
)

const alumnoSchema = new mongoose.Schema(
    {
        nombre: String,
        email: String,
        cursos: {
            type: [
                {
                    curso: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "cursos"
                    }
                }
            ]
        }
    }
)

alumnoSchema.pre("findOne", function(){
    this.populate("cursos.curso").lean()
})

alumnoSchema.pre("find", function(){
    this.populate("cursos.curso").lean()
})

const alumnosModelo = mongoose.model(
    "alumnos",
    alumnoSchema
)

const crearDatos = async () => {
    await alumnosModelo.deleteMany({})
    await cursosModelo.deleteMany({})

    let curso01 = await cursosModelo.create({ descrip: "Calculo II", horas: 26, docente: "Julieta Magaldi" })
    let curso02 = await cursosModelo.create({ descrip: "Base de Datos I", horas: 14, docente: "Mariano Aguirre" })

    let alumno01 = await alumnosModelo.create({
        nombre: "Diego Ibañez",
        email: "dibanez@test.com",
        cursos: [
            {
                curso: curso01._id
            },
            {
                curso: curso02._id
            }
        ]
    })

    console.log({ curso01, curso02 })
    console.log(JSON.stringify(alumno01, null, 5))

}

const connDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://comis70140:CoderCoder@cluster0.3rdsx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
            {
                dbName: "clase16"
            }
        )
        console.log("DB conectada...!!!")
        // await  crearDatos()

        // let alumno01=await alumnosModelo.findOne().populate("cursos.curso")
        let alumno01 = await alumnosModelo
                                .findOne()
                                // .populate({
                                //     path: "cursos.curso",
                                //     // populate:{ "docente" }
                                // })
                                // .populate({
                                //     path: "aprobados.curso",
                                // })
                                // .lean()

        console.log(JSON.stringify(alumno01, null, 5))
        console.log(alumno01.nombre, alumno01.cursos[0].curso.descrip)

        let alumnos=await alumnosModelo.find().lean()
        console.log(JSON.stringify(alumnos, null, 5))


        process.exit()
    } catch (error) {
        console.log(`Error al conectar a DB: ${error}`)
    }
}
connDB()

