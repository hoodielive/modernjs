const log = console.log

function User(name, passwordHash) {
  if (!(this instanceof User)) {
    return new User(name, passwordHash)
  }
  this.name = name;
  this.passwordHash = passwordHash;
}


let x = new User('Lawrence', 'dsbafd8483948938493849384934893849');
let y = User('Osa', 'dfdjfskd89893829845924829842948');

log(x);
log(y);
log(x instanceof User);
log(y instanceof User);

