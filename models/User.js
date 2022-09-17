import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: "String",
    unique: true,
  },
  password: {
    type: "String",
  },
  token: {
    type: "String",
  },
});

module.exports = mongoose.model("User", UserSchema);
