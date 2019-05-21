var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create,
  addToFlight
  

};

function addToFlight(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    ticket.flight.push(req.body.ticketId);
    flight.save(function (err) {
      if (err) return res.redirect('tickets/new');
    console.log(flight);
    console.log(req.body);
    res.redirect(`/flights/${flight._id}`);
    });
  });
}

function newTicket(req, res) {
  Ticket.find({}, function (err, tickets) {
    res.render('tickets/new', {
      title: 'Add Ticket',
      tickets
    });
  });
}

function create(req, res) {
    Ticket.create(req.body, function (err, ticket) {
      res.redirect('/tickets/new');
      console.log(ticket);
       console.log(req.body);
  
  });
}


// function create(req, res) {
//   var ticket = new Ticket(req.body);
//   ticket.save(function(err) {
//     if (err) return res.redirect('/tickets/new');
//     res.redirect(`/flights/${flight._id}`);
//     console.log(ticket);
//     console.log(req.body);
//   });
// }

