document.addEventListener("DOMContentLoaded", function() {
    const darkModeButton = document.querySelector("#toggleDarkMode");
    darkModeButton.addEventListener("click", function() 
        {document.body.classList.toggle("darkMode");});});
