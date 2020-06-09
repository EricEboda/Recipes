class RecipeClass {
  constructor (name, ingredients, instructions) {
    this.name = name
    this.ingredients = ingredients
    this.instructions = instructions
  }
}

function saveRecipe(name, ingredients, instructions) {
  
    if (document.querySelector(".addTitle").value.trim() != "") {
      name = document.querySelector(".addTitle").value.trim();
      ingredients = ingredientsArray;
      instructions = instructionsArray;

      arrayOfRecipes.push(new RecipeClass(name, ingredients, instructions))

      localStorage.setItem("arrayOfRecipes", JSON.stringify(arrayOfRecipes));

      alert("Your recipe has been saved.");

      console.log("Here is the recipe you just made: ")
      console.log(arrayOfRecipes);


      display();

    } else {
      alert("You must assign a title before saving the recipe.");
    }
}

function display() {
  document.querySelector(".recipeList").innerHTML = "";
  for (var i = 0; i < arrayOfRecipes.length; i++)
    document.querySelector(".recipeList").innerHTML += "<center><div class='element'>" + arrayOfRecipes[i].name + "<button onclick='buttonDirect(" + i + ")' class='cookButton btn btn-primary'>Start Cooking</button><img src='images/bin.png' class='dustbin' onclick='del(" + i + ")'></div></center>";
}

function buttonDirect(indexNum) {
  window.location.href = "/display.html";
  localStorage.setItem("indexNumber", JSON.stringify(indexNum));
}

function del(index){

  arrayOfRecipes.splice(index, 1);

  localStorage.setItem("arrayOfRecipes", JSON.stringify(arrayOfRecipes));

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
  ingredientsArray.push(ingredient.value + ": " + quantity.value + " " + measure.value);
  }

  console.log(ingredientsArray);

  return false;

}

function addInstruction(instruction, time) {

  document.getElementById('instructionBox').textContent='Instructions:';

  let createOrderedList = document.createElement('li');
  document.getElementById('instructionList').appendChild(createOrderedList);
  
  createOrderedList.innerHTML += instruction.value + "  " + time.value;

  if (instruction.value + time.value != "") {
    instructionsArray.push(instruction.value + " " + time.value);
    }
  
    console.log(instructionsArray);

  return false;

}