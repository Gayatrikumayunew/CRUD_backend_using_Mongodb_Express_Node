const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is require'],
        trim:true,
        maxLength:[20,'length should be less than 20']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true

    }
})
module.exports=mongoose.model("User",userSchema)