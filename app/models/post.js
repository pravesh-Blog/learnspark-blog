import mongoose from "mongoose";
const postSchema=new mongoose.Schema({
    title:String,
    slug:{type:String,unique:true},
    content:String,
    description:String,
    image:String,
    category:{type:String,default:'General'},
    views:{type:Number,default:0},
    published:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now}
})

export const Post=mongoose.models.Post||mongoose.model("Post",postSchema);