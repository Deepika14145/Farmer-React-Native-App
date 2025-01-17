import express from 'express';
import addscheme from './schemes/addscheme.js';
import deletescheme from './schemes/deletescheme.js';
const app=express();
app.use(express.json())
const router=express.Router();

router.post('/addscheme',addscheme);
app.use('/',router);
router.post('/deletescheme',deletescheme);

app.listen(3000);