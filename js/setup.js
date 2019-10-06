'use strict';

(function () {
  var WIZARD_COUNT = 4;

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var userDialog = document.querySelector('.setup');

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var wizards = [];
  for (var i = 0; i < WIZARD_COUNT; i++) {
    wizards.push({
      name: WIZARD_NAMES[window.util.getRandomNumber(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SURNAMES[window.util.getRandomNumber(0, WIZARD_SURNAMES.length - 1)],
      coatColor: window.util.wizardsProperties.COAT_COLORS[window.util.getRandomNumber(0, window.util.wizardsProperties.COAT_COLORS.length - 1)],
      eyesColor: window.util.wizardsProperties.EYES_COLORS[window.util.getRandomNumber(0, window.util.wizardsProperties.EYES_COLORS.length - 1)]
    });
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
