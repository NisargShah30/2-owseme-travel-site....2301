// search bar js //
let searchBtn = document.querySelector('#search');
let searchBar = document.querySelector('.search-bar-cointainer');

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');

let formClose = document.querySelector('#form-close');


let menu = document.querySelector('#menu-bar');

let navbar = document.querySelector('.navbar');

let vidioBtn = document.querySelectorAll('.vid-btn');



// search bar js //
window.onscroll = () =>{ // remove thse window onscroll thay tyare //
   // searchbar menu remove // on window scroll //
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');

    //searchbar menu remove // on window scroll //
    
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    //login form  remove // on window scroll //
    loginForm.classList.remove('active');


}

searchBtn.addEventListener('click', () =>{

    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// login form js //


formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});


formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

// menu btn js code //

menu.addEventListener('click', () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// hero secstion vidio nu js //

vidioBtn.forEach(btn => {
    btn.addEventListener('click', () =>{
        document.querySelector('.controals .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#vidio-slider').src = src;
    });
});

// review js //
var swiper = new Swiper(".review-slider",{
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesperview:1,
        },
        768: {
            slidesperview:2,
        },
        1024: {
            slidesperview:3,
        },
    },
});

// brand js //

var swiper = new Swiper(".brand-slider",{
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesperview:2,
        },
        768: {
            slidesperview:3,
        },
        991: {
            slidesperview:4,
        },
        1200: {
            slidesperview:5,
        },
    },
});





