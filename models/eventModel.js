import mongoose from "mongoose";

const EventScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
})
const Event =  mongoose.model('Event',EventScheme);

export default Event;
