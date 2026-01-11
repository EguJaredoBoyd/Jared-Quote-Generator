//Target the buttons to populate API quotes with
const quoteText = document.getElementById("quote-content");
const quoteAuthorId = document.getElementById("quote-author-Id");
const newQuote = document.getElementById("new-quote");

//Create an async function to fetch API
async function fetchQuote() {
  //wait for the api to be fetched
  const apiResponse = await fetch(
    "https://programming-quotesapi.vercel.app/api/random"
  );
  //wait for the data to be converted from a JSON to a javascript file
  const apiData = await apiResponse.json();

  console.log(apiData);
}

fetchQuote;
