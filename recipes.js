const recipes = [
    {
      title: "mac n cheese",
      ingredients: ["cheese", "macaroni"],
      instructions: ["cook", "heat-up"]
    },
    {
        title: "Spaghetti",
        ingredients: ["pasta", "water"],
        instructions: ["cook", "boil"]
    }
  ]
  
  recipes.forEach(function(recipe) {
    console.log(recipe);
    $("#recipes").append(`<li class="list-group-item">${recipe.title}</li>`)


  })
