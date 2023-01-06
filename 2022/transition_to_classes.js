const log = console.log
const dir = console.dir

function User(username, email)
{
  this.username = username;
  this.email = email;
}

User.prototype.changeEmail = function(email) {
  this.email = email;
}

let user = new User("Tolu", "tolu@tolu.com");

user.changeEmail('tolu@example.com');

console.dir(user);

class UserClass {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  static register(...args) {
     return new User(...args);
  }
  
  get foo() {
    return 'foo';
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

// equiv to PHP User::register('asdf');
// $user = new User("Tolu");
// $user->changeEmail();

let userNew = UserClass.register("Toluwalase", "tolu@tolucasts.com")
log(userNew.foo);

function logger(strategy) {
  strategy.handle();
}

logger(new class {
  handle() {
    log('Using the alert strategy to logger.');
  }
})


// or 
// class Logger {
//    handle() {
//      log('Using the alert strategy to logger.');
//    }
// }
// log(new Logger);

