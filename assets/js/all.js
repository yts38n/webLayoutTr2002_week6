"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var swiperLanguages = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 8,
  slidesOffsetBefore: 12,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 992px
    992: {
      slidesPerView: 2,
      spaceBetween: 16,
      slidesOffsetBefore: 24
    }
  }
});
var swiperCourse = new Swiper(".course-swiper", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 16
});
var swiperShares = new Swiper(".shares-swiper", {
  // Optional parameters
  slidesOffsetBefore: 0,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  //custom transition speed
  speed: 2000
});
//# sourceMappingURL=all.js.map
