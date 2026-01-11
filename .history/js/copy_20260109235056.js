//Target the copy and the quote buttons
const copyQuote = document.getElementById("copy-quote");
const qouteContent = document.getElementById("quote-content");
const copyFeedback = document.getElementById("copy-feedback");

function copyQuoteToClipboard() {
  copyQuote.addEventListener("click", () => {
    const quoteToCopy = qouteContent.textContent;
    navigator.clipboard.writeText(quoteToCopy);

    copyFeedback.classList.add("show");

    alert("copied");
    console.log("copied!");
  });
}

copyQuoteToClipboard();
