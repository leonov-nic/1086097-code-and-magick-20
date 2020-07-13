'use strict';

(function () {

  var getRandElement = function (array) {
    var item = array[Math.floor(Math.random() * array.length)];
    return item;
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

    colorize: function (element, elementField, arrayColors) {
      element.addEventListener('click', function () {
        var color = getRandElement(arrayColors);
        if (element.tagName.toLowerCase() === 'div') {
          element.style.background = color;
          elementField.value = color;
        } else {
          element.style.fill = color;
          elementField.value = color;
        }
      });
    }

  };

})();
