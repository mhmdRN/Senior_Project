var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Doctors = new Schema({
   
    Fname: {
      type: String,
      required: true
    },
    Email: {
      type: String,
      required: true
    },
    phone_Number: {
      type: String
    },
    File_Number: {
      type: Number,
      required: true
    },
    Lname: {
      type: String,
      required: true
    },
    Mname: {
      type: String,
      required: true
    },
    Rank: {
      type: String,
      required: true
    },
    Contract_Type: {
      type: String,
      required: true
    }
  
});
const doctors = mongoose.model('Doctors', Doctors);
module.exports=doctors