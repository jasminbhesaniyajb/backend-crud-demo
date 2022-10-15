import express from 'express'
import {products, createProduct, updateProduct, deleteProduct} from '../controllers/productControllers.js'
const router = express.Router()

router.get('/products', products)

router.post('/create-product', createProduct)

router.put('/update-product/:id', updateProduct)

router.delete('/delete-product/:id', deleteProduct)

export default router