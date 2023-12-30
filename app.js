const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const port = process.env.port || 4000;

// middlewares
app.use(express.json());
// app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send(`Hello World!`);
})


const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port ,()=>{
            console.log(`server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
