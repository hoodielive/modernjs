const log = console.dir

class User
{
  constructor(username, isAdmin, email)
  {
    this.username = username;
    this.isAdmin = isAdmin;
    this._email = email;
  }

  static register(...args)
  {
    return new User(...args);
  }

  changeEmail(newEmail)
  {
    this._email = newEmail; 
    return newEmail;
  }


  returnNewEmail()
  {
    return this._email;
  }
}

let user = new User("Osa'Brecha", "osa@beech.com")

user.changeEmail("Toluwarrior@oyekuose.com");

log(user.returnNewEmail())

let users = [
  new User('Osa', false, "polio@osa.com"),
  new User('Ose', true, "polio@ose.com"),
  new User('Odi', true, "polio@odi.com"),
  new User('Owonrin', false, "polio@owonrin.com"),
];

log(
  users.find(auser => auser.isAdmin).username
)


let items = ['Owonrin', 'Osa', 'Oyeku'].entries()

for (let name of items) log(name);
