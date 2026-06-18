const express = require("express");
const mongoose = require("mongoose");

let USERSCHEMA = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
  },
  password: {
    type: String,
  },
  refreshToken: {
    type: String,
    default: null,
  },
});

let USERMODEL = mongoose.model("user", USERSCHEMA);

module.exports = USERMODEL;
