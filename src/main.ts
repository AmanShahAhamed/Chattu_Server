import express from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/user.routes'
import {connectDB} from './utils/features';
import bodyParser from 'body-parser'

const app=express();
dotenv.config();

//connecting to db
const connectionUrl:string=process.env.CONNECTION_URI as string;
const port=process.env.PORT || 3000;
connectDB(connectionUrl);

//midleware
app.use(bodyParser.json());

app.use('/user',userRoute)

app.listen(port,()=>{
     console.log(`Server is runing on port ${port}`);
})
