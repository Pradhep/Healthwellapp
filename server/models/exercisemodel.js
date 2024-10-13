import mongoose from "./index.js";

// Define the schema
const exerciseSchema = new mongoose.Schema({
    exsid: {
        type: String,
        required: [true, 'Exercise Id is Required']
    },
    userId: {
        type: String,
        required: [true, 'userId is required']
    },
    exstitle: {
        type: String,
        required: [true, 'Exercise Title is Required']
    },
    exsduration: {
        type: String,
        required: [true, 'Exercise Duration is Required']
    },
    exscalburned: {
        type: String,
        required: [true, 'Exercise Calories Burned is Required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, 
{
    collection: 'exercises',
    versionKey: false
});

// Create the model
const Exercise = mongoose.model('Exercise', exerciseSchema);

export default Exercise;
