const crypto=require("crypto")

class UsersManager{
    static usuarios=[]

    static getUsuarios(){
        return this.usuarios
    }

    static addUsuario(nombre, email, password){
        // validaciones
        if(typeof nombre!=="string" || typeof email!=="string" || typeof password!=="string"){
            console.log(`Argumentos en formato invalido...!!!`)
            return 
        }

        if(!nombre.trim() || !email.trim() || !password.trim()){
            console.log(`Complete los datos`)
            return 
        }

        let regExMail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
        // let res=reCorto.test('prueba@correo.com') // true
        if(!regExMail.test(email)){
            console.log("Mail invalido")
            return 
        }

        let existe=UsersManager.usuarios.find(usuario=>usuario.email===email)
        if(existe){
            console.log(`Ya existen usuarios con email ${email}`)
            return 
        }
        // resto validaciones que necesiten o requieran

        let id=1
        if(UsersManager.usuarios.length>0){
            id=Math.max(...UsersManager.usuarios.map(d=>d.id))+1  //[{id:1, nombre:"Juan"}]
        }

        password=crypto.createHmac("sha512", "CoderCoder123").update(password).digest("hex")

        let nuevoUsuario={
            id, 
            // nombre:nombre,
            nombre, 
            email,
            password

        }

        UsersManager.usuarios.push(nuevoUsuario)

        console.log("Usuario creado...!!!")

    } // adduser

    static login(email, password){
        password=String(password)
        password=crypto.createHmac("sha512", "CoderCoder123").update(password).digest("hex")

        let usuario=UsersManager.usuarios.find(usuario=>usuario.email===email && usuario.password===password)
        if(!usuario){
            console.log(`Credenciales invalidas`)
            return 
        }

        console.log(`Login correcto...!!! Hola ${usuario.nombre}`)

    }
}

console.log(UsersManager.getUsuarios())
UsersManager.addUsuario(100, "juan@mail.com", "123")
UsersManager.addUsuario("    ", "juan@mail.com", "123")
UsersManager.addUsuario("Juan", "juan@mail.com")
UsersManager.addUsuario("Juan", "juantest.com", "123")
UsersManager.addUsuario("Juan", "juan@test.com", "123")
UsersManager.addUsuario("Juan", "juan@test.com", "123")
UsersManager.addUsuario("Juan", "juan@test.com", "123")
UsersManager.addUsuario("Luciana", "luciana@test.com", "123")
UsersManager.addUsuario("Martina", "martina@test.com", "123")

console.log(UsersManager.getUsuarios())

UsersManager.login("carlos@test.com", "123")
UsersManager.login("martina@test.com", "999999adf")
UsersManager.login("martina@test.com", "123")
