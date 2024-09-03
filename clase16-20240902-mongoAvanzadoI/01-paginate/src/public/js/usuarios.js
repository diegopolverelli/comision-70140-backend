const ulUsuarios=document.querySelector("ul")

const getUsuarios=async()=>{
    let params=new URLSearchParams(location.search)
    let page=params.get("page")
    if(!page || isNaN(Number(page))){
        page=1
    }

    let respuesta=await fetch(`/api/usuarios?page=${page}`)
    let datos=await respuesta.json()
    console.log(datos)

    datos.usuarios.docs.forEach(u=>{
        let liUsuario=document.createElement("li")
        liUsuario.textContent=`${u.code}) ${u.first_name} ${u.last_name}`
        ulUsuarios.append(liUsuario)
    })

    const aFirstPage=document.createElement("a")
    aFirstPage.textContent=`Pág.1`
    aFirstPage.href=`/usuarios?page=1`
    document.body.append(aFirstPage)

    const aPrevPage=document.createElement("a")
    aPrevPage.textContent=`Pág.Ant.`
    aPrevPage.href=`/usuarios?page=${datos.usuarios.prevPage}`
    if(!datos.usuarios.hasPrevPage){
        aPrevPage.classList.add("disabled")
    }
    document.body.append(aPrevPage)

    const aNextPage=document.createElement("a")
    aNextPage.textContent=`Pág.Sig.`
    aNextPage.href=`/usuarios?page=${datos.usuarios.nextPage}`
    if(!datos.usuarios.hasNextPage){
        aNextPage.classList.add("disabled")
    }
    document.body.append(aNextPage)

    const aLastPage=document.createElement("a")
    aLastPage.textContent=`Ulg.Pág`
    aLastPage.href=`/usuarios?page=${datos.usuarios.totalPages}`
    document.body.append(aLastPage)


} // getUsuarios

getUsuarios()