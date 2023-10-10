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
    var foodName = "";
    var foodDescription = "";
    var foodLink = "https://tasty.co/search?q=";
    var foodImg = "";
       function apiFoodSearch(event)
    {
        event.preventDefault();
        var foodQuery = document.querySelector("#foodQuery");
        var foodSearch = foodUrl.concat(foodQuery.value);
        fetch(foodSearch, foodOptions).then(function (response) 
        {
            console.log(foodSearch);
            return response.json()
            
        })
        .then(data => 
        {
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
            console.log(data);
        })
        .catch(function(error)
        {
            console.log(error);
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

var drinkName = "";
var description = "";
var drinkLink = "https://www.thecocktaildb.com/drink/";
var drinkImg = "";
    function apiDrinkSearch(event)
    {
        event.preventDefault();
        var drinkQuery = document.querySelector("#drinkQuery");
        var drinkSearch = drinkUrl.concat(drinkQuery.value);
        if(dropdown == "Drink")
    {
        console.log("Hi");
        fetch(drinkSearch, drinkOptions).then(function (response) 
        {
            return response.json()
            .then(data => 
                {
                    console.log(data);
                    // name = data.name;
                    // //build cards here
                    for(i = 0; i < 6; i++)
                    {
                        description = data.drinks[i].strInstructions;
                        drinkName = data.drinks[i].strDrink;
                        drinkLink = drinkLink.concat(data.drinks[i].idDrink);
                        drinkImg = data.drinks[i].strDrinkThumb;
                        console.log(drinkLink);
                        // drinkLink = data.drinks[i].
                        $("#c" + i + "header").text(drinkName);
                        $("#c" + i + "Description").text(description);
                        var a = document.getElementById("link" + i);
                        a.href = drinkLink;
                        var dImg = document.getElementById("img" + i);
                        dImg.src = drinkImg;
                    }
                    
                    console.log(description);
                    // return description;
                    
                })
        })
        // .then(function(response)
        // {
        //     console.log(description);
        //     //build cards here
        //     for(i = 0; i < 6; i++)
        //     {
        //         $("#c1Description").text(description);
        //     }
        //     console.log(response);
        //     console.log(drinkSearch);
        // })
        .catch(function(error)
        {
            console.log(error);
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