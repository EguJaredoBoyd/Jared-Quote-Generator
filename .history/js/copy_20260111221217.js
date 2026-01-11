//Target the copy and the quote buttons
const copyQuote = document.getElementById("copy-quote");
const copyFeedback = document.getElementById("copy-feedback");

function copyQuoteToClipboard() {
  copyQuote.addEventListener("click", () => {
    const quoteToCopy = quoteContent.textContent;
    navigator.clipboard.writeText(quoteToCopy);

    copyFeedback.classList.add("show");

    setTimeout(() => {
      copyFeedback.classList.remove("show");
    }, 1500);
  });
}

copyQuoteToClipboard();
