var recipes = [];

window.onload = function() {
  if (JSON.parse(localStorage.getItem("recipes")) != null)
    recipes = JSON.parse(localStorage.getItem("recipes"));
  console.log(recipes);
  display();
};