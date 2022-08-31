import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles

function slider() {
  // init Swiper:
  const swiper = new Swiper(".swiper", {
    spaceBetween: 0,
    slidesPerView: 1.175,
    centeredSlides: true,
    centeredSlides: false,
    roundLengths: true,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],

    breakpoints: {
      1440: {
        slidesPerView: 1.175,
      },
      1024: {
        spaceBetween: 0,
        slidesPerView: 1.189,
      },
      768: {
        slidesPerView: 1.17,
      },
      375: {
        slidesPerView: 1.19,
      },
    },
  });
}

export default slider;
