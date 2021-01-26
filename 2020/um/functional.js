const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: []
}

const compose = (f, g) => (...args) => f(g(..args));

function purchaseItem(..fns)
{
	return fns.reduce(compose)
}

purchaseItem (
	emptyCart, 
	buyItem, 
	applyTaxToItems,
	addItemToCart
) (user, {name: 'laptop'})

function addItemToCart(user, item)
{
	amazonHistory.push(user)
	const updateCart = user.cart.concat(item)
	return Object.assign({}, user, { cart: updateCart })
}
