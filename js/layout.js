// Show nav-bar in smaller screens
function toggleBar() {
    let menu = document.querySelector(".menu-bar");
    console.log(menu);
    let navbar = document.querySelector(".nav-bar");
    console.log(navbar);
    menu.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}

function search() {
    document.querySelector(".search-form").classList.add("active");
}

// Exit or close search window
function exit() {
    document.querySelector(".search-form").classList.remove("active");
}

// Slide Swiper
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

var swiper_bottom = new Swiper(".all-reviews", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },

    },
  });

