// const http=require("http")
import http from "http"
import { heroes } from "./data/heroes.js"

const PORT=3000
const app=http.createServer((req, res)=>{

    // console.log(req)
    if(req.url==="/favicon.ico") return 
    console.log(req.url)

    if(req.url==="/heroes"){
        res.setHeader("Content-type", "application/json; charset=utf-8")
        return res.end(JSON.stringify(heroes, null, 5))
        
    }

    if(req.url==="/contacto"){
        res.setHeader("Content-type", "text/plain; charset=utf-8")
        return res.end("Contacto...!!!")
        
    }

    
    if(req.url==="/"){
        res.setHeader("Content-type", "text/plain; charset=utf-8")
        return res.end("Server con módulo HTTP...!!!")
        
    }

    res.setHeader("Content-type", "text/plain; charset=utf-8")
    res.end("404 | not found")


})

app.listen(PORT, ()=>console.log(`Server online en puerto ${PORT}...!!!!`))