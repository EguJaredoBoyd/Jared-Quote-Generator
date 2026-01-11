//Target the theme button and theme icon
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

//Add an eventlistener to toggle theme
function themeToggleFunction() {
  themeToggle.addEventListener("click", () => {
    const lighterTheme = document.body.classList.toggle("lighter-theme");

    //Add a class of moon to the <i> tag
    if (lighterTheme === true) {
    }
    //Save lighter-theme to the localStorage
    localStorage.setItem("Lighter-Theme", JSON.stringify(lighterTheme));
  });
}

themeToggleFunction();
