'use strict';

let log = console.log

const createBooking = function(flightNum, numPassengers, price)
{
  const booking = {
    flightNum,
    numPassengers,
    price
  }

  log(booking)
  booking.push(booking)
}
