const swiper = new Swiper('.swiper-header', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

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
    mousewheel: false,
    keyboard: true,
});

const primopiano = new Swiper('.swiper-primopiano', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 6,
    spaceBetween: 30,
    freeMode: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
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
    mousewheel: false,
    keyboard: true,
});
const offerte = new Swiper('.swiper-offerte', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 6,
    spaceBetween: 30,
    freeMode: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
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
    mousewheel: false,
    keyboard: true,
});