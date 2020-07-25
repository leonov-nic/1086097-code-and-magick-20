'use strict';

(function () {

  var DEBOUNCE_INTERVAL = 3000;

  window.util = {

    debounce: function (cb) {
      var lastTimeout = null;

      return function () {
        var parameters = arguments;
        if (lastTimeout) {
          window.clearTimeout(lastTimeout);
        }
        lastTimeout = window.setTimeout(function () {
          cb.apply(null, parameters);
        }, DEBOUNCE_INTERVAL);
      };
    },

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
