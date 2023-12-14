import mongoose from "mongoose";

const Schema = mongoose.Schema


const activitySchema = new mongoose.Schema({
  activity: String,
  type: String,
  price: String,
  participants: Number,
  key: Number,
},{
  timestamps: true,
})



const Activity = mongoose.model('Activity', activitySchema)

export {Activty}