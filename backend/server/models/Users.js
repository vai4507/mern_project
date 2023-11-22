const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    name:String,
    phone: Number,
    email:String,
    age:Number
})

const UserModel=mongoose.model("users",UserSchema)
module.exports=UserModel