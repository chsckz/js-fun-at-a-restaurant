function nameMenuItem(regularName) {
  return 'Delicious ' + regularName
}

function createMenuItem(foodToBeAdded) {
  return foodToBeAdded = {
    name: foodToBeAdded,
    price: '10.99',
    type: 'breakfast'
  }
}

function addIngredients(ingredientsToBeAdded, ingredients) {
  if (ingredients.includes(ingredientsToBeAdded)) {
    return;
  } else {
    ingredients.push(ingredientsToBeAdded);
  }
}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


