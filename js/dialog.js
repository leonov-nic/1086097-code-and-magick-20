'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    window.util.isEscPress(evt, closePopup);
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
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

})();
