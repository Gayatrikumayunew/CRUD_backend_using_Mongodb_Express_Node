const mongoose =require('mongoose')
const connedToDb=async()=>{
mongoose.connect('mongodb://localhost:27017/newdb').then((conn)=>{
    console.log(`connected to db ${conn.connection.host} `)
}).catch((err)=>{
    console.log(err.message)
    process.exit(1)
})
}
module.exports=connedToDb