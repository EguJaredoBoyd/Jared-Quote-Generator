//Target the buttons to populate API quotes with
const quoteContent = document.getElementById("quote-content");
const quoteAuthor = document.getElementById("quote-author");
const newQuote = document.getElementById("new-quote");

//Create an async function to fetch API
async function fetchQuote() {
  fetch("https://zenquotes.io/api/random");
}
