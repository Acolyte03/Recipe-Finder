// Handle general structure and changes to the webpage?
// Such as: images flexboxin' if screen size changes,
// functions to do... actions.
// Maybe to append searches to the left side of the page,
// which would have to deal with localStorage too.

// Handle local storage here?
// localStorage.getItem/setItem

// Variables for input data and search button
var inputData = $("inputButton");
var searchBtn = $("Btn");
var foodSearched = {food: []};
// var ID of list to append = $("listID"); or $("ul")?

// When search button clicked, new search saved to browser.
searchBtn.on("click", function(event)
{
    event.preventDefault();

    var newSearch = $(this).inputData.val();
    // var newDropdown = $(this).?;
    foodSearched.food.push(newSearch);
    localStorage.setItem('search', JSON.stringify(foodSearched));
    // localStorage.setItem(newSearch, ?);
});

function appendSearchHistory()
{
    foodSearched = JSON.parse(localStorage.getItem('search'));
    
    for (var i = 0; i < foodSearched.length; i++)
    {
        var newList = document.createElement("ul");
        newList.innerText = foodSearched[i];
        // class.appendChild(newList);
        // class being, whatever in index.html the 'search history' list will be called
    }

}

appendSearchHistory();