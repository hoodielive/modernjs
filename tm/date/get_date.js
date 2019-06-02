function getDate() {
  var date = new Date()
  function formatDate() {
    return console.log(date.toDateString().slice(4))
  }
  return console.log(formatDate())
}
getDate(); 


function discountedPrices(prices, discount) {
  var discounted = []
  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount) 
    var finalPrice = Math.round(discountedPrice * 100) / 100
  }
  console.log(i)
  console.log(discountedPrices())
  console.log(finalPrice)
  return console.log(discounted)
}

discountedPrices([100,200,300], .5)
