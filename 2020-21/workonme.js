const { map } = Functor;

Object.create(proto[, propertiesObject]);

const proto = {
	sender: 'la@lalala.com'
};

const child = Object.create(proto);
child.recipient = 'la@lalala.com';
child.sender = 'la@lalala.com';

const transaction = {
	sender: 'la@lalala.com',
};

const moneyTransaction = Object.create(transaction);

moneyTransaction.funds = 0.0;

moneyTransaction.addFunds = function addFunds(funds = 0) {
	this.funds += Number(funds);
}

Object.getPrototypeOf(moneyTransaction) === transaction; // true
