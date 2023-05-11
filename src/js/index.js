export function toggleSmth(block, fullClass, btn, open) {
  block.classList.toggle(fullClass);
  btn.classList.toggle('_show');
  btn.textContent === 'Скрыть' ? btn.textContent = open : btn.textContent = 'Скрыть';
}

import '../scss/style.scss'
import './main';
import './aside';
import './sliders/sliderBrand';
import './sliders/sliderTechnique';
import './sliders/sliderPrices';
import './modals';

console.log('Works!');
