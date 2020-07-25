'use strict';

(function () {

  window.util = {

    getRandElement: function (array) {
      var item = array[Math.floor(Math.random() * array.length)];
      return item;
    },

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
    }

  };

})();
