//Target the theme button
const themeToggle = document.getElementById("theme-toggle");

//Add an eventlistener to toggle theme
function themeToggleFunction() {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("lighter-theme");
  });
}
