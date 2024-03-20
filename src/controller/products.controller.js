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