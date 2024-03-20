import sql from 'mssql';
import {setConnection} from '../database/connection.js';

export const getProducts = async (req, res) =>{
    const pool = await setConnection();
    const result = await pool
    .request()
    .query("SELECT * FROM products")

    if(result.rowsAffected[0] === 0){
        return res.status(404).json({message: "The products cant be founded"});
    }
    res.status(200).send(result.recordsets[0]);
}

export const getProduct = async (req, res) =>{
    const pool = await setConnection();
    const result = await pool
    .request()
    .input("id", sql.Int, req.params.id)
    .query("SELECT * FROM products WHERE id = @id")

    if(result.rowsAffected[0] === 0){
        return res.status(404).json({message: "The product cant be founded"});
    }
    res.status(200).send(result.recordsets[0]);
}

export const createProduct = async (req, res) =>{
    const pool = await setConnection();
    const result = await pool
    .request()
    .input("name", sql.VarChar, req.body.name)
    .input("price", sql.Float, req.body.price)
    .input("quantity", sql.Int, req.body.quantity)
    .input("description", sql.Text, req.body.description)
    .query("INSERT INTO products(name, price, quantity, description) VALUES(@name, @price, @quantity, @description); SELECT SCOPE_IDENTITY() AS id;")

    if(result.rowsAffected[0] === 0){
        return res.status(404).json({message:"The product can't be created"})
    }
    res.status(200).json({
        id: result.recordset[0].id,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description
    })
}

export const updateProduct = async (req, res) =>{
    const pool = await setConnection();
    const result = await pool
    .request()
    .input("id", sql.Int, req.params.id)
    .input("name", sql.VarChar, req.body.name)
    .input("price", sql.Float, req.body.price)
    .input("quantity", sql.Int, req.body.quantity)
    .input("description", sql.Text, req.body.description)
    .query("UPDATE products SET name = @name, price = @price, quantity = @quantity, description = @description WHERE id = @id")

    if(result.rowsAffected[0] === 0){
        return res.status(404).json({message:"The product can't be created"})
    }
    res.status(200).json({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description
    })
}