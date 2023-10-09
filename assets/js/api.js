// Link API here, handle search results?
    // var url = <API>
    // fetch (url) {
    // method, cache, credentials, etc, if needed    
    //} .then (response)

    
    var url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=6&q=';
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a4648e0474msh710bc51684197e7p129ccajsn9a00cae65197',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };
       function apiSearch(event)
    {
        event.preventDefault();
        var query = document.querySelector("#query");
        var search = url.concat(query.value);
        fetch(search, options).then(function (response) 
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
            console.log(search);
        })
        .catch(function(error)
        {
            console.error(error);
        });
    } 
     inputButton.addEventListener('click', apiSearch);