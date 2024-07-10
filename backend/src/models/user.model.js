import mongoose from "mongoose";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  mobileNumber: {
    type: Number,
    require: true
  },
  city: {
    type: String,

    // type: mongoose.Schema.Types.ObjectId,
    // ref: City,

    require: true
  },
  state: {
    type: String,

    // type: mongoose.Schema.Types.ObjectId,
    // ref: State,
    require: true
  },
  country: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: country,
    type: String,

    require: true
  },
  street: {
    type: String
  }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (err) {
    throw err;
  }
};
userSchema.methods.generateAccessTokens = async function () {
  try {
    return JWT.sign(
      {
        _id: this._id
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
      }
    );
  } catch (error) {
    return error;
  }
};
userSchema.methods.generateRefreshTokens = async function () {
  try {
    return JWT.sign(
      {
        _id: this._id
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      }
    );
  } catch (error) {
    return error;
  }
};

const User = mongoose.model("User", userSchema);

export default User;
