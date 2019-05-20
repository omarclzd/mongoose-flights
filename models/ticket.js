var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema({
  price: Number,
  flight: [{type: Schema.Types.ObjectId, ref: 'Flight'}],
  seat: {type: String, match: /[A-F][1-9]\d?/}


}, {
  timestamps: true
});

module.exports = mongoose.model('Ticket', ticketSchema);