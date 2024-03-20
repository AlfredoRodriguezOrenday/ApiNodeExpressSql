import sql from 'mssql';
import "dotenv/config"

const dbSettings = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options:{
        encrypt: false,
        trsutServerCertificate: true
    }
}

export const setConnection = async () =>{
    try{
    const pool = await sql.connect(dbSettings);
    return pool;
    }catch(error){
        console.error(error);
    }
}