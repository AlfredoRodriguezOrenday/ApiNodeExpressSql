import express from 'express';
import routesProducts from './routes/products.routes.js'

const app = express();

app.use(express.json());

app.use("/api", routesProducts);

export default app;