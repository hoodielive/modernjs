class User 
{
	constructor(name, isAdmin)
	{
		this.name = name; 
		this.isAdmin = isAdmin;
	}
}

let users = [
	new User("Osa", false),
	new User("Ose", false), 
	new User("Iwori", false),
];

console.log(
	users.find(user => user.isAdmin).name
)

[].fill()
[].keys()
[].values()
[].entries()
