
const User=require('../models/usermodel.js')
exports.home=(req,res)=>{
    res.send('Hello World !')
}

exports.createUser= async(req,res)=>{
//extract info
try{
const {name,email}=req.body
if(!name || !email){
    throw new Error("Namae and Email are required")
}
const userExist= await User.findOne({email})
if(userExist){
    throw new Error("USer already exists")
}
const user = await User.create({
    name,email
})
res.status(201).json({
    success:true,
    message:"User created",user
})
}catch(error){
console.log(error);
res.status(400).json({
success:false,
message:error.message,
})
}
}

exports.getUsers=async(req,res)=>{
    try{
        const users=await User.find({})
        res.status(200).json(
            {
success:true,
message:"users fetched successful",
users

        })

    }
    catch(error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
//getting data from url
exports.deleteUser=async(req,res)=>{
    try{
const userID=req.params.id
await User.findByIdAndDelete(userID)
res.status(200).json({
    success:true,
    message:"user deleted successfully"
})
    }
    catch(error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:"uanbel to delete user"

        })

    }
}
exports.editUser=async(req,res)=>{

try{
const user=await User.findByIdAndUpdate(req.params.id,req.body)
res.status(200).json({
    success:true,
    message:"User update successfully"
})
}catch(error){
console.log("unable to update")
res.status(400).json({
    success:false,
    message:error.message
})

}}