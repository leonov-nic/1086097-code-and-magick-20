'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var numberOfWizard = 4;

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYAS_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [
  {
    name: 'Иван',
    family: 'да Марья'
  },
  {
    name: 'Хуан Себастьян',
    family: 'Верон'
  },
  {
    name: 'Мария',
    family: 'Мирабелла'
  },
  {
    name: 'Кристоф',
    family: 'Вальц'
  },
  {
    name: 'Виктор',
    family: 'Онопко'
  },
  {
    name: 'Юлия',
    family: 'Топольницкая'
  },
  {
    name: 'Люпита',
    family: 'Нионго'
  },
  {
    name: 'Вашингтон',
    family: 'Ирвинг'
  }
];

var getRandElement = function (array) {
  var item = array[Math.floor(Math.random() * array.length)];
  return item;
};

var getWizard = function (names, coatColor, eyasColor) {
  var wizard = {
    wizardName: getRandElement(names).name + ' ' + getRandElement(names).family,
    wizardCoatColor: getRandElement(coatColor),
    wizardEyasColor: getRandElement(eyasColor)
  };
  return wizard;
};

var renderWizard = function (wizard) {
  var newWizardElement = similarWizardTemplate.cloneNode(true);

  newWizardElement.querySelector('.setup-similar-label').textContent = wizard.wizardName;
  newWizardElement.querySelector('.wizard-coat').style.fill = wizard.wizardCoatColor;
  newWizardElement.querySelector('.wizard-eyes').style.fill = wizard.wizardEyasColor;

  return newWizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < numberOfWizard; i++) {
  fragment.appendChild(renderWizard(getWizard(wizards, COAT_COLORS, EYAS_COLORS)));
  similarList.appendChild(fragment);
}

document.querySelector('.setup-similar').classList.remove('hidden');
