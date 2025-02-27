function nameMenuItem(regularName) {
  return 'Delicious ' + regularName
}

function createMenuItem(name, price, type) {
  return {
    name, 
    price, 
    type
  }
}

function addIngredients(ingredientsToBeAdded, ingredients) {
  if (ingredients.includes(ingredientsToBeAdded)) {
    return;
  } else {
    ingredients.push(ingredientsToBeAdded);
  }
}

function formatPrice(price) {
  return '$' + price;
}

function decreasePrice(price) {
  return price * .9;
}

function createRecipe(title, ingredients, type){
  return {
    title,
    ingredients,
    type
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


