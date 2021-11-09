const searchForm = document.querySelector("#recipe-form");
const searchInput = document.querySelector("#recipe-search");
const recipeData = document.querySelector("#recipe-data");

searchForm.addEventListener("submit", (e) => {

  e.preventDefault();
  console.log("submitted");
  console.log(searchInput.value);
  let recipe = searchInput.value;
  fetchData(recipe);
});


async function fetchData(recipe) {
  const url = `https://api.edamam.com/search?app_id=9b02ade8&app_key=%20419e6ffc89c8212db39eb51d35469517&q=${recipe}`;
  //   // Write code here.
  try {
    const res = await axios.get(url);
    const recipeData = res.data;
    console.log(recipeData);
    showRecipeData(recipeData);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("dUn");
  }
}


function showRecipeData(data) {
  console.log(data)
  // creates the names for the recipes and appends it to the recipe container div
  const eachRecipe = document.createElement("div")
  eachRecipe.className = "each-recipe";


  const recipeImg = document.createElement("img")
  recipeImg.className = "recipe-image"
  recipeImg.src = data.hits[0].recipe.image;
  eachRecipe.appendChild(recipeImg);


  const infoRecipe = document.createElement("section")
  eachRecipe.appendChild(infoRecipe);
  recipeData.appendChild(eachRecipe);


  const recipeName = document.createElement("h2")
  recipeName.className = "recipe-label"
  recipeName.innerText = `${data.hits[0].recipe.label}`;
  infoRecipe.appendChild(recipeName);


  const recipeIngredients = document.createElement("li");
  recipeIngredients.className = "recipe-ingredients"
  recipeIngredients.innerText = data.hits[0].recipe.ingredientLines[0];
  infoRecipe.appendChild(recipeIngredients);


}

