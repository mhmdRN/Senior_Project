var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Registration = new Schema({
  Course_Code: {
    type: String,
    required: true
  },
  DFile_number: {
    type: String,
    required: true
  },
  Facility_year: {
    type: String,
    required: true
  },
  EN_Section: {
    type: Boolean
  },
  FR_Section: {
    type: Boolean
  },
  Lab: {
    type: Boolean
  },
  Exercise: {
    type: Boolean
  },
  Course: {
    type: Boolean
  },
  Lab_hours: {
    type: Number
  },
  Exercise_hours: {
    type: Number
  },
  Course_hours: {
    type: Number
  },
  Section_ID: {
    type: String
  }
});
const registration=mongoose.model('Registration',Registration);
module.exports=registration;