const socket=io()
let h2Alumno=document.getElementById("alumno")
let ulCursos=document.getElementById("cursos")

const inscribirseCurso=async(cursoID)=>{
    let carreraID=h2Alumno.dataset.carrera
    console.log({cursoID, carreraID})

    let respuesta=await fetch(`/api/carreras/${carreraID}/curso/${cursoID}`,{
        method:"put"
    })
    let datos=await respuesta.json()
    console.log(datos, respuesta.status)
    location.reload()
}

socket.on("nuevoCurso", nuevoCurso=>{
    let liNuevoCurso=document.createElement("li")
    liNuevoCurso.innerHTML=`${nuevoCurso.descrip} <button onclick="inscribirseCurso(${nuevoCurso.id})">Inscribirse</button>`
    ulCursos.append(liNuevoCurso)
})