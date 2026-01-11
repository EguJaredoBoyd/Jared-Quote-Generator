//Target the copy and the quote buttons
const copyQuote = document.getElementById("copy-quote");
const qouteContent = document.getElementById("quote-content");
const copyAlert = document.getElementById("copy-alert");

function copyQuoteToClipboard() {
  copyQuote.addEventListener("click", () => {
    const quoteToCopy = qouteContent.textContent;
    navigator.clipboard.writeText(quoteToCopy);

    copyAlert.classList.add("show");

    alert("copied");
  });
}

copyQuoteToClipboard();
