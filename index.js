function saveRecipe() {
  
    if (document.querySelector(".addTitle").value.trim() != "") {
      recipes.push(document.querySelector(".addTitle").value.trim());
      localStorage.setItem("recipes", JSON.stringify(recipes));

      localStorage.setItem("fullRecipes", JSON.stringify(fullRecipes));

      alert("Your recipe has been saved.");


      display();

    } else {
      alert("You must assign a title before saving the recipe.");
    }
}

function display() {
  document.querySelector(".recipeList").innerHTML = "";
  for (var i = 0; i < recipes.length; i++)
    document.querySelector(".recipeList").innerHTML += "<center><div class='element'>" + recipes[i] + "<button class='cookButton btn btn-primary'>Start Cooking</button><img src='images/bin.png' class='dustbin' onclick='del(" + i + ")'></div></center>";
}

function del(index){
  recipes.splice(index, 1);

  fullRecipes.splice(index, 1);

  localStorage.setItem("recipes", JSON.stringify(recipes));

  localStorage.setItem("fullRecipes", JSON.stringify(fullRecipes));
  
  display();
}

function getVal() {
  var x = document.getElementById("title.value");
  document.getElementById("titleBox").innerHTML = x.value
}

function addIngredient(ingredient, quantity, measure) {

  document.getElementById('ingredientBox').textContent='Ingredients:';

  let createUnorderedList = document.createElement('li');
  document.getElementById('ingredientList').appendChild(createUnorderedList);
  
  createUnorderedList.innerHTML += ingredient.value + ": " + quantity.value + " " + measure.value;

  //Saves ingredient as an array
  if (ingredient.value + quantity.value + measure.value != "") {
  fullRecipes.push(ingredient.value + ": " + quantity.value + " " + measure.value);
  }

  console.log(fullRecipes);

  return false;

}

function addInstruction(instruction, time) {

  document.getElementById('instructionBox').textContent='Instructions:';

  let createOrderedList = document.createElement('li');
  document.getElementById('instructionList').appendChild(createOrderedList);
  
  createOrderedList.innerHTML += instruction.value + "  " + time.value;

  console.log(time.value);

  return false;

}