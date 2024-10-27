const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  truckRego:{
    type:String,
    require:true
  },
  mobile: {
    type: Number,
    require: true,
  },
  licenceNumber: {
    type: String,
    require: true,
  },
  role:{
    type:Number, 
    default:0 //0> Normal user 1>admin
  },
  profileImage:{
    type:String,
  }
});

module.exports = mongoose.model('User', userSchema)