import slider from "./_swiper.js";
import Swiper, { Navigation, Pagination } from "swiper";

window.addEventListener("DOMContentLoaded", () => {
  const mainPage = document.querySelector(".mainPage"),
    blogPage = document.querySelector(".blog"),
    newsPage = document.querySelector(".one-new");

  if (mainPage) {
    slider();

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 375) {
        let galleryWrapper2 = document.querySelector(
            ".gallery__imgs_texts_2 .gallery__imgs_bottom-text"
          ),
          galleryWrapper3 = document.querySelector(
            ".gallery__imgs_texts_3 .gallery__imgs_bottom-text"
          ),
          galleryWrapper4 = document.querySelector(
            ".gallery__imgs_texts_4 .gallery__imgs_bottom-text"
          );

        galleryWrapper2.textContent = "Eyewear store interior";
        galleryWrapper3.textContent = "Minimalist style home";
        galleryWrapper4.textContent = "Eyewear store interior";
      } else if (380 < window.innerWidth && window.innerWidth <= 768) {
        let galleryWrapper1 = document.querySelector(
            ".gallery__imgs_texts_1 .gallery__imgs_bottom-text"
          ),
          galleryWrapper3 = document.querySelector(
            ".gallery__imgs_texts_3 .gallery__imgs_bottom-text"
          ),
          galleryWrapper4 = document.querySelector(
            ".gallery__imgs_texts_4 .gallery__imgs_bottom-text"
          ),
          galleryImg1 = document.querySelector(".img_1"),
          galleryImg3 = document.querySelector(".img_3"),
          galleryImg4 = document.querySelector(".img_4"),
          galleryImg5 = document.querySelector(".source_img_5");

        galleryWrapper1.textContent = "Residence by the lighthouse";
        galleryWrapper3.textContent = "Eyewear storeinterior";
        galleryWrapper4.textContent = "House on a Hillside";

        galleryImg1.setAttribute("src", "../img/mainPage/Pic_1_change.webp");
        galleryImg3.setAttribute("src", "../img/mainPage/Pic_3_change.webp");

        galleryImg4.setAttribute("src", "../img/mainPage/Pic_4_change.webp");
        galleryImg5.setAttribute("srcset", "../img/mainPage/Pic_5_change.webp");

        // console.log("768px", window.innerWidth);
      }
      // } else {
      //   let galleryWrapper3 = document.querySelector(
      //       ".gallery__imgs_wrapper.pic_3"
      //     ),
      //     galleryWrapper5 = document.querySelector(
      //       ".gallery__imgs_wrapper.pic_5"
      //     ),
      //     galleryImg3 = document.querySelector(".img_3"),
      //     galleryImg5 = document.querySelector(".source_img_5");

      //   galleryImg3.setAttribute("src", "../img/mainPage/Pic_3.webp");
      //   galleryImg5.setAttribute("srcset", "../img/mainPage/Pic_5.webp");
      // }
    });
  }

  const burgerTrigger = document.querySelector(".laptop__icon"),
    burgerTriggerClose = document.querySelector(".laptop__icon_close"),
    headerlist = document.querySelector(".header__list"),
    headerBottomBlock = document.querySelector(".slide__bottom_header"),
    background = document.querySelector(".black_background");

  burgerTrigger.addEventListener("click", () => {
    headerlist.classList.toggle("burger-active");
    background.classList.toggle("active");
    burgerTriggerClose.style.display = "block";
    burgerTrigger.style.display = "none";
    headerBottomBlock.classList.toggle("header_active");

    console.log(
      document.querySelector(".header__list.burger-active + .common-header-btn")
    );
  });

  burgerTriggerClose.addEventListener("click", () => {
    headerlist.classList.toggle("burger-active");
    background.classList.toggle("active");
    burgerTriggerClose.style.display = "none";
    burgerTrigger.style.display = "block";
    headerBottomBlock.classList.toggle("header_active");
  });

  if (blogPage) {
    const burger = document.querySelector(".laptop__icon"),
      blogFooterText = document.querySelector(".blog-footer_descr"),
      blogGalleryTitle = document.querySelector(".blog-gallery_title"),
      blogGalleryList = document.querySelector(".blog-gallery-list"),
      blogGalleryListMobileImg = document.querySelector(
        ".blog-gallery-list_mobile img"
      ),
      blogGalleryListMobile = document.querySelector(
        ".blog-gallery-list_mobile"
      );

    if (window.innerWidth <= 1023) {
      blogFooterText.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper eu mauris vitae posuere. Ut at luctus ligula. Nunc ante felis, aliquam eu enim sed, ornare pretium velit.";
    }

    if (window.innerWidth <= 767) {
      blogGalleryTitle.textContent = "Our news";
      blogGalleryListMobile.addEventListener("click", () => {
        blogGalleryList.classList.toggle("none-mobile");
        blogGalleryListMobileImg.classList.toggle("rotate180");
      });
    }

    burger.setAttribute("src", "../img/header/burger-img_black.webp");
  }

  if (newsPage) {
    const copyRightImg = document.querySelector(".footer__pic img");

    copyRightImg.setAttribute("src", "../img/OneNew/black-copyright.webp");

    const swiper = new Swiper(".swiper", {
      spaceBetween: 0,
      slidesPerView: 3.4,

      centeredSlides: false,
      roundLengths: false,
      loop: true,

      // breakpoints: {
      //   1440: {
      //     slidesPerView: 1.175,
      //   },
      //   1024: {
      //     spaceBetween: 0,
      //     slidesPerView: 1.189,
      //   },
      //   768: {
      //     slidesPerView: 1.17,
      //   },
      //   375: {
      //     slidesPerView: 1.19,
      //   },
      // },
    });
  }
});
