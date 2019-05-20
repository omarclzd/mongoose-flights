var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
  

};



function newTicket(req, res) {
  Ticket.find({}, function (err, tickets) {
    res.render('tickets/new', {

      tickets
    });
  });
}


// function create(req, res) {
//   Ticket.create(req.body, function (err, ticket) {
//     res.redirect('/tickets/new');
//   })
// }
function create(req, res) {
  var ticket = new Ticket(req.body);
  ticket.save(function(err) { 

    if (err) return res.redirect('/tickets/new');
    res.redirect('/tickets/new');
    // res.redirect(`/flights/${flight._id}`)
    console.log(ticket);
  });
  }
