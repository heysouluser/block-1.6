import { toggleSmth } from ".";

const mainBtnBlock = document.querySelector('.main__more-text');
const mainBtn = mainBtnBlock.querySelector('.main__show-more-button');
const mainAbout = document.querySelector('.main__about');
const mainText = mainAbout.querySelector('.main__text-block');

mainBtn.addEventListener('click', () => toggleSmth(mainText, 'full-text', mainBtn, 'Читать далее'));


