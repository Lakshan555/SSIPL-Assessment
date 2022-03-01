import express from  "express";
import cors from "cors";
import db from  "./config/database1.js";
import employeeRoute from './routes/routes.js';

//invoke express
const app = express();


try{
    await db.authenticate();
    console.log('Database connected...');
}catch(error){
    console.error('connection error:',error);
}

//use routes
app.use(express.json());
app.use('/employee',employeeRoute);

app.listen(5001, () => console.log('server running at 5001'));