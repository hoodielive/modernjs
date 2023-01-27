"use strict";

var person = {
  firstName: 'Jon',
  lastName: 'Doe'
};

function getPerson() {}

var firstName = person.firstName,
    lastName = person.lastName;
var log = console.log;
log(firstName, lastName);

var _ref = getPerson() || {},
    first = _ref.first,
    last = _ref.last;

log(first, last);