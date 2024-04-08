const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name should not exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  username: {
    type: String,
    required: [true, "Please Enter Your Username"],
    // unique: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter Your E-mail"],
    // unique: true,
    validate: [validator.isEmail, "Please Enter a Valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      // required: true,
    },
    url: {
      type: String,
      // required: true,
    },
  },

  location: {
    type: String,
    required: [true, "Please Enter Your Location"],
  },
  work: {
    type: Boolean,
  },
  hire: {
    type: Boolean,
  },
  inspire: {
    type: Boolean,
  },
});

module.exports = mongoose.model("User", userSchema);
