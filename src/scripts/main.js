import slider from "./_swiper.js";
import Swiper, { Navigation, Pagination } from "swiper";

window.addEventListener("DOMContentLoaded", () => {
  const mainPage = document.querySelector(".mainPage"),
    blogPage = document.querySelector(".blogPage"),
    newsPage = document.querySelector(".one-new"),
    projectsPage = document.querySelector(".projectsPage");

  const burgerTrigger = document.querySelector(".laptop__icon"),
    burgerLogo = document.querySelector(".header__logo"),
    burgerTriggerClose = document.querySelector(".laptop__icon_close"),
    headerlist = document.querySelector(".header__list"),
    headerBottomBlock = document.querySelector(".slide__bottom_header"),
    background = document.querySelector(".black_background");

  const burger = document.querySelector(".laptop__icon"),
    blogFooterText = document.querySelector(".blog-footer_descr"),
    blogGalleryTitle = document.querySelector(".blog-gallery_title"),
    blogGalleryList = document.querySelector(".blog-gallery-list"),
    blogGalleryListMobileImg = document.querySelector(
      ".blog-gallery-list_mobile img"
    ),
    blogGalleryListMobile = document.querySelector(".blog-gallery-list_mobile");

  const copyRightImg = document.querySelector(".footer__pic img"),
    changeText2 = document.querySelectorAll(
      ".news-top__text-wrapper_2 .news-top__descr"
    )[1],
    changeOlLi2 = document.querySelector(
      ".news-top__text-wrapper_2 ol li:nth-child(2)"
    );

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
      }
    });
  }

  burgerTrigger.addEventListener("click", () => {
    burgerLogo.classList.toggle("header__logo_white");
    headerlist.classList.toggle("burger-active");
    background.classList.toggle("active");
    burgerTriggerClose.style.display = "block";
    burgerTrigger.style.display = "none";
    headerBottomBlock.classList.toggle("header_active");
  });

  burgerTriggerClose.addEventListener("click", () => {
    burgerLogo.classList.toggle("header__logo_white");
    headerlist.classList.toggle("burger-active");
    background.classList.toggle("active");
    burgerTriggerClose.style.display = "none";
    burgerTrigger.style.display = "block";
    headerBottomBlock.classList.toggle("header_active");
  });

  if (blogPage) {
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
    burger.setAttribute("src", "../img/header/burger-img_black.webp");
    copyRightImg.setAttribute("src", "../img/OneNew/black-copyright.webp");
    if (window.innerWidth <= 1439) {
      changeText2.textContent =
        "Ut arcu tortor, hendrerit eget sollicitudin sed, tincidunt a lectus. Cras gravida ultricies ante sit amet consectetur. Maecenas sed arcu tempor, posuere odio pharetra, faucibus risus. Etiam fermentum felis quis aliquet viverra. Mauris in odio nec mi pellentesque placerat. Praesent at metus in lacus posuere molestie. Aliquam consequat, neque eget congue feugiat, lectus leo condimentum lorem, scelerisque euismod nisi ipsum nec metus. Mauris semper felis venenatis eros interdum sollicitudin.";
    }
    if (window.innerWidth <= 1023) {
      changeOlLi2.textContent =
        "2. Cras vel gravida urna. Donec blandit sapien eu diam ullamcorper euismod.";
    }
    const swiper = new Swiper(".swiper", {
      spaceBetween: 0,
      slidesPerView: 3.4,

      centeredSlides: false,
      roundLengths: false,
      loop: true,

      breakpoints: {
        1440: {
          slidesPerView: 3.4,
        },
        1024: {
          spaceBetween: -55,
          slidesPerView: 2.9,
        },
        768: {
          spaceBetween: -108,
          slidesPerView: 1.7,
        },
        375: {
          slidesPerView: 1.19,
        },
      },
    });
  }
  if (projectsPage) {
    copyRightImg.setAttribute("src", "../img/OneNew/black-copyright.webp");
  }
});
