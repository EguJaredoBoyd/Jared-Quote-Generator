//Target the buttons to populate API quotes with
//Use the already quoteContent global variable in copy.js
let quoteAuthor = document.getElementById("quote-author");
const newQuote = document.getElementById("new-quote");

//Create an async function to fetch API
async function fetchQuote() {
  //wait for the api to be fetched
  const apiResponse = await fetch("https://zenquotes.io/api/random");
  //wait for the data to be converted from a JSON to a javascript file
  const apiData = await apiResponse.json();

  console.log(apiData);
}

fetchQuote();
