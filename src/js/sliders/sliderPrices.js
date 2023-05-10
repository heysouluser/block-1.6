let swiperPrice = null;
const mediaQuery768px = window.matchMedia("(max-width: 768px)");
const paginationPriceBox = document.querySelector(".price-slider__box .swiper-pagination");

document.addEventListener('DOMContentLoaded', function () {
  if (mediaQuery768px.matches) {
    swiperPriceInit();
  }
  else {
    paginationPriceBox.classList.toggle('_off');
  }

  function swiperPriceInit() {
    swiperPrice = new Swiper(".price-slider__box", {
      spaceBetween: 16,
      loop: true,
      slidesPerView: 'auto',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  function sliderPriceToggle(isMobileSize) {
    paginationPriceBox.classList.toggle('_off');
    if (isMobileSize && !swiperPrice) {
      swiperPriceInit();
    } else if (!isMobileSize && swiperPrice) {
      swiperPrice.destroy();
      swiperPrice = null;
    }
  }

  mediaQuery768px.addEventListener('change', function resizeWidth(event) {
    sliderPriceToggle(event.matches);
  })
});
