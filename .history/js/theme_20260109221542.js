//Target the theme button and theme icon
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

//Add an eventlistener to toggle theme
function themeToggleFunction() {
  themeToggle.addEventListener("click", () => {
    const lighterTheme = document.body.classList.toggle("lighter-theme");

    //Add a class of moon to the <i> tag
    if (lighterTheme === true) {
      const savedTheme = JSON.parse(localStorage.getItem("Lighter-Theme"));

      //Remove default theme
      themeIcon.classList.remove("ri-sun-line");
    }
    //Save lighter-theme to the localStorage
    localStorage.setItem("Lighter-Theme", JSON.stringify(lighterTheme));
  });
}

themeToggleFunction();
