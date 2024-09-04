import { Router } from 'express';
import { isValidObjectId } from 'mongoose';
import { procesaErrores } from '../utils.js';
import { CartManager } from '../dao/CartManager.js';
import { ProductManager } from '../dao/ProductManager.js';
export const router = Router()

router.get('/:id', async (req, res) => {

    let { id } = req.params
    if (!isValidObjectId(id)) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: `Ingrese un id válido de MongoDB` })
    }

    try {
        let cart = await CartManager.getById(id)
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json({ cart })
    } catch (error) {
        return procesaErrores(res, error)
    }
})

router.post("/", async (req, res) => {
    try {
        let cart = await CartManager.create()
        res.setHeader('Content-Type', 'application/json');
        return res.status(201).json({ cart });
    } catch (error) {
        return procesaErrores(res, error)
    }
})

router.post("/:cid/product/:pid", async (req, res) => {
    let { pid, cid } = req.params
    if (!isValidObjectId(pid) || !isValidObjectId(cid)) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: `Algún id tiene formato inválido. Verifique...!!!` })
    }

    try {
        let cart = await CartManager.getById(cid)
        if (!cart) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({ error: `No existe cart con id ${cid}` })
        }

        let product = await ProductManager.getBy({ _id: pid })
        if (!product) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({ error: `No existe product con id ${pid}` })
        }

        console.log(JSON.stringify(cart, null, 5))
        let indiceProducto = cart.products.findIndex(p => p.product._id == pid)
        if (indiceProducto === -1) {
            cart.products.push({
                product: pid, quantity: 1
            })
        } else {
            cart.products[indiceProducto].quantity++
        }

        let resultado = await CartManager.update(cid, cart)
        if (resultado.modifiedCount > 0) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(200).json({ message: "Cart actualizado" });
        } else {
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Fallo en la actualizacion`})
        }
    } catch (error) {
        return procesaErrores(res, error)
    }
})