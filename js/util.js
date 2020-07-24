'use strict';

(function () {

  var getRandElement = function (array) {
    var item = array[Math.floor(Math.random() * array.length)];
    return item;
  };

  var DEBOUNCE_INTERVAL = 3000;

  var debounce = function (cb) {
    var lastTimeout = null;

    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout (function() {
        cb.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };

  window.util = {

    isEscPress: function (evt, action) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        action();
      }
    },

    isEnterPress: function (evt, action) {
      if (evt.key === 'Enter') {
        action();
      }
    },

    getRandomElementArray: function (array) {
      var rand = Math.floor(Math.random() * array.length);
      return array[rand];
    },

    colorize: function (element, elementField, arrayColors) {
      element.addEventListener('click', function () {
        var color = getRandElement(arrayColors);
        if (element.tagName.toLowerCase() === 'div') {
          element.style.background = color;
          elementField.value = color;

        } else {
          element.style.fill = color;
          elementField.value = color;
          debounce(window.setup.updateWizards());
        }
      });
    }

  };

})();
