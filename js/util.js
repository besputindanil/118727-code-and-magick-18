'use strict';

(function () {
  window.util = {
    wizardsProperties: {
      COAT_COLORS: [
        'rgb(101, 137, 164)',
        'rgb(241, 43, 107)',
        'rgb(146, 100, 161)',
        'rgb(56, 159, 117)',
        'rgb(215, 210, 55)',
        'rgb(0, 0, 0)'
      ],
      EYES_COLORS: [
        'black',
        'red',
        'blue',
        'yellow',
        'green'
      ]
    },
    keyCode: {
      ESC_KEYCODE: 27,
      ENTER_KEYCODE: 13
    },
    getRandomNumber: function (array) {
      var randomElementIndex = Math.floor(Math.random() * array.length);
      return array[randomElementIndex];
    }
  };
})();
