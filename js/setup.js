'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

// var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
// var WIZARD_FAMILY = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

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

var getWizards = function (getWiz) {

  for (var i = 0; i < numberOfWizard; i++) {

    var newwizards = [];
    newwizards.push(getWiz(wizards, COAT_COLOR, EYAS_COLOR)[i]);

  }
};

var fragment = document.createDocumentFragment();
fragment.appendChild(getWizards(getWizard));
similarList.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');


// var renderWizard = function (array_name, array_family, coat_c, eyas_c) {
//   var newWizardElement = similarWizardTemplate.cloneNode(true);

//   newWizardElement.querySelector('.setup-similar-label').textContent = getRandElement(array_name) + " " + getRandElement(array_family);
//   // newWizardElement.querySelector('.setup-similar-label').textContent = getRandElement(array_family);
//   newWizardElement.querySelector('.wizard-coat').style.fill = getRandElement(coat_c);
//   newWizardElement.querySelector('.wizard-eyes').style.fill = getRandElement(eyas_c);

//   return newWizardElement;
// };

// similarList.appendChild(getWizards(wizard));

// document.querySelector('.setup-similar').classList.remove('hidden');


// var fragment = document.createDocumentFragment();

// for (var i = 0; i < 4; i++) {
//   fragment.appendChild(renderWizard(wizards, COAT_COLOR, EYAS_COLOR));
// }

// similarList.appendChild(fragment);

// var wizards = [
//   {
//     name: 'Иван',
//     family: 'да Марья'
//   },
//   {
//     name: 'Хуан Себастьян',
//     family: 'Верон'
//   },
//   {
//     name: 'Мария',
//     family: 'Мирабелла'
//   },
//   {
//     name: 'Кристоф',
//     family: 'Вальц'
//   },
//   {
//     name: 'Виктор',
//     family: 'Онопко'
//   },
//   {
//     name: 'Юлия',
//     family: 'Топольницкая'
//   },
//   {
//     name: 'Люпита',
//     family: 'Нионго'
//   },
//   {
//     name: 'Вашингтон',
//     family: 'Ирвинг'
//   }
// ];

// var getWizard = function (ctx) {
//   for (var i = 0; i < ctx.length; i++) {
//     var wizard = ctx[i].name + ' ' + ctx[i].family;
//     return wizard;
//   }
// };

// // getWizard(wizards);

// for (var i = 0; i < wizards.length - 5; i++) {
// var dd = getWizard(wizards);
// console.log(dd);
// };

// var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
// var EYAS_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];


// var renderWizard = function (wizard, cc, ec) {
//   var newWizardElement = similarWizardTemplate.cloneNode(true);

//   newWizardElement.querySelector('.setup-similar-label').textContent = getRand(wizard);
//   newWizardElement.querySelector('.wizard-coat').style.fill = getRand(cc);
//   newWizardElement.querySelector('.wizard-eyes').style.fill = getRand(ec);

//   return newWizardElement;
// };

// var fragment = document.createDocumentFragment();

// for (var i = 0; i < 4; i++) {
//   fragment.appendChild(renderWizard(wizards, COAT_COLOR, EYAS_COLOR));
// }

// similarList.appendChild(fragment);
