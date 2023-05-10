const actionList = document.querySelector('.aside-burger__actions');
const actionCall = actionList.querySelector('.aside-burger__action--call');
const actionFeedback = actionList.querySelector('.aside-burger__action--feedback');
const headerActionList = document.querySelector('.header__actions');
const headerActionCall = headerActionList.querySelector('.header__button--call');
const headerActionFeedback = headerActionList.querySelector('.header__button--feedback');
const modalFeedbackWrap = document.querySelector('.modal-feedback-wrap');
const modalCallWrap = document.querySelector('.modal-call-wrap');
const modalFeedback = modalFeedbackWrap.querySelector('.modal-feedback');
const modalCall = modalCallWrap.querySelector('.modal-call');
const btnCloseFB = modalFeedback.querySelector('.modal-feedback__btn-close');
const btnCloseCall = modalCall.querySelector('.modal-call__btn-close');
const btnSendFB = modalFeedback.querySelector('.modal-feedback__btn-send');
const btnSendCall = modalCall.querySelector('.modal-call__btn-send');
const modalFormFB = modalFeedback.querySelector('.modal-feedback__form');
const modalFormCall = modalFeedback.querySelector('.modal-call__form');
const modalInputsFB = modalFeedback.querySelectorAll('.modal-feedback__input');
const modalInputsCall = modalCall.querySelectorAll('.modal-call__input');
const body = document.querySelector('body');
const addInfo = document.createElement('div');
const blurBlock = document.createElement('div');

function showModal(wrap) {
  document.querySelector('.aside-burger').classList.remove('open');
  wrap.classList.add('modal-wrap--open');
  body.classList.add('_lock');
  blurBlock.classList.add('_hide-modal');
  body.appendChild(blurBlock);
  addInfo.textContent = '';
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal(wrap);
  })
}

function closeModal(wrap) {
  wrap.classList.remove('modal-wrap--open');
  blurBlock.remove();
  body.classList.remove('_lock');
  if (document.querySelector('._hide')) document.querySelector('._hide').remove();
}

function sendForm(e, wrap, inputs, form) {
  e.preventDefault();
  let emptyValue = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      emptyValue++;
    }
  };
  if (emptyValue > 0) {
    addInfo.classList.add('modal__empty-fields');
    addInfo.textContent = 'Поля не заполнены!';
    form.appendChild(addInfo);
  }
  else {
    closeModal(wrap);
    for (let i = 0; i < inputs.length; i++) {
      inputs.value = '';
    };
    addInfo.remove();
  };
}

actionFeedback.addEventListener('click', () => showModal(modalFeedbackWrap));
actionCall.addEventListener('click', () => showModal(modalCallWrap));
headerActionFeedback.addEventListener('click', () => showModal(modalFeedbackWrap));
headerActionCall.addEventListener('click', () => showModal(modalCallWrap));
btnCloseFB.addEventListener('click', () => closeModal(modalFeedbackWrap));
btnCloseCall.addEventListener('click', () => closeModal(modalCallWrap));
btnSendFB.addEventListener('click', (e) => sendForm(e, modalFeedbackWrap, modalInputsFB, modalFormFB));
btnSendCall.addEventListener('click', (e) => sendForm(e, modalCallWrap, modalInputsCall, modalFormCall));
blurBlock.addEventListener('click', () => closeModal(modalFeedbackWrap));
blurBlock.addEventListener('click', () => closeModal(modalCallWrap));
