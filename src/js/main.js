const mainBtnBlock = document.querySelector('.main__more-text');
const mainBtn = mainBtnBlock.querySelector('.main__show-more-button');
const mainAbout = document.querySelector('.main__about');
const mainText = mainAbout.querySelector('.main__text-block');

function fullText() {
  mainText.classList.toggle('full-text');
  mainBtn.classList.toggle('_show');
  if (mainBtn.textContent === 'Скрыть') {
    mainBtn.textContent = 'Читать далее';
  } else mainBtn.textContent = 'Скрыть';
}

mainBtn.addEventListener('click', fullText);


