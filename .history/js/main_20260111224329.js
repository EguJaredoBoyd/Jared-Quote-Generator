//Target the buttons to populate API quotes with
const quoteText = document.getElementById("quote-content");
const quoteAuthorId = document.getElementById("quote-author-Id");
const newQuote = document.getElementById("new-quote");

//Create an async function to fetch API
async function fetchQuote() {
  //Use a try block to try if action will be perfomed
  try {
    //wait for the api to be fetched
    const apiResponse = await fetch("https://api.quotable.io/random");
    //wait for the data to be converted from a JSON to a javascript file
    const apiData = await apiResponse.json();

    console.log(apiData);
  } catch (error) {
    console.log(error);
  }
}

fetchQuote();
