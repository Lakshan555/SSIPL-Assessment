import express from  "express";
import cors from "cors";

//invoke express
const app = express();

app.get('/',(req,res)=>{
    res.send('welocme');
})



app.listen(5001, () => console.log('server running at 5001'));