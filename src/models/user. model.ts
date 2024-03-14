import {CallbackWithoutResultAndOptionalError, Model, Schema,model} from 'mongoose';
import { hash } from 'bcrypt';

export interface IUser extends Document{
     _id?:string;
     name:string;
     username:string;
     password:string;
     avatar:{public_id:string,url:string}
}

interface IUserModel extends Model<IUser>{};

const userSchema=new Schema<IUser>({
     name:{
          type:String,
          require:true
     },
     username:{
          type:String,
          require:true,
          unique:true
     },
     password:{
          type:String,
          require:true,
          select:false
     },
     avatar:{
          public_id:{
               type:String,
               required:true,
          },
          url:{
               type:String,
               required:true, 
          }
     }

},{timestamps:true});

userSchema.pre("save",async function(next:CallbackWithoutResultAndOptionalError){
     if(!this.isModified(this.password)) next();
  this.password=await hash(this.password,10);
})


export const User:IUserModel=model<IUser,IUserModel>("user",userSchema);