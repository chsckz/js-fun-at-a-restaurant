function createRestaurant(restaurantName) {
  const newRestaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  };
  return newRestaurant;
}

function addMenuItem(restaurantName, addDish) {
  if (addDish.type == 'breakfast') {
    restaurantName.menus.breakfast.push(addDish);
  }
  if (addDish.type == 'lunch') {
    restaurantName.menus.lunch.push(addDish);
  }
  if (addDish.type == 'dinner') {
    restaurantName.menus.dinner.push(addDish);
}


module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}