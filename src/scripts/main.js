import slider from "./_swiper.js";

window.addEventListener("DOMContentLoaded", () => {
  const mainPage = document.querySelector(".mainPage");
  // console.log(window.innerWidth);
  if (mainPage) {
    slider();

    const burgerTrigger = document.querySelector(".laptop__icon"),
      burgerTriggerClose = document.querySelector(".laptop__icon_close"),
      headerlist = document.querySelector(".header__list"),
      background = document.querySelector(".black_background");

    burgerTrigger.addEventListener("click", () => {
      headerlist.classList.toggle("burger-active");
      background.classList.toggle("active");
      burgerTriggerClose.classList.toggle("visible");
      burgerTrigger.classList.toggle("hidden");
    });

    burgerTriggerClose.addEventListener("click", () => {
      burgerTriggerClose.classList.toggle("visible");
      headerlist.classList.toggle("burger-active");
      background.classList.toggle("active");
      burgerTrigger.classList.toggle("hidden");
    });

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
        // galleryWrapper5 = document.querySelector(
        //   ".gallery__imgs_texts_5 .gallery__imgs_bottom-text"
        // )

        // console.log("375px", window.innerWidth);

        galleryWrapper2.textContent = "Eyewear store interior";
        galleryWrapper3.textContent = "Minimalist style home";
        galleryWrapper4.textContent = "Eyewear store interior";
      } else if (380 < window.innerWidth && window.innerWidth <= 768) {
        // console.log(380 < window.innerWidth && window.innerWidth <= 768);
        // console.log(380 < (window.innerWidth <= 768));
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
});
