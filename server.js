
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRouter from './routers/userRouter.js'
import morgan from 'morgan'
import path from 'path'
dotenv.config()
import nodemailer from 'nodemailer'



const app = express()
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: 'https://www.cycodesystems.com',
    optionsSuccessStatus: 200 ,
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  


  
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({extended:true}))
app.use('/users',userRouter)
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/static',express.static(path.join(__dirname,'public')));



app.listen(port,()=>{
    
    console.log(`server is running @ http://127.0.0.1:${port}`)
})



