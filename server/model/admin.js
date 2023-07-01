const mongoose=require('mongoose')
const Schema=mongoose.Schema

const adminSchema=new Schema({
    email:{
        type:String,
        required:true,
    },
    pwd:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model('admin',adminSchema)