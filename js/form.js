'use strict';

(function () {

  window.form = {

    validateName: function (element) {
      element.addEventListener('invalid', function () {
        if (element.validity.tooShort) {
          element.setCustomValidity('Имя должно состоять минимум из 2-х символов');
        } else if (element.validity.tooLong) {
          element.setCustomValidity('Имя не должно превышать 25-ти символов');
        } else if (element.validity.valueMissing) {
          element.setCustomValidity('Обязательное поле');
        } else {
          element.setCustomValidity('');
        }
      });
    },

    validateNameLength: function (element, minlength, maxlength) {
      element.addEventListener('input', function () {
        var length = element.value.length;

        if (length < minlength) {
          element.setCustomValidity('Ещё ' + (minlength - length) + ' симв.');
        } else if (length > maxlength) {
          element.setCustomValidity('Удалите лишние ' + (length - maxlength) + ' симв.');
        } else {
          element.setCustomValidity('');
        }
      });
    }

  };

})();
