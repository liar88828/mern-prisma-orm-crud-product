import express from 'express'
import {createProduct, deleteProduct, getProduct, getProductById, updateProduct} from "../controllers/product.mjs";


const router = express.Router()


router.get('/products/', getProduct)
router.post('/product/', createProduct)
router.get('/product/:id', getProductById)
router.patch('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)
export default router