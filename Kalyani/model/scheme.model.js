import {connectDatabase} from '../connection.js';
 async function schemeModel() {
    try{
        const connection=await connectDatabase();
        if(!connection) throw 1;
        await connection.execute(`CREATE TABLE schemes
            (id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            eligibility VARCHAR(100),
            description VARCHAR(100),
            minincome INT,
            maxincome INT,
            start_date DATE,
            documents_required VARCHAR(100),
            end_date DATE,
            region VARCHAR(20));`);
        console.log("Table created successfully !");
    }
    catch(e)
    {
        console.log("Table not created !");
    }
 }
 schemeModel();