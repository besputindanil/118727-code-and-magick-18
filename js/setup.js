'use strict';

(function () {
  var WIZARD_COUNT = 4;

  var userDialog = document.querySelector('.setup');

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var form = userDialog.querySelector('.setup-wizard-form');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var loadHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(loadHandler, errorHandler);

  var saveHandler = function () {
    userDialog.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), saveHandler, errorHandler);
    evt.preventDefault();
  });
})();
