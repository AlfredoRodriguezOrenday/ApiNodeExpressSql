import {Router} from 'express';
import {getProducts, getProduct} from '../controller/products.controller.js'

const router = Router();

router.get("/products", getProducts)

router.get("/product/:id", getProduct)

export default router;