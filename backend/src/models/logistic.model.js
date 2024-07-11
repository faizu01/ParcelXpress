import mongoose from "mongoose";
const { Schema } = mongoose;

const logisticSchema = new Schema({
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
  phone_number: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  postal_code: {
    type: String,
    required: true
  },
  manager_id: {
    type: Schema.Types.ObjectId,
    ref: "LogisticManager",
    required: true
  }
});

const Logistic = mongoose.model("Logistic", logisticSchema);

export default Logistic;
