import mysql2 from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

export async function connectDatabase() {
    try{
        const connection=await mysql2.createConnection({
            host:process.env.DB_HOST,
            user:process.env.DB_USERNAME,
            password:process.env.DB_PASSWORD,
            port:process.env.DB_PORT,
            database:process.env.DB_DATABASE
        })
        if(!connection)
        {
            throw 1;
        }
        else 
        {
            console.log("Connected Successfully !");
            return connection;
        }
    }
    catch(e)
    {
        console.log('Error while connecting with database.')
    }
    
}
connectDatabase();