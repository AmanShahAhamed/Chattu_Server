import {Model, Schema,Types,model} from 'mongoose';

interface IRequest extends Document{
     status:string;
     sender:Types.ObjectId;
     reciever:Types.ObjectId;
}

interface IRequestModel extends Model<IRequest> {}

const requestSchema=new Schema<IRequest>({
     status:{
          type:String,
          default:"Pending",
          enum:["Pending","Accepted","Rejected"]
     },
     
     sender:{
          type:Schema.Types.ObjectId,
           ref:"user",
           required:true,
     },
     reciever:{
          type:Schema.Types.ObjectId,
           ref:"user",
           required:true,
     },
     
},{timestamps:true});


export const UserRequest:IRequestModel=model<IRequest,IRequestModel>("request",requestSchema);