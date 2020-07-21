'use strict';

(function () {

  var setup = document.querySelector('.setup');
  setup.classList.remove('hidden');

  var similarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var numberOfWizard = 4;

  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYAS_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

  // var getRandElement = function (array) {
  //   var item = array[Math.floor(Math.random() * array.length)];
  //   return item;
  // };

  // var getWizard = function (names, coatColor, eyasColor) {
  //   var wizard = {
  //     wizardName: getRandElement(names).name + ' ' + getRandElement(names).family,
  //     wizardCoatColor: getRandElement(coatColor),
  //     wizardEyasColor: getRandElement(eyasColor)
  //   };
  //   return wizard;
  // };

  // СТАРЫЙ РЕНДЕР

  //  var renderWizard = function (wizard) {
  //   var newWizardElement = similarWizardTemplate.cloneNode(true);

  //   newWizardElement.querySelector('.setup-similar-label').textContent = wizard.wizardName;
  //   newWizardElement.querySelector('.wizard-coat').style.fill = wizard.wizardCoatColor;
  //   newWizardElement.querySelector('.wizard-eyes').style.fill = wizard.wizardEyasColor;

  //   return newWizardElement;
  // };

  // var fragment = document.createDocumentFragment();
  // for (var i = 0; i < numberOfWizard; i++) {
  //   fragment.appendChild(renderWizard(getWizard(wizards, COAT_COLORS, EYAS_COLORS)));
  //   similarList.appendChild(fragment);
  // }
  // document.querySelector('.setup-similar').classList.remove('hidden');

  // НОВЫЙ РЕНДЕР

  var renderWizard = function (wizard) {
    var newWizardElement = similarWizardTemplate.cloneNode(true);

    newWizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    newWizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    newWizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return newWizardElement;
  };

  // colorize.js

  var userNameField = document.querySelector('.setup-user-name');
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var coatColorField = document.querySelector('.setup-coat-color');
  var eyesColorField = document.querySelector('.setup-eyes-color');
  var fireballColorField = document.querySelector('.setup-fireball-color');

  window.util.colorize(wizardCoat, coatColorField, COAT_COLORS);
  window.util.colorize(wizardEyes, eyesColorField, EYAS_COLORS);
  window.util.colorize(wizardFireball, fireballColorField, FIREBALL_COLORS);

  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;

  window.form.validateName(userNameField);
  window.form.validateNameLength(userNameField, MIN_NAME_LENGTH, MAX_NAME_LENGTH);

  var onload = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < numberOfWizard; i++) {
      var randomWizard = window.util.getRandomElementArray(wizards);
      fragment.appendChild(renderWizard(randomWizard));
    }
    similarList.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
    setup.classList.add('hidden');
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; margin: 80px; text-align: center; background-color: black; padding: 50px;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(onload, onError);

  // wizardCoat.addEventListener('click', function () {
  //   var newCoatColor = getRandomColor(COAT_COLORS);
  //   coatColorField.value = newCoatColor;
  //   wizardCoat.style.fill = newCoatColor;

  // });

  // wizardEyes.addEventListener('click', function () {
  //   var newEyesColor = getRandomColor(EYAS_COLORS);
  //   eyesColorField.value = newEyesColor;
  //   wizardEyes.style.fill = newEyesColor;
  // });

  // wizardFireball.addEventListener('click', function () {
  //   var newFireballColor = getRandomColor(FIREBALL_COLORS);
  //   fireballColorField.value = newFireballColor;
  //   wizardFireball.style.background = newFireballColor;
  // });

  // userNameField.addEventListener('invalid', function () {
  //   if (userNameField.validity.tooShort) {
  //     userNameField.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  //   } else if (userNameField.validity.tooLong) {
  //     userNameField.setCustomValidity('Имя не должно превышать 25-ти символов');
  //   } else if (userNameField.validity.valueMissing) {
  //     userNameField.setCustomValidity('Обязательное поле');
  //   } else {
  //     userNameField.setCustomValidity('');
  //   }
  // });

  // userNameField.addEventListener('input', function () {
  //   var valueLength = userNameField.value.length;

  //   if (valueLength < MIN_NAME_LENGTH) {
  //     userNameField.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  //   } else if (valueLength > MAX_NAME_LENGTH) {
  //     userNameField.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  //   } else {
  //     userNameField.setCustomValidity('');
  //   }
  // });
})();
