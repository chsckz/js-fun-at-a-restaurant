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
  let breakfast = restaurantName.menus.breakfast;
  let lunch = restaurantName.menus.lunch;
  let dinner = restaurantName.menus.dinner;
  if (addDish.type == 'breakfast' && !breakfast.includes(addDish)) {
    breakfast.push(addDish);
  }
  if (addDish.type == 'lunch' && !lunch.includes(addDish)) {
    lunch.push(addDish);
  }
  if (addDish.type == 'dinner' && !dinner.includes(addDish)) {
    dinner.push(addDish);
  }
}


module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}