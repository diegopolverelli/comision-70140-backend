const operar=(op1, op2, callback)=>{ 
    try {
        if(typeof op1!="number" || typeof op2!="number"){
            throw new Error("Solo se aceptan argumentos numericos")
        }
        return callback(null, op1, op2)  // error=>{}
        
    } catch (error) {
        // return error.message
        return callback(error)
    }
}

// (3x3 + 5x4) /10 + 100 = 102,9
let resultado=operar(100, 0, (error, a, b)=>{
    return operar(10, 0, (error, a, b)=>{
        return operar(5, 4, (error, a, b)=>{
            return operar(3, 3, (error, a, b)=>{
                return a*b
            }) + a*b
        }) / a
    }) + a
})
console.log(resultado)
