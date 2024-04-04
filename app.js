let jokes = document.getElementById("btn");
const dad_joke = document.getElementById("jokes");
const apiKey = "wDY2V+IQzpfxTGJk8FHvEg==t8x8t7ZqhhkQpahN";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
jokes.addEventListener("click", async function() {
    //offline pyit yin for error 
    //API doesn't work no internet
    try {
        //if click updating content
        dad_joke.innerHTML = "Updating....";
        jokes.disabled = true;
        jokes.innerHTML = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();

        jokes.disabled = false;
        jokes.innerHTML = "Tell Me A Joke";
        dad_joke.innerHTML = data[0].joke;
    } catch (error) {
        dad_joke.innerHTML = "an error happened,Try Again Later!!";
        jokes.disabled = false;
        jokes.innerHTML = "Tell Me A Joke";

    }



});