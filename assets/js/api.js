//----------------------------------Start of JS file----------------------------------
// Variables for 'dropdown' menu value, API url.
var dropdown = "";
var foodUrl = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=6&q=';
// Variable for fetching 'foodOptions' from food API; uses API key and host name.
var foodOptions = 
{
    method: 'GET',
    headers: 
    {
        'X-RapidAPI-Key': 'a4648e0474msh710bc51684197e7p129ccajsn9a00cae65197',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};
// Variables for user input, description of food, food API link, and food image.
var foodName = "";
var foodDescription = "";
var foodLink = "https://tasty.co/search?q=";
var foodImg = "";
// When user searches for a kind of food, the function goes through food API ("tasty.co") in order to access information.
function apiFoodSearch(event)
{
    event.preventDefault();
    var foodQuery = document.querySelector("#foodQuery");
    var foodSearch = foodUrl.concat(foodQuery.value);
    fetch(foodSearch, foodOptions).then(function (response) 
    {
        return response.json()
    })
    .then(data => 
    {
        // After receiving response, all food information is displayed to six cards.
        // Name, recipe link, description, image.
        for(i = 0; i < 6; i++)
        {
            foodDescription = data.results[i].description;
            foodName = data.results[i].name;
            foodImg = data.results[i].thumbnail_url;

            foodLink = foodLink.concat(data.results[i].id);

            $("#c" + i + "header").text(foodName);
            $("#c" + i + "Description").text(foodDescription);

            var ab = document.getElementById("link" + i);
            ab.href = foodLink;
            var fImg = document.getElementById("img" + i);
            fImg.src = foodImg;
        }
    })
    .catch(function(error)
    {
        // Catches error if searched food item does not exist/was entered wrong.
        console.log(error);
    });
} 

var drinkUrl = 'https://the-cocktail-db.p.rapidapi.com/search.php?s=';
// Variable for fetching 'drinkOptions' from drink API; uses API key and host name.
var drinkOptions = 
{
    method: 'GET',
    headers: 
    {
        'X-RapidAPI-Key': 'a4648e0474msh710bc51684197e7p129ccajsn9a00cae65197',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
};
// Variables for user input, description of drink, drink API link, and drink image.
var drinkName = "";
var description = "";
var drinkLink = "https://www.thecocktaildb.com/drink/";
var drinkImg = "";
// When user searches for a kind of drink, the function goes through drink API ("thecocktaildb.com") in order to access information.
function apiDrinkSearch(event)
{
    event.preventDefault();
    var drinkQuery = document.querySelector("#drinkQuery");
    var drinkSearch = drinkUrl.concat(drinkQuery.value);
    if(dropdown == "Drink")
    {
        fetch(drinkSearch, drinkOptions).then(function (response) 
        {
            return response.json()
            .then(data => 
            {
                // After receiving response, all drink information is displayed to six cards.
                // Name, recipe link, description, image.
                for(i = 0; i < 6; i++)
                {
                    description = data.drinks[i].strInstructions;
                    drinkName = data.drinks[i].strDrink;
                    drinkLink = drinkLink.concat(data.drinks[i].idDrink);
                    drinkImg = data.drinks[i].strDrinkThumb;

                    $("#c" + i + "header").text(drinkName);
                    $("#c" + i + "Description").text(description);

                    var a = document.getElementById("link" + i);
                    a.href = drinkLink;
                    var dImg = document.getElementById("img" + i);
                    dImg.src = drinkImg;
                }
            })
        })
        .catch(function(error)
        {
            // Catches error if searched drink item does not exist/was entered wrong.
            console.log(error);
        });
    }
} 
// On window load, gets food and drink info from dropdown menu.
window.addEventListener("DOMContentLoaded", function() 
{
    document.getElementById("dropdown").addEventListener("change", function() 
    { 
        dropdown = dropdown.concat(this.value);
    })
});

// The event listeners for the food and drink search buttons.
inputButton.addEventListener('click', apiDrinkSearch);
foodInput.addEventListener('click', apiFoodSearch);
  //----------------------------------End of JS file----------------------------------