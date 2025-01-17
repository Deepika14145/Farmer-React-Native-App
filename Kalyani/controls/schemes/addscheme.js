import {connectDatabase} from '../../connection.js';

async function addscheme(req,res) {
    try{
        const {name,eligibility,start_date,end_date,region,description,minincome,maxincome,documents_required}=req.body;
        
        const connection=await connectDatabase();
        const insertQuery=`INSERT INTO schemes(name,eligibility,start_date,end_date,region,description,minincome,maxincome,documents_required)
            VALUES (?,?,?,?,?,?,?,?,?);`;
        const values=[name,eligibility,start_date,end_date,region,description,minincome,maxincome,documents_required];
        connection.execute(insertQuery,values);
        res.json({message:"Scheme Added Successfully !"})
    }
    catch(e)
    {
        res.json({message:"Scheme not added!"});
    }
    
}
export default addscheme;