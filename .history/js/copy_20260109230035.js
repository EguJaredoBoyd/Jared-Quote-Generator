const copyQuote = document.getElementById("copy-quote");
const qouteContent = document.getElementById("quote-content");

function copyQuoteToClipboard() {
  copyQuote.addEventListener("click", () => {
    const quoteToCopy = qouteContent.textContent;
    navigator.clipboard.writeText(quoteToCopy);
  });
}
