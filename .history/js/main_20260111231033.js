//Target the buttons to populate API quotes with
const quoteText = document.getElementById("quote-content");
const quoteAuthorId = document.querySelector(".quote-author");
const newQuote = document.getElementById("new-quote");

//Create an async function to fetch API
async function fetchQuote() {
  //Use a try block to try if action will be perfomed
  try {
    //wait for the api to be fetched
    const apiResponse = await fetch("https://dummyjson.com/quotes/random");
    //wait for the data to be converted from a JSON to a javascript file
    const apiData = await apiResponse.json();

    quoteText.textContent = apiData.quote;
    quoteAuthorId.textContent = apiData.author;

    console.log(apiData);
  } catch (error) {
    console.error(error);
  }
}

fetchQuote();
