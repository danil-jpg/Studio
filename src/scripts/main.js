import slider from "./_swiper.js";
import Swiper, { Navigation, Pagination } from "swiper";

window.addEventListener("DOMContentLoaded", () => {
  const mainPage = document.querySelector(".mainPage"),
    blogPage = document.querySelector(".blogPage"),
    newsPage = document.querySelector(".one-new"),
    projectsPage = document.querySelector(".projectsPage"),
    oneProjectPage = document.querySelector(".oneProjectPage"),
    aboutPage = document.querySelector(".aboutPage"),
    contactsPage = document.querySelector(".contacts"),
    erorPage = document.querySelector(".eror-page404");

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

    const textTochange = document.querySelector(
      " .footer__content_block .footer__title"
    );
    if (window.innerWidth <= 375) {
      let galleryWrapper1 = document.querySelector(
          ".gallery__imgs_texts_1 .gallery__imgs_bottom-text"
        ),
        galleryWrapper2 = document.querySelector(
          ".gallery__imgs_texts_2 .gallery__imgs_bottom-text"
        ),
        galleryWrapper3 = document.querySelector(
          ".gallery__imgs_texts_3 .gallery__imgs_bottom-text"
        ),
        galleryWrapper4 = document.querySelector(
          ".gallery__imgs_texts_4 .gallery__imgs_bottom-text"
        );
      galleryWrapper1.textContent = "Residence by the lighthouse";
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

      // galleryImg1.setAttribute("src", "../img/mainPage/Pic_1_change.webp");
      // galleryImg3.setAttribute("src", "../img/mainPage/Pic_3_change.webp");

      // galleryImg4.setAttribute("src", "../img/mainPage/Pic_4_change.webp");
      // galleryImg5.setAttribute("srcset", "../img/mainPage/Pic_5_change.webp");
    }

    if (window.innerWidth <= 1024) {
      textTochange.textContent = "Get in touch";
    }
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

  const elementToChangePopUp = document.querySelector(".pop-up__top_title"),
    popUpTriggers = document.querySelectorAll(
      ".common-btn:not(.pop-up__btn-trigger):not(.pop-up__btn-thanks)"
    ),
    popUpBackground = document.querySelector(".black-background-popUp"),
    popUp = document.querySelector(".pop-up"),
    popUpThanksTriggerBtn = document.querySelector(".pop-up__btn-trigger"),
    popUpThanksBlock = document.querySelector(
      ".pop-up__thanks-message-wrapper"
    ),
    popUpThanksAgain = document.querySelector(".pop-up__btn-thanks");

  function openPopUp() {
    popUpBackground.classList.toggle("pop-up_active");
    popUp.classList.toggle("pop-up_active");
  }
  popUpThanksTriggerBtn.addEventListener("click", () => {
    popUp.classList.toggle("pop-up_active");
    popUpThanksBlock.classList.toggle("pop-up_active");
  });
  popUpThanksAgain.addEventListener("click", () => {
    popUpThanksBlock.classList.toggle("pop-up_active");
    popUp.classList.toggle("pop-up_active");
  });
  popUpTriggers.forEach((item) => {
    item.addEventListener("click", openPopUp);
  });

  popUpBackground.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("black-background-popUp") &&
      e.target.classList.contains("pop-up__btn-trigger") == false
    ) {
      console.log(e.target.classList);
      popUpBackground.classList.toggle("pop-up_active");
      popUp.classList.toggle("pop-up_active");
    }
  });

  if (window.innerWidth <= 1439) {
    elementToChangePopUp.textContent = "Make request";
  }

  if (blogPage) {
    const textToChange = document.querySelector(".blog-footer_descr");

    if (window.innerWidth <= 1439) {
      textToChange.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper eu mauris vitae posuere. Ut at luctus ligula. Nunc ante felis, aliquam eu enim sed, ornare pretium velit.";
    }
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

    burger.setAttribute("src", "img/header/burger-img_black.webp");
  }

  if (newsPage) {
    burger.setAttribute("src", "img/header/burger-img_black.webp");
    copyRightImg.setAttribute("src", "img/OneNew/black-copyright.webp");
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
    const projectsGalleryPageText1 = document.querySelector(
        ".gallery__imgs_texts_1 .gallery__imgs_bottom-text"
      ),
      projectsGalleryPageText2 = document.querySelector(
        ".gallery__imgs_texts_2 .gallery__imgs_bottom-text"
      ),
      projectsGalleryPageText3 = document.querySelector(
        ".gallery__imgs_texts_3 .gallery__imgs_bottom-text"
      ),
      projectsGalleryPageText4 = document.querySelector(
        ".gallery__imgs_texts_4 .gallery__imgs_bottom-text"
      ),
      projectsGalleryPageText5 = document.querySelector(
        ".pic_5 .gallery__imgs_texts_4 .gallery__imgs_bottom-text"
      ),
      projectsGalleryPageText6 = document.querySelector(
        ".pic_6 .gallery__imgs_texts_3 .gallery__imgs_bottom-text"
      );
    if (window.innerWidth <= 1023) {
      projectsGalleryPageText1.textContent = "Residence by the lighthouse";
      projectsGalleryPageText3.textContent = "Minimalist style home";
      projectsGalleryPageText4.textContent = "Minimalist style home";
      projectsGalleryPageText6.textContent = "House on a Hillside";
    }

    if (window.innerWidth <= 767) {
      projectsGalleryPageText2.textContent = "Eyewear store interior";
      projectsGalleryPageText4.textContent = "Eyewear store interior";
      projectsGalleryPageText5.textContent = "House on a Hillside";

      blogGalleryListMobile.addEventListener("click", () => {
        blogGalleryList.classList.toggle("none-mobile");
        blogGalleryListMobileImg.classList.toggle("rotate180");
      });
    }

    copyRightImg.setAttribute("src", "/img/OneNew/black-copyright.webp");
    burger.setAttribute("src", "img/header/burger-img_black.webp");
  }

  if (oneProjectPage) {
    const oneProjectTitle = document.querySelector(".project-top__title");

    if (window.innerWidth <= 1024) {
      oneProjectTitle.innerHTML = "Residence  <br/> by the lighthouse";
    } else if (window.innerWidth > 1024) {
      oneProjectTitle.innerHTML = "Residence by the lighthouse";
    }
  }

  if (aboutPage) {
    copyRightImg.setAttribute("src", "img/OneNew/black-copyright.webp");
    burger.setAttribute("src", "img/header/burger-img_black.webp");

    const swiper = new Swiper(".swiper", {
      spaceBetween: 12,
      slidesPerView: 1.2,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      modules: [Navigation, Pagination],
      centeredSlides: false,
      roundLengths: false,
      loop: false,

      breakpoints: {
        1440: {
          slidesPerView: 1.2,
        },
        1024: {
          slidesPerView: 1.2,
        },
        768: {
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 1.2,
        },
      },
    });
  }

  if (contactsPage) {
    const textTochange = document.querySelector(
      ".contacts .footer__content_block .footer__title"
    );
    if (window.innerWidth <= 1024) {
      textTochange.textContent = "Get in touch";
    }
  }

  if (erorPage) {
    const textTochange = document.querySelector(".header__logo");

    textTochange.innerHTML = "<a href='./index.html'>HILIGHT</a>";

    copyRightImg.setAttribute("src", "img/Contacts/eror-copyrightImg.webp");

    if (window.innerWidth <= 1024) {
      textTochange.innerHTML = `<a href="./index.html">Logo</a>`;
    }
  }

  if (popUp) {
  }
});
