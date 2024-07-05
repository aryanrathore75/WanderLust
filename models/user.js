const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

//User Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  }
  //passport-local-mongoose will be automatically add the field of username and password for the userSchema
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);

