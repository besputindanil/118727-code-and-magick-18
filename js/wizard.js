'use strict';

(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  wizardCoat.addEventListener('click', function () {
    var newColor = window.util.getRandomNumber(window.util.wizardsProperties.COAT_COLORS);
    wizardCoat.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = window.util.getRandomNumber(window.util.wizardsProperties.EYES_COLORS);
    wizardEyes.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  window.wizard = wizard;
})();
