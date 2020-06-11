'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

// var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var getRand = function (ctx) {
  var rand = ctx[Math.floor(Math.random() * ctx.length)];
  return rand;
};

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
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYAS_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];


var renderWizard = function (wizard, cc, ec) {
  var newWizardElement = similarWizardTemplate.cloneNode(true);

  newWizardElement.querySelector('.setup-similar-label').textContent = getRand(wizard);
  newWizardElement.querySelector('.wizard-coat').style.fill = getRand(cc);
  newWizardElement.querySelector('.wizard-eyes').style.fill = getRand(ec);

  return newWizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(wizards, COAT_COLOR, EYAS_COLOR));
}

similarList.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
