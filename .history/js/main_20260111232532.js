//Target the buttons to populate API quotes with
const quoteText = document.getElementById("quote-content");
const quoteAuthorId = document.getElementById("quote-author-id");
const newQuote = document.getElementById("new-quote");

//Create an async function to fetch API
async function fetchQuote() {
  //Use a try block to try if action will be perfomed
  try {
    //wait for the api to be fetched
    const apiResponse = await fetch("https://dummyjson.com/quotes/random");
    //wait for the data to be converted from a JSON to a javascript file

    //Handle unexpected response
    if (!apiResponse.ok) {
      throw new Error("Failed to fetch quote");
    }
    const apiData = await apiResponse.json();

    //Populate my HTML quote section with API response
    quoteText.textContent = apiData.quote;
    quoteAuthorId.textContent = apiData.author;
  } catch (error) {
    console.error(error);
  }
}

fetchQuote();

//Click on button to rerun the function and generate quote
function generateQuote() {
  newQuote.addEventListener("click", () => {
    fetchQuote();
  });
}

generateQuote();
