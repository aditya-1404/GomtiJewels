const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const productSchema=new Schema({
    id:{
        type:String,
        unique:true,
    },
    name:{
        type:String,
    },
    desc:{
        type:String,
    },
})

module.exports=mongoose.model('product',productSchema);