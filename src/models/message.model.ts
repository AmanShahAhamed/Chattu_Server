import {Model, Schema,Types,model} from 'mongoose';

interface IMessage extends Document{
     content:string;
     attachement:{public_id:string; url:string};
     sender:Types.ObjectId;
     chat:Types.ObjectId
}

interface ImessageModel extends Model<IMessage>{};

const mesageSchema=new Schema<IMessage>({

     content:String,

     attachement:[
      {          public_id:{
               type:String,
               required:true,
          },
          url:{
               type:String,
               required:true, 
          }
     }
     ],
     
     sender:{
          type:Schema.Types.ObjectId,
           ref:"user",
           required:true,
     },
     chat:{
          type:Schema.Types.ObjectId,
          ref:"chat" ,
          required:true,  
     },


},{timestamps:true});


export const Message:ImessageModel=model<IMessage,ImessageModel>("message",mesageSchema);