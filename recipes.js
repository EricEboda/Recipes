var ingredientsArray = [];

var instructionsArray = [];

var arrayOfRecipes = [];

window.onload = function() {
  
  if (JSON.parse(localStorage.getItem("ingredientsArray")) != null)
  ingredientsArray = JSON.parse(localStorage.getItem("ingredientsArray"));

  if (JSON.parse(localStorage.getItem("instructionsArray")) != null)
  instructionsArray = JSON.parse(localStorage.getItem("instructionsArray"));

  if (JSON.parse(localStorage.getItem("arrayOfRecipes")) != null)
  arrayOfRecipes = JSON.parse(localStorage.getItem("arrayOfRecipes"));
  console.log(arrayOfRecipes);
  display();
};