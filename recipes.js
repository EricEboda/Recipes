var recipes = [];

var fullRecipes = [];

window.onload = function() {
  if (JSON.parse(localStorage.getItem("recipes")) != null)
  recipes = JSON.parse(localStorage.getItem("recipes"));
  console.log(recipes);

  if (JSON.parse(localStorage.getItem("fullRecipes")) != null)
  fullRecipes = JSON.parse(localStorage.getItem("fullRecipes"));
  console.log(fullRecipes);
  display();
};