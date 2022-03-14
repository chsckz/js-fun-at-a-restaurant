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

function removeMenuItem(restaurantName, removeDish, mealType) {
  let breakfast = restaurantName.menus.breakfast;
  let lunch = restaurantName.menus.lunch;
  let dinner = restaurantName.menus.dinner;
  if (mealType.toLowerCase() == 'breakfast') {
    for (i = 0; i < breakfast.length; i++) {
      if (removeDish == breakfast[i].name) {
        breakfast.splice(i, 1);
        return `No one is eating our ${removeDish} - it has been removed from the ${mealType} menu!`;
      }
    }
  };
  if (mealType.toLowerCase() == 'lunch') {
    for (i = 0; i < lunch.length; i++) {
      if (removeDish == lunch[i].name) {
        lunch.splice(i, 1);
        return `No one is eating our ${removeDish} - it has been removed from the ${mealType} menu!`;
      }
    }
  };
  if (mealType.toLowerCase() == 'dinner') {
    for (i = 0; i < dinner.length; i++) {
      if (removeDish == dinner[i].name) {
        dinner.splice(i, 1);
        return `No one is eating our ${removeDish} - it has been removed from the ${mealType} menu!`;
      }
    }
  } else {
    return `Sorry, we don't sell ${removeDish}, try adding a new recipe!`
  };
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}