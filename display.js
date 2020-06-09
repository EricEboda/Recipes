
arrayOfRecipes = JSON.parse(localStorage.getItem("arrayOfRecipes"));

let indexNumber = JSON.parse(localStorage.getItem("indexNumber"));
document.getElementById("displayTitleBox").innerHTML = arrayOfRecipes[indexNumber].name;

let ingredientDisplay = arrayOfRecipes[indexNumber].ingredients;
for (var i = 0; i < ingredientDisplay.length; i++) {
    let displayCreateUnorderedList = document.createElement('li');
    document.getElementById('displayIngredientList').appendChild(displayCreateUnorderedList);
    
    displayCreateUnorderedList.innerHTML += arrayOfRecipes[indexNumber].ingredients[i];
}

let instructionDisplay = arrayOfRecipes[indexNumber].instructions;
for (var i = 0; i < instructionDisplay.length; i++) {
    let displayCreateUnorderedList = document.createElement('li');
    document.getElementById('displayInstructionList').appendChild(displayCreateUnorderedList);
    
    displayCreateUnorderedList.innerHTML += arrayOfRecipes[indexNumber].instructions[i];
}