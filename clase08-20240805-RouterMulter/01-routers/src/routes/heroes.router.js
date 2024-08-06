const { Router } = require("express")
const HeroesManager = require("../dao/HeroesManager.js")

const router = Router()

HeroesManager.path="./src/data/demonSlayer.json"

// router.get("/",(req, res)=>{})
// router.post("/",(req, res)=>{})
// router.delete("/",(req, res)=>{})

router.get("/", async (req, res) => {
    // let heroes=JSON.parse(await fs.promises.readFile("./src/data/demonSlayer.json", {encoding:"utf-8"}))
    let heroes
    try {
        heroes = await HeroesManager.getHeroes()
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json(
            {
                error: `Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle: `${error.message}`
            }
        )
    }
    console.log(heroes)
    let { limit, skip } = req.query
    if (limit) {
        limit = Number(limit)
        if (isNaN(limit)) {
            // return res.send("El argumento limit tiene que ser numerico")
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({ error: `El argumento limit tiene que ser numerico` })
        }
    } else {
        limit = heroes.length
    }

    if (skip) {
        skip = Number(skip)
        if (isNaN(skip)) {
            // return res.send("El argumento skip tiene que ser numerico")
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({ error: `El argumento skip tiene que ser numerico` })
        }
    } else {
        skip = 0
    }

    let resultado = heroes.slice(skip, skip + limit)
    // res.send(resultado)
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ resultado });
})

router.get("/:id", async (req, res) => {
    let { id } = req.params
    id = Number(id)
    if (isNaN(id)) {
        // return res.send("id debe ser numerico")
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: `id debe ser numerico` })
    }

    // let heroes=JSON.parse(await fs.promises.readFile("./src/data/demonSlayer.json", {encoding:"utf-8"}))
    let heroes
    try {
        heroes = await HeroesManager.getHeroes()
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json(
            {
                error: `Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle: `${error.message}`
            }
        )
    }
    let heroe = heroes.find(h => h.id === id)
    if (!heroe) {
        // return res.send(`Heroe con id ${id} not found`)
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: `Heroe con id ${id} not found` })
    }

    // res.send(heroe)
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ payload: heroe });
})

router.post("/", async (req, res) => {
    let { name, ...otros } = req.body   // ... es aquí el operador rest
    if (!name) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: `Complete prop. name` })
    }

    let heroes = await HeroesManager.getHeroes()
    let existe = heroes.find(h => h.name.toLowerCase() === name.toLowerCase())
    if (existe) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: `Ya existe un personaje llamado ${name}` })
    }

    // validar todo lo que se necesite...
    try {
        let preHeroe = { name, ...otros }
        let heroeNuevo = await HeroesManager.addHeroe(preHeroe)
        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({ heroeNuevo });
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json(
            {
                error: `Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle: `${error.message}`
            }
        )
    }

})

router.put("/:id", async (req, res) => {
    let { id } = req.params
    id = Number(id)
    if (isNaN(id)) {
        // return res.send("id debe ser numerico")
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: `id debe ser numerico` })
    }

    // let heroes=JSON.parse(await fs.promises.readFile("./src/data/demonSlayer.json", {encoding:"utf-8"}))
    let heroes
    try {
        heroes = await HeroesManager.getHeroes()
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json(
            {
                error: `Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle: `${error.message}`
            }
        )
    }
    let heroe = heroes.find(h => h.id === id)
    if (!heroe) {
        // return res.send(`Heroe con id ${id} not found`)
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: `Heroe con id ${id} not found` })
    }

    // let {...aModificar}=req.body
    let aModificar = req.body

    delete aModificar.id
    // validaciones pertinentes
    if (aModificar.name) {
        let existe = heroes.find(h => h.name.toLowerCase() === aModificar.name.toLowerCase() && h.id !== id)
        if (existe) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({ error: `Ya hay otro heroe llamado ${aModificar.name}` })
        }
    }

    try {
        let heroeModificado = await HeroesManager.updateHeroe(id, aModificar)
        // res.send(heroe)
        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({ heroeModificado });
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json(
            {
                error: `Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle: `${error.message}`
            }
        )
    }



})

router.delete("/:id", async (req, res) => {
    let { id } = req.params
    id = Number(id)
    if (isNaN(id)) {
        // return res.send("id debe ser numerico")
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: `id debe ser numerico` })
    }

    try {
        let resultado = await HeroesManager.deleteHeroe(id)
        if (resultado > 0) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(200).json({ payload: "Heroe eliminado...!!!" });
        } else {
            res.setHeader('Content-Type', 'application/json');
            return res.status(500).json({ error: `Error al eliminar... :(` })
        }
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json(
            {
                error: `Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle: `${error.message}`
            }
        )
    }

})


module.exports = { router }