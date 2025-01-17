import {connectDatabase} from '../../connection.js';

async function deletescheme(req,res) {
    try{
        const connection=await connectDatabase();
        const {name}=req.body;
        connection.execute(`DELETE FROM schemes WHERE name= '${name}'`);
        res.json({message:'Scheme deleted !'});
    }
    catch{
        res.json({message:'Not deleted'});
    }
    
}
export default deletescheme;