import {Model, Schema,Types,model} from 'mongoose';

interface IChat extends Document{
     name:string;
     groupChat:boolean;
     creator:Types.ObjectId;
     memebers:Types.ObjectId[]
}

interface IChatModel extends Model<IChat>{};

const chatSchema=new Schema<IChat>({
     name:{
          type:String,
          require:true
     },
     groupChat:{
          type:Boolean,
         default:false,
     },
     creator:{
          type:Schema.Types.ObjectId,
           ref:"user"
     },
     memebers:[
          {
          type:Schema.Types.ObjectId,
           ref:"user"   
          },
     ],


},{timestamps:true});


export const Chat:IChatModel=model<IChat,IChatModel>("chat",chatSchema);