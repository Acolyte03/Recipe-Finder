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

// When search button clicked, new search saved to browser.
searchBtn.on("click", function(event)
{
    event.preventDefault();

    var newSearch = $(this).inputData.val();
    // var newDropdown = $(this).?;
    localStorage.setItem('search', JSON.stringify(newSearch));
    // localStorage.setItem(newSearch, ?);
});

var getSearch = localStorage.getItem('search');