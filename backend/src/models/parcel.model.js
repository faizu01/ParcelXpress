import mongoose from "mongoose";

const { Schema } = mongoose;

const parcelSchema = new Schema({
  sender_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  origin_logistic_id: {
    type: Schema.Types.ObjectId,
    ref: "Logistic",
    required: true
  },
  destination_logistic_id: {
    type: Schema.Types.ObjectId,
    ref: "Logistic",
    required: true
  },
  current_logistic_id: {
    type: Schema.Types.ObjectId,
    ref: "Logistic",
    required: true
  },
  route: [
    {
      type: Schema.Types.ObjectId,
      ref: "Logistic",
      required: true
    }
  ],
  weight: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  delivery_partner: {
    type: Schema.Types.ObjectId,
    ref: "DeliveryPartner",
    required: true
  }
});

const Parcel = mongoose.model("Parcel", parcelSchema);

export default Parcel;
