export const logMidd=(req, res, next)=>{
    console.log(`Peticion llegando el ${new Date().toLocaleDateString()} - url: ${req.url} - método: ${req.method}`)

    req.codigo=900001

    next()
}

export const midPrueba=(req, res, next)=>{
    if(!req.codigo){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No encontré codigo`})
    }

    next()
}

export function formatNombre(req, res, next){
    if(req.query.nombre){
        req.query.nombre=req.query.nombre.toUpperCase()
    }



    console.log("pasó por formatName")

    next()
}

export const errorHandler=(error, req, res, next)=>{
    if(error){
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Ocurrió un error...!!!`})
    }

    next()
}