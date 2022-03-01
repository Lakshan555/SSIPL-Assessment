import express from  "express";
import cors from "cors";
import db from  "./config/database1.js";  //import database1
import db2 from  "./config/database2.js"; //import database2
import employeeRoute from './routes/routes.js';

//invoke express
const app = express();


try{
    await db.authenticate();
    await db2.authenticate();
    console.log('Database connected...');
}catch(error){
    console.error('connection error:',error);
}

//use routes
app.use(express.json());
app.use('/employee',employeeRoute);

app.listen(5001, () => console.log('server running at 5001'));