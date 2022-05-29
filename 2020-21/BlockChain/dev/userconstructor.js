function User(firstname, lastname, age, gender) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.gender = gender;
}


User.prototype.emailDomain = '@facebook.com';
User.prototype.getEmailAddress = function() {
  return this.firstName + this.lastName + this.emailDomain
}

var user1 = new User('Osa', 'Meji', 200000000, 'female');

console.log(User.prototype.emailDomain);

console.log(user1.emailDomain);


console.log(user1);
console.log(user1.getEmailAddress());