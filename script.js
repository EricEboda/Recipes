function addTitle(title) {

  let titleHeading = document.getElementById('titleBox')

  titleHeading.textContent = title.value

  titleHeading.innerHTML


  return false;
}

function addIngredient(ingredient, quantity) {
  
  document.getElementById('ingredientBox').textContent='Ingredients:';

  let createUnorderedList = document.createElement('li');
  document.getElementById('ingredientList').appendChild(createUnorderedList);
  
  createUnorderedList.innerHTML += ingredient.value + ": " + quantity.value;

  return false;

}

function addInstruction(instruction, time) {

  document.getElementById('instructionBox').textContent='Instructions:';

  let createOrderedList = document.createElement('li');
  document.getElementById('instructionList').appendChild(createOrderedList);
  
  createOrderedList.innerHTML += instruction.value + "  " + time.value;

  return false;

}