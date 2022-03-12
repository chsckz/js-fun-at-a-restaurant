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



module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


