function User(name, passwordHash) {
  let self = this instanceof User 
  ? this
  : Object.create(User.prototype);
  self.name = name;
  self.passwordHash = passwordHash;
  return self;
}


if (typeof Object.create === 'undefined') {
  Object.create = function(prototype) {
    function C() {}
    C.prototype = prototype;
    return new C();
  }
}
