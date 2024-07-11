import mongoose from "mongoose";
import { Schema } from "mongoose";

const vehicleSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "DeliveryPartner",
    required: true
  },
  registration_number: {
    type: String,
    required: true,
    unique: true
  }
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

export default Vehicle;
