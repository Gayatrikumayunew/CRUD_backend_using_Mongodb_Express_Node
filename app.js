require('dotenv').config();
const express =require('express');
const connedToDb=require('./config/db.js')
const cors=require('cors')
const app=express();
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
connedToDb()
const userRoutes=require('./routes/userRoutes.js')
app.use('/',userRoutes)
module.exports=app;