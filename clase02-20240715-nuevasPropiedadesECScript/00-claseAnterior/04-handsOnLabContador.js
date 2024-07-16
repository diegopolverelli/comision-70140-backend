class Contador{
    static contadorGlobal=0
    static cantidadContadores=0
    constructor(responsable){
        this.responsable=responsable
        this.contador=0
        Contador.cantidadContadores++
    }

    incrementar(){
        this.contador++
        Contador.contadorGlobal++
    }

    getContador(){
        return this.contador
    }
}

let c1=new Contador("Jimena")
let c2=new Contador("Carlos")
let c3=new Contador("Veronica")

c1.incrementar()
c1.incrementar()
c1.incrementar()
c1.incrementar()

c2.incrementar()
c3.incrementar()
c3.incrementar()

console.log(`EL responsable del contador 1 es ${c1.responsable}, y suma ${c1.getContador()}`)

console.log(`Cantidad total de contadores: ${Contador.cantidadContadores}`)
console.log(`El total acumulado por los contadores es de ${Contador.contadorGlobal}`)


class ProductManager{
    constructor(){
        this.productos=[] // [{id:1, nombre:"Martillo"}, {id:2, nombre:"Clavos"}, {id:7, nombre:"Clavos"}]
    }

    addProducto(nombre, descrip, precio, stock){

        let existe=this.productos.find(producto=>producto.nombre===nombre)
        if(existe){
            console.log(`El producto ${nombre} ya existe...!!!`)

            return 
        }

        let id=1
        if(this.productos.length>0){
            id=this.productos[this.productos.length-1].id+1
        }

        // validaciones
        this.productos.push({
            id, 
            nombre, 
            descrip, 
            precio, 
            stock
        })
    }

    getProducts(){
        return this.productos
    }


}

const productManager=new ProductManager()

productManager.addProducto("Martillo", "Martillo I", 100, 4)
productManager.addProducto("Destornillador", "Dest1", 50, 30)
productManager.addProducto("Clavos", "Clavos", 107, 24)
productManager.addProducto("Martillo", "Martillo I", 100, 4)

console.log(productManager.getProducts())