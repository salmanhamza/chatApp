const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
      validate: [isEmail, "email is not validated"],
    },
    password: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
    },
    newMessage: {
      type: Object,
      default: {},
    },
    status: {
      type: String,
      default: "online",
    },
  },
  { minimize: false }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
