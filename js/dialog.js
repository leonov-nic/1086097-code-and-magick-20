'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var form = setup.querySelector('.setup-wizard-form');

  var onPopupEscPress = function (evt) {
    window.util.isEscPress(evt, closePopup);
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    setup.style.left = '50%';
    setup.style.top = '80px';
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterPress(evt, openPopup);
  });

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterPress(evt, closePopup);
  });

  var onLoad = function () {
    closePopup();
    // console.log('форма отправлена');
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; margin: 80px; text-align: center; background-color: black; padding: 50px;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
    // console.log('форма НЕ отправлена');
  };

  var onSubmit = function (evt) {
    window.backend.save(new FormData(form), onLoad, onError);
    evt.preventDefault();
  };

  form.addEventListener('submit', onSubmit);

})();
