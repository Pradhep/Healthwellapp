//import { Collection } from "mongoose";
import mongoose from "./index.js";

const foodschema = new mongoose.Schema({
    foodid:{
        type:String,
        required:[true,'Food Id is Required']
    },
    userId: {
        type: String,
        required: [true, 'userId is required']
    },
    foodtitle:{
        type:String,
        required:[true,'Food Title is Required']
    },
    foodcal:{
        type:String,
        required:[true,'Food Calories is Required']
    },
    foodmicront:{
        type:String,
        required:[true,'Food Micro nutrients is Required']
    },
    foodmacront:{
        type:String,
        required:[true,'Food Macro nutrients is Required']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }  
    
},
{
       collection:'foods',
       versionKey:false
}
)

const foodmodel = mongoose.model('foods',foodschema)

export default foodmodel