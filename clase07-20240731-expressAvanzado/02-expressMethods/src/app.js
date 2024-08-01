import express from 'express';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

let nombre="Martina"

app.get("/api/nombre", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombre});
})

app.post("/api/nombre", (req, res)=>{
    let {nombre:nombreBody}=req.body
    if(!nombreBody){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`complete nombre`})
    }

    nombre=`${nombre} ${nombreBody}`

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombre});
})

app.delete("/api/nombre", (req, res)=>{

    nombre=""

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombre});
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
