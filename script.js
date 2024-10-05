
let nav = document.querySelector(".nav"),
searchIcon = document.querySelector("#searchIcon");
openBtn = document.querySelector('.openBtn') 
closeBtn = document.querySelector('.closeBtn') 


// for search box  
searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
});



// for nav links ,
openBtn.addEventListener("click", () => {
    nav.classList.add('openLinks');
});
closeBtn.addEventListener("click", () => {
    nav.classList.remove('openLinks');
});





