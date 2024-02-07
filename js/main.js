document.addEventListener("DOMContentLoaded", () => {
const searchinput = document.getElementById("searchInput");
const dropdownmenu = searchinput.nextElementSibling;
searchinput.addEventListener("input",() => {
    if (searchinput.value.length > 0){
       dropdownmenu.classList.add("show");
    }
    else{
        dropdownmenu.classList.remove("show");

    }

});

});

