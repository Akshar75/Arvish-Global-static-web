// our products
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
        1440: {
            slidesPerView: 4.5,
        },
        1024: {
            slidesPerView: 3.5,
        },
        768: {
            slidesPerView: 2.5,
        },
        425: {
            slidesPerView: 2,
        },
    },
});

// testimonial

var swiper = new Swiper(".testimoninal", {
    cssMode: true,
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {

        1440: {
            slidesPerView: 2.5,
        },
        1024: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1.5,
        },
        425: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
    },
    mousewheel: true,
    keyboard: true,
});
