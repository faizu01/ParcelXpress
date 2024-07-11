import mongoose from "mongoose";
const Schema = mongoose.Schema;

const deliveryPartnerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  logistic_id: {
    type: Schema.Types.ObjectId,
    ref: "Logistic",
    required: true
  }
});

const DeliveryPartner = mongoose.model(
  "DeliveryPartner",
  deliveryPartnerSchema
);

export default DeliveryPartner;
