var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Number,
    // default: function() {
    //   let year = new Date().getFullYear();
    //   parseInt(year + 1);
    // },
  }, 
});

module.exports = mongoose.model('Flight', flightSchema);