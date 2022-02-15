import Event from '../models/eventModel.js';
import mongoose from "mongoose";


export const GetEvents =  async (request, response)=>{
    try{
        const events = await Event.find();
        await response.json(events);
    }
    catch(err){
        await response.send({message:err.message});
    }
}

export const CreateEvent = async (request, response)=>{

    const data = request.body;
    const event = new Event(data);
    try{
        await event.save();
        response.json(event);
    }
    catch (er){
        response.json({message:'Error !'});
    }
}
export const UpdateEvent = async (request, response)=>{
    const {id:_id} = request.params;
    const event = request.body;

    if(!mongoose.Types.ObjectId.isValid(_id))
        return response.send('no such id');
    const updatedEvent = await Event.findByIdAndUpdate(_id,event,{new:true});
    response.json(updatedEvent);
}

export const DeleteEvent= async (request, response)=>{
    const {id} = request.params;

    if(!mongoose.Types.ObjectId.isValid(id))
        return response.send('no such id');

    await Event.findByIdAndRemove(id);
    response.send({message:'Deleted !'})
}
