// for search box  

const nav = document.querySelector(".nav"),
    searchIcon = document.querySelector("#searchIcon");

    searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
});