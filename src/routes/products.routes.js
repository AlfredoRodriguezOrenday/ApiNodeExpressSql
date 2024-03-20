import {Router} from 'express';
import {getProducts, getProduct, createProduct} from '../controller/products.controller.js'

const router = Router();

router.get("/products", getProducts)

router.get("/product/:id", getProduct)

router.post("/product", createProduct)

export default router;