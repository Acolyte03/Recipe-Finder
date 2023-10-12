//----------------------------------Start of JS file----------------------------------
// On window load, gets food and drink last searched.
$(window).on("load", function() {
    getLocalFoodStorage();
    getLocalDrinkStorage();
});

// Variables for food and drink search buttons, and input data.
var foodBtn = $(".foodBtn");
var drinkBtn = $(".drinkBtn");
var valuePassed;

// When search button clicked, new food search saved to browser and appended to search history.
foodBtn.on("click", function(event)
{   
    // Prevents page refresh; foodData taken from the input in food search bar.
    event.preventDefault();
    var foodData = document.querySelector("#foodQuery").value;
    // Sets local storage of food input, and appends it to search history.
    setLocalFoodStorage(foodData);
    appendFoodHistory(foodData);
});

// When search button clicked, new drink search saved to browser and appended to search history.
drinkBtn.on("click", function(event)
{
    // Prevents page refresh; drinkData taken from the input in drink search bar.
    event.preventDefault();
    var drinkData = document.querySelector("#drinkQuery").value;
    // Sets local storage of drink input, and appends it to search history.
    setLocalDrinkStorage(drinkData);
    appendDrinkHistory(drinkData);
});

// Appends the food search history to the sidebar, next to the 'clear history' button.
function appendFoodHistory(valuePassed)
{
    // Creating list items with clickable buttons.
    var liNew = $("<li>");
    var buttonNew = $("<button>");
    // Adding 'listbtn' ID and 'button is-info' class with food name attached.
    buttonNew.attr('id', 'listBtn');
    buttonNew.addClass("button is-info");
    buttonNew.text(valuePassed);
    // Appends button to created <li>. Prepends <li> to 'search-history' class.
    liNew.append(buttonNew);
    $(".search-history").prepend(liNew);
    // When search history clicked, retrieves food values and sets in local storage.
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
    // Creating list items with clickable buttons.
    var liNew = $("<li>");
    var buttonNew = $("<button>");
    // Adding 'listbtn' ID and 'button is-info' class with drink name attached.
    buttonNew.attr('id', 'listBtn');
    buttonNew.addClass("button is-info");
    buttonNew.text(valuePassed);
    // Appends button to created <li>. Prepends <li> to 'search-history' class.
    liNew.append(buttonNew);
    $(".search-history").prepend(liNew);
    // When search history clicked, retrieves drink values and sets in local storage.
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
    // 'savedFood' gets from local storage.
    //[var savedFood = JSON.parse(localStorage.getItem("food"));]
    var savedFood = localStorage.getItem("food");
    var saveArr = [];
    // Join local storage value to new array, split string into substrings.
    //[savedFood.trim();]
    saveArr.join(savedFood);
    saveArr = savedFood.split(',');
    // Loops saved values into search history.
    for (var i = 0; i < saveArr.length; i++)
    {
        appendFoodHistory(saveArr[i]);
    }
}

// Gets local storage of drink.
function getLocalDrinkStorage()
{
    // 'savedDrink' gets from local storage.
    //[var savedDrink = JSON.parse(localStorage.getItem("drink"));]
    var savedDrink = localStorage.getItem("drink");
    var saveArr = [];
    // Join local storage value to new array, split string into substrings.
    //[savedDrink.trim();]
    saveArr.join(savedDrink);
    saveArr = savedDrink.split(',');
    // Loops saved values into search history.
    for (var i = 0; i < saveArr.length; i++)
    {
        appendDrinkHistory(saveArr[i]);
    }
}

// Sets local storage of food.
function setLocalFoodStorage(valuePassed)
{
    // Gets value from local storage.
    var info = localStorage.getItem("food");
    // Push local storage value into array, set key + stringify values.
    var foodSearch = [];
    foodSearch.push(info);
    localStorage.setItem("food", JSON.stringify(foodSearch));
    console.log(foodSearch + " saved.");
    // Set local storage.
    info = valuePassed;
    localStorage.setItem("food", info);
    // If array is empty, sets item values and appends to search history.
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
    // Gets value from local storage.
    var info = localStorage.getItem("drink");
    // Push local storage value into array, set key + stringify values.
    var drinkSearch = [];
    drinkSearch.push(info);
    localStorage.setItem("drink", JSON.stringify(drinkSearch));
    console.log(drinkSearch + " saved.");
    // Set local storage.
    info = valuePassed;
    localStorage.setItem("drink", info);
    // If array is empty, sets item values and appends to search history.
    if (info.indexOf(valuePassed) === -1)
    {
        info = info + ',' + valuePassed;
        localStorage.setItem("drink", info);
        appendDrinkHistory(valuePassed);
    }
}

// Clears search history with 'clear history' button, sets 'search history' values to empty.
document.querySelector(".clearBtn").addEventListener("click", function () {
    localStorage.removeItem("food");
    localStorage.removeItem("drink");
    document.querySelector(".search-history").innerHTML = "";
    console.log("History cleared.");
  });
  //----------------------------------End of JS file----------------------------------