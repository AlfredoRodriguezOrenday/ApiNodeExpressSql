import {Router} from 'express';
import {getProducts, getProduct, createProduct, updateProduct} from '../controller/products.controller.js'

const router = Router();

router.get("/products", getProducts);

router.get("/product/:id", getProduct);

router.post("/product", createProduct);

router.put("/product/:id", updateProduct);

export default router;