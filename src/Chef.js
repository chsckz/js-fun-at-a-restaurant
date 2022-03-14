class Chef {
  constructor(name, restaurant) {
  this.name = name;    
  this.restaurant = restaurant;
  };
  greetCustomer(name, morning) {
    if (morning == true) {
      return `Good morning, ${name}!`
    }
      return `Hello, ${name}!`
  };
  checkForFood(foodItem) {
    let b = this.restaurant.menus.breakfast;
    let l = this.restaurant.menus.lunch;
    let d = this.restaurant.menus.dinner;
    if (b.includes(foodItem) || l.includes(foodItem) || d.includes(foodItem)) {
      return `Yes, we're serving ${foodItem.name} today!`;
    } else {
      return `Sorry, we aren't serving ${foodItem.name} today.`
    }
  }
}

module.exports = Chef;