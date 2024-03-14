
import { Request,Response } from "express";
import { User } from "../models/user. model";
import { ResponseStatus } from "../constant/Response.status";
export const createUser=async (req:Request,res:Response)=>{
     try{
          const {}=req.body();
          const user=new User({
          name:'First User',
          usernaame:'example@example.com',
          password:'Aman$%^iuu',
          avatar:{
               public_id:'random_public_id',
               url:'http://random/url.com'
          }

     })
    const saveduser=await user.save();
    return res.status(201).json({status:ResponseStatus.success,message:'user is created suceessfully',_id:saveduser.id})
     }catch(error){
       throw res.status(404).json({status:ResponseStatus.error,message:error})
     }
}

