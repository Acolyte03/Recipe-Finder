// Link API here, handle search results?
    // var url = <API>
    // fetch (url) {
    // method, cache, credentials, etc, if needed    
    //} .then (response)

    var dropdown = "";
    var foodUrl = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=6&q=';
    var foodOptions = 
    {
        method: 'GET',
        headers: 
        {
            'X-RapidAPI-Key': 'a4648e0474msh710bc51684197e7p129ccajsn9a00cae65197',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };
       function apiFoodSearch(event)
    {
        event.preventDefault();
        var foodQuery = document.querySelector("#query");
        var foodSearch = foodUrl.concat(foodQuery.value);
        fetch(foodSearch, foodOptions).then(function (response) 
        {
            return response.json()
        })
        .then(function(response)
        {
            // //build cards here
            for(i = 0; i < 6; i++)
            {
                
                

            }
            console.log(response);
            console.log(foodSearch);
        })
        .catch(function(error)
        {
            console.error(error);
        });
    } 
     foodInput.addEventListener('click', apiFoodSearch);

    var drinkUrl = 'https://the-cocktail-db.p.rapidapi.com/search.php?s=';
    var drinkOptions = 
    {
        method: 'GET',
        headers: 
        {
            'X-RapidAPI-Key': 'a4648e0474msh710bc51684197e7p129ccajsn9a00cae65197',
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
    };


    function apiDrinkSearch(event)
    {
        event.preventDefault();
        var drinkQuery = document.querySelector("#query");
        var drinkSearch = drinkUrl.concat(drinkQuery.value);
        if(dropdown == "Pair with Beverages")
    {
        fetch(drinkSearch, drinkOptions).then(function (response) 
        {
            return response.json()
        })
        .then(function(response)
        {
            // //build cards here
            // for(i = 0; i < 6; i++)
            // {
                
            // }
            console.log(response);
            console.log(drinkSearch);
        })
        .catch(function(error)
        {
            console.error(error);
        });
    
    
    
    }
    } 
    window.addEventListener("DOMContentLoaded", function() 
    { 
        // when the page has loaded the DOM elements 
        document.getElementById("dropdown").addEventListener("change", function() 
        { 
          dropdown = dropdown.concat(this.value);
        })
    });
    
    
    
    
    inputButton.addEventListener('click', apiDrinkSearch);