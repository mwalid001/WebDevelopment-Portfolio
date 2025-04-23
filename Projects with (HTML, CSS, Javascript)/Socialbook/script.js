// whenever we click the div with the property onclick="settingsMenuToggle()", which is in the navigation bar, it will call this function down below called settingsMenuToggle().
let settingsMenu = document.querySelector(".settings-menu")
let darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");/* toggle on/off this height class to the settings element  */
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on"); /* changing the dark-btn */
    document.body.classList.toggle("dark-theme"); /* changing the colors of the body */
    // then update the localStorage from previous settings as follows:
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}


if(localStorage.getItem("theme") == "light"){ /*checking if value in localstorage "theme" is "light" */
    darkBtn.classList.remove("dark-btn-on"); /* removing dark colors from button */
    document.body.classList.remove("dark-theme"); /* removing dark colors from body */
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light"); /* we set it for the first time in the local storage called "theme". */
}




/* concept of local storage in the javascript */
// localStorage.setItem("theme", "light"); /* ... creating a local storage with the name of theme & the value is light. In this way, we create a local storage for the web browser using the setItem. */
/* to read the value of that local storage, you '.getItem' adding only the name of that local storage as follows: */
// localStorage.getItem("theme");
/* we used this to store the light mode or the dark mode on our browser */
