const headerNav = document.querySelector('.header__row');
const headerBurger = headerNav.querySelector('.header__button');
const aside = document.querySelector('.aside-burger');
const asideNav = document.querySelector('.aside-burger__menu');
const asideBurger = asideNav.querySelector('.aside-burger__burger-btn');
const body = document.querySelector('body');
const hidePage = document.createElement('div');

headerBurger.addEventListener('click', openBurger);
asideBurger.addEventListener('click', closeBurger);
hidePage.addEventListener('click', closeBurger);

function openBurger() {
  aside.classList.add('open');
  body.classList.add('_lock');
  hidePage.classList.add('_hide');
  body.appendChild(hidePage);
  document.addEventListener('keydown', escBurger);
  function escBurger(e) {
    if (e.key === 'Escape') {
      closeBurger();
    }
  }
}

function closeBurger() {
  aside.classList.remove('open');
  body.classList.remove('_lock');
  hidePage.remove();
}

