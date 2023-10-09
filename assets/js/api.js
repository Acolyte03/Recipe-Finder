// Link API here, handle search results?
    // var url = <API>
    // fetch (url) {
    // method, cache, credentials, etc, if needed    
    //} .then (response)

    var url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=6&tags=under_30_minutes';
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a4648e0474msh710bc51684197e7p129ccajsn9a00cae65197',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };
    fetch(url, options).then(function (response) 
    {
        return response.json()
    })
    .then(function(response)
    {
        //build cards here
        console.log(response);
    })
    .catch(function(error)
    {
        console.error(error);
    });
