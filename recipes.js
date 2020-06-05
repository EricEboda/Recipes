const recipes = [];
  
  recipes.forEach(function(recipe) {
    console.log(recipe);
    $("#recipes").append(`<li class="list-group-item">${recipe.title}</li>`)


  })
