// On window load, gets food and drink last searched
$(window).on("load", function() {
    getLocalFoodStorage();
    getLocalDrinkStorage();
});

// Variables for input data and search button
var foodBtn = $(".foodBtn");
var drinkBtn = $(".drinkBtn");
var valuePassed;

// When search button clicked, new food search saved to browser and appended to search history.
foodBtn.on("click", function(event)
{
    event.preventDefault();
    var foodData = document.querySelector("#foodQuery").value;

    setLocalFoodStorage(foodData);
    appendFoodHistory(foodData);
});

// When search button clicked, new drink search saved to browser and appended to search history.
drinkBtn.on("click", function(event)
{
    event.preventDefault();
    var drinkData = document.querySelector("#drinkQuery").value;

    setLocalDrinkStorage(drinkData);
    appendDrinkHistory(drinkData);
});

// Appends the food search history to the sidebar, under the search bar.
function appendFoodHistory(valuePassed)
{
    //
    var liNew = $("<li>");
    var buttonNew = $("<button>");

    buttonNew.attr('id', 'listBtn');
    buttonNew.addClass("button is-info");
    buttonNew.text(valuePassed);

    liNew.append(buttonNew);
    $(".search-history").prepend(liNew);

    $("#listBtn").on("click", function(event)
    {
        event.preventDefault();

        var retrieveValue = $(this).text();
        setLocalFoodStorage(retrieveValue);
    })

}

// Appends the drink search history to the sidebar, under the search bar.
function appendDrinkHistory(valuePassed)
{  
    var liNew = $("<li>");
    var buttonNew = $("<button>");

    buttonNew.attr('id', 'listBtn');
    buttonNew.addClass("button is-info");
    buttonNew.text(valuePassed);

    liNew.append(buttonNew);
    $(".search-history").prepend(liNew);

    $("#listBtn").on("click", function(event)
    {
        event.preventDefault();

        var retrieveValue = $(this).text();
        setLocalDrinkStorage(retrieveValue);
    })

}

// Gets local storage of food.
function getLocalFoodStorage()
{ 
    //var savedFood = JSON.parse(localStorage.getItem("food"));
    var savedFood = localStorage.getItem("food");
    var saveArr = [];

    //savedFood.trim();
    saveArr.join(savedFood);
    saveArr = savedFood.split(',');

    for (var i = 0; i < saveArr.length; i++)
    {
        appendFoodHistory(saveArr[i]);
    }
}

// Gets local storage of drink.
function getLocalDrinkStorage()
{
    //var savedDrink = JSON.parse(localStorage.getItem("drink"));
    var savedDrink = localStorage.getItem("drink");
    var saveArr = [];

    //savedDrink.trim();
    saveArr.join(savedDrink);
    saveArr = savedDrink.split(',');

    for (var i = 0; i < saveArr.length; i++)
    {
        appendDrinkHistory(saveArr[i]);
    }
}

// Sets local storage of food.
function setLocalFoodStorage(valuePassed)
{
    var info = localStorage.getItem("food");

    var foodSearch = [];
    foodSearch.push(info);
    localStorage.setItem("food", JSON.stringify(foodSearch));
    console.log(foodSearch + " saved.");

    info = valuePassed;
    localStorage.setItem("food", info);

    if (info.indexOf(valuePassed) === -1)
    {
        info = info + ',' + valuePassed;
        localStorage.setItem("food", info);
        appendFoodHistory(valuePassed);
    }
}
 // Sets local storage of drink.
function setLocalDrinkStorage(valuePassed)
{
    var info = localStorage.getItem("drink");

    var drinkSearch = [];
    drinkSearch.push(info);
    localStorage.setItem("drink", JSON.stringify(drinkSearch));
    console.log(drinkSearch + " saved.");

    info = valuePassed;
    localStorage.setItem("drink", info);

    if (info.indexOf(valuePassed) === -1)
    {
        info = info + ',' + valuePassed;
        localStorage.setItem("drink", info);
        appendDrinkHistory(valuePassed);
    }
}

// Clears search history with 'clear history' button
document.querySelector(".clearBtn").addEventListener("click", function () {
    localStorage.removeItem("food");
    localStorage.removeItem("drink");
    document.querySelector(".search-history").innerHTML = "";
    console.log("History cleared.");
  });