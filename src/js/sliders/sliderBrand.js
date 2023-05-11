import { toggleSmth } from "..";

let swiper = null;
const mediaQuery768px = window.matchMedia("(max-width: 768px)");
const mediaQuery1120px = window.matchMedia("(min-width: 1120px)");
const paginationBox = document.querySelector(".brand-slider__box .swiper-pagination");

const slider = document.querySelector('.brand-slider__box');
const sliderWrapper = slider.querySelector('.brand-slider__wrapper');
const slide = sliderWrapper.querySelector('.brand-slider__slide');
const showMoreBox = document.querySelector('.brand-slider__show-more');
const showMore = showMoreBox.querySelector('.brand-slider__show-more-button');
const cloneSlide = slide.cloneNode(true);
const oneMoreCloneSlide = slide.cloneNode(true);

document.addEventListener('DOMContentLoaded', function () {
  if (mediaQuery768px.matches) {
    swiperInit();
  } else {
    paginationBox.classList.toggle('_off');
  }

  if (mediaQuery1120px.matches) {
    let newSlide = sliderWrapper.appendChild(cloneSlide);
    let oneMoreNewSlide = sliderWrapper.appendChild(oneMoreCloneSlide);
    newSlide.classList.remove('swiper-slide');
    oneMoreNewSlide.classList.remove('swiper-slide');
  }

  function swiperInit() {
    swiper = new Swiper(".brand-slider__box", {
      spaceBetween: 16,
      loop: true,
      slidesPerView: 'auto',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  function sliderToggle(isMobileSize) {
    paginationBox.classList.toggle('_off');
    if (isMobileSize && !swiper) {
      swiperInit();
    } else if (!isMobileSize && swiper) {
      swiper.destroy();
      swiper = null;
    }
  }

  function newSlide(isFullSize) {
    if (isFullSize) {
      let newSlide = sliderWrapper.appendChild(cloneSlide);
      let oneMoreNewSlide = sliderWrapper.appendChild(oneMoreCloneSlide);
      newSlide.classList.remove('swiper-slide');
      oneMoreNewSlide.classList.remove('swiper-slide');
    }
    else if (!isFullSize) {
      sliderWrapper.lastChild.remove();
      sliderWrapper.lastChild.remove();
    }
  }

  showMore.addEventListener('click', () => toggleSmth(slider, 'brand-slider-full', showMore, 'Показать все'));

  mediaQuery768px.addEventListener('change', function resizeWidth(event) {
    sliderToggle(event.matches);
  })
  mediaQuery1120px.addEventListener('change', function addNewSlide(event) {
    newSlide(event.matches);
  })
});
