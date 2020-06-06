const recipes = [];

window.onload = function() {
  if (JSON.parse(localStorage.getItem("recipes")) != null)
    recipes = JSON.parse(localStorage.getItem("recipes"));
  console.log(recipes);
  display();
};

function saveRecipe() {
  
  if (document.querySelector(".addTitle").value.trim() != "") {
    recipes.push(document.querySelector(".addTitle").value.trim());
    if(localStorage.getItem("recipes") == null) {
      localStorage.setItem("recipes", JSON.stringify(recipes));
    } else {
      localStorage.setItem("recipes", JSON.stringify(recipes));
    }
    display();
  }
}

function display() {
  document.querySelector(".recipeList").innerHTML = "";
  for (var i = 0; i < recipes.length; i++)
    document.querySelector(".recipeList").innerHTML += "<center><div class='element'>" + recipes[i] + "<button class='cookButton btn btn-primary'>Start Cooking</button><img src='images/bin.png' class='dustbin' onclick='del(" + i + ")'></div></center>";
}

function del(index){
  recipes.splice(index, 1);
  if (localStorage.getItem("recipes") == null) {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  } else {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }
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