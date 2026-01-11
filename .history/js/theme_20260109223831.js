//Target the theme button and theme icon
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

//Invoke saved lighter theme
const savedTheme = JSON.parse(localStorage.getItem("Lighter-Theme"));

//Add a class of moon to the <i> tag
if (savedTheme === true) {
  document.body.classList.add("lighter-theme");
  //Remove default theme
  themeIcon.classList.remove("ri-sun-line");
  themeIcon.classList.add("ri-contrast-2-line");
}

//Add an eventlistener to toggle theme
function themeToggleFunction() {
  themeToggle.addEventListener("click", () => {
    const lighterTheme = document.body.classList.toggle("lighter-theme");

    if (lighterTheme) {
      themeIcon.classList.remove("ri-sun-line");
      themeIcon.classList.add("ri-contrast-2-line");
    } else {
      themeIcon.classList.remove("ri-contrast-2-line");
    }

    //Save lighter-theme to the localStorage
    localStorage.setItem("Lighter-Theme", JSON.stringify(lighterTheme));
  });
}

themeToggleFunction();
