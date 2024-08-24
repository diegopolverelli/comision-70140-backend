const inputEmail=document.getElementById("email")
const btnSubmit=document.getElementById("btnSubmit")

btnSubmit.addEventListener("click", async(e)=>{
    e.preventDefault()

    let email=inputEmail.value.trim()
    if(!email){
        alert("Complete email...!!!")
        return
    }

    let respuesta=await fetch("/api/alumnos/login", {
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email})
    })
    let datos=await respuesta.json()
    // console.log(datos, respuesta.status)
    if(respuesta.status===200){
        // console.log(`/cursos?id=${datos.alumno.id}&carreraID=${datos.alumno.carreraID}`)
        location.href=`/cursos?id=${datos.alumno.id}&carreraID=${datos.alumno.carreraID}`
    }else{
        alert(datos.error)
    }
})