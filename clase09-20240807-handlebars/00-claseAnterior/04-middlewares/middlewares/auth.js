export const auth=(req, res, next)=>{
    let {nombre, password}=req.query
    if(!nombre || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete nombre y password`})
    }

    if(nombre!="admin" || password!="123456"){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Credenciales incorrectas...!!!`})
    }

    next()
}