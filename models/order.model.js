const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    orderId:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    source:{
        type:mongoose.SchemaType.ObjectId,
       ref:"location"
    },
    destinetion:{
        type:mongoose.SchemaType.ObjectId,
        required:"location"
    },
    user:{
        type:mongoose.SchemaType.ObjectId,
        ref:"user"
    },
    orderStatus:{
        type:String,
        default:"PENDING",
        enum:["PENDING","RUNING","COMPLETED"]
    },
    paymentDetail:{
        type:mongoose.SchemaType.ObjectId,
        ref:"payment"
    },
    createdAt:{
        type:String,
        default:()=>{
            return Date.now();
        },
      immutable:true
    },
    updatedAt:{
        type:String,
        default:()=>{
            return Date.now()
        }
    }
})

const orderModel = mongoose.model('order',orderSchema);
module.exports = orderModel