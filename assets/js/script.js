// Handle general structure and changes to the webpage?
// Such as: images flexboxin' if screen size changes,
// functions to do... actions.
// Maybe to append searches to the left side of the page,
// which would have to deal with localStorage too.

// Handle local storage here?
// localStorage.getItem/setItem

// Variables for input data and search button
var foodBtn = $(".foodBtn");
var drinkBtn = $(".drinkBtn");


// When search button clicked, new search saved to browser.
foodBtn.on("click", function(event)
{
    event.preventDefault();
    var foodData = document.querySelector("#query").value;
    // foodData = "";

    var foodSearch = [];
    foodSearch.push(foodData);
    localStorage.setItem('food', JSON.stringify(foodSearch));
    console.log(foodSearch + " saved.");
});

drinkBtn.on("click", function(event)
{
    event.preventDefault();
    var drinkData = document.querySelector("#Dquery").value;
    // drinkData = "";

    var drinkSearch = [];
    drinkSearch.push(drinkData);
    localStorage.setItem('drink', JSON.stringify(drinkSearch));
    console.log(drinkSearch + " saved.");
});

// Appends the search history to the sidebar, under the search bar (but not yet...)
// function appendSearchHistory()
// {
    var foodSearched = JSON.parse(localStorage.getItem("food"));
    var drinkSearched = JSON.parse(localStorage.getItem("drink"));
    
//     for (var i = 0; i < userSearched.food.length; i++)
//     {
//         var newList = document.createElement("ul");
//         newList.innerText = userSearched.food[i];
//         // class.appendChild(newList);
//         // class being, whatever in index.html the 'search history' list will be called
//     }

// }
// Run append.
// appendSearchHistory();

// // Removes search history if desired; need to implement a button of some kind
// function removeSearchHistory()
// {
//     // either a button near the bottom, or on each <li> item
//     // otherwise, the code below just clears out the entire history
//     localStorage.clear();
// }
// and run function, probably through a single 'clear all' button.