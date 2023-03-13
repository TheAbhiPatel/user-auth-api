import { Schema, Document, model } from "mongoose";

export interface IUser extends Document {
    name:string,
    email:string,
    password:string,
    isVerified:boolean
}

const userSchema:Schema = new Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true
    },
    isVerified : {
        type:Boolean,
        default:false
    },

})


export default  model<IUser>('User', userSchema)

