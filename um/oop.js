class Character
{
	constructor(name, weapon)
	{
		this.name = name;
		this.weapon = weapon;
	}
	attack()
	{
		return 'attack with ' + this.weapon
	}
}

class Elf extends Character
{
	constructor(name, weapon, type)
	{
		super(name, weapon)
		console.log('What am I?', this);
		this.type = type;
	}
}

class Orge extends Character 
{
	constructor(name, weapon, color)
	{
		super(name, weapon);
		this.color = color;
	}
}
