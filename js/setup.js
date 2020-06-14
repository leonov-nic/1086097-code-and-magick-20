'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var numberOfWizard = 4;

var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYAS_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

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
  var newWizardElement = similarWizardTemplate.cloneNode(true);

  newWizardElement.querySelector('.setup-similar-label').textContent = getRandElement(names).name + ' ' + getRandElement(names).family;
  newWizardElement.querySelector('.wizard-coat').style.fill = getRandElement(coatColor);
  newWizardElement.querySelector('.wizard-eyes').style.fill = getRandElement(eyasColor);

  return newWizardElement;
};

// var getWizards = function (arg) {

//   var newwizards = [];

//   for (var i = 0; i < arg; i++) {
//     newwizards.push(getWizard(wizards, COAT_COLOR, EYAS_COLOR)[i]);
//   }
//   return newwizards;
// };

// var fragment = document.createDocumentFragment();
// fragment.appendChild(getWizards(numberOfWizard));
// similarList.appendChild(fragment);

// document.querySelector('.setup-similar').classList.remove('hidden');

var fragment = document.createDocumentFragment();

for (var i = 0; i < numberOfWizard; i++) {
  fragment.appendChild(getWizard(wizards, COAT_COLOR, EYAS_COLOR));
}

similarList.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
