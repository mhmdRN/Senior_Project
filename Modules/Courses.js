var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Courses = new Schema({
  Course_code: {
    type: String,
    required: true
  },
  course_name: {
    type: String,
    required: true
  },
  Total_Hours: {
    type: Number
  },
  Description: {
    type: String
  },
  credits: {
    type: Number,
    required: true
  },
  available: {
    type: Boolean,
    required: true
  },
  Semester_Nb: {
    type: String,
    required: true
  },
  Course_Type: {
    type: String,
    required: true
  },
  Course_hours: {
    type: Number
  },
  Lab_hours: {
    type: Number
  },
  Exercise_hours: {
    type: Number
  }
});
const Course=mongoose.model('Courses',Courses);
module.exports=Course;