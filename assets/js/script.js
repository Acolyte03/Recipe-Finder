$(window).on("load", function() {
    getLocalFoodStorage();
    getLocalDrinkStorage();
});

// Variables for input data and search button
var foodBtn = $(".foodBtn");
var drinkBtn = $(".Btn");
var valuePassed = "";
//var fullArr = [];

// When search button clicked, new food search saved to browser.
foodBtn.on("click", function(event)
{
    event.preventDefault();
    var foodData = document.querySelector("#foodQuery").value;

    setLocalFoodStorage(foodData);
    appendFoodHistory(foodData);
});

// When search button clicked, new drink search saved to browser.
drinkBtn.on("click", function(event)
{
    event.preventDefault();
    var drinkData = document.querySelector("#drinkQuery").value;

    setLocalDrinkStorage(drinkData);
    appendDrinkHistory(drinkData);
});

// Appends the search history to the sidebar, under the search bar
function appendFoodHistory(valuePassed)
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
        setLocalFoodStorage(retrieveValue);
    })

}

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

function getLocalFoodStorage()
{ 
    //var savedFood = JSON.parse(localStorage.getItem("food"));
    var savedFood = localStorage.getItem("food");
    var saveArr = [];

    savedFood.trim();
    saveArr = savedFood.split(',');

    for (var i = 0; i < saveArr.length; i++)
    {
        appendFoodHistory(saveArr[i]);
    }
}

function getLocalDrinkStorage()
{
    //var savedDrink = JSON.parse(localStorage.getItem("drink"));
    var savedDrink = localStorage.getItem("drink");
    var saveArr = [];

    savedDrink.trim();
    saveArr = savedDrink.split(',');

    for (var i = 0; i < saveArr.length; i++)
    {
        appendDrinkHistory(saveArr[i]);
    }
}

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

// // Removes search history if desired; need to implement a button of some kind
function removeSearchHistory()
{
    $(".clearBtn").on("click", function()
    {
        //event.preventDefault();
        localStorage.remove("food");
        localStorage.remove("drink");
        // remove <li> and <buttons> ?
    })
}
// and run function, probably through a single 'clear all' button.