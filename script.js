
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




// swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });