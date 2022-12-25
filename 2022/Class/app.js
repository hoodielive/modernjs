'use strict';

class Item
{
  constructor(name, category)
  {
    this.name = name;
    this.category = category;
  }

  static maxItems = 10;
  
  getDetails()
  {
    return `${this.name} - ${this.category}`;
  }
}

class PurchasedItem extends Item
{
  constructor(name, category, price) 
  {
    super(name, category);
    this.price = price;
  }

  getDetailsWithPrice()
  {
    return `${this.name} - ${this.category} - ${this.price}`;
  }

  static getNumberOfItems()
  {
    return `3 / ${super.maxItems}`;
  }
}

let purchasedItem = new PurchasedItem("Coffee", "Food", '2.49');

let item = new Item('Beer', 'Burgers');

document.getElementById('output2').innerHTML = item.getDetails();

document.getElementById('output').innerHTML = PurchasedItem.getNumberOfItems();
