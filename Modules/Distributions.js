var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Distributions = new Schema({
  Registration: [{
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Registration'
  }],
  Date: {
    type: Date,
    required: true
  }
});
const distribution=mongoose.model('Distributions',Distributions);
module.exports=distribution;