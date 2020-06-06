/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line strict
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

// eslint-disable-next-line no-undef
var firstnames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var lastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var names = [];
var CoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EyesColor = [black, red, blue, yellow, green];
var coatColors = [];
var eyesColors = [];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
for (var i = 0; i < 4; i++) {
  names.append(firstnames[Math.floor(Math.random() * firstnames.length)] + ' ' + lastnames[Math.floor(Math.random() * lastnames.length)]);
}
var firstFunction = function (firstList, secondList) {
  secondList.append(firstList[Math.floor(Math.random() * firstList.length)]);
};
firstFunction(CoatColor, coatColors);
firstFunction(EyesColor, eyesColors);
for (i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = names[i];
  similarListElement.appendChild(wizardElement);
}
var wizards = {
  {
    name: names[0],
    coatColor: coatColors[0],
    eyesColor: eyesColors[0]
  },
  {
    name: names[1],
    coatColor: coatColors[1],
    eyesColor: eyesColors[1]
  },
  {
    name: names[2],
    coatColor: coatColors[2],
    eyesColor: eyesColors[2]
  }
  {
    name: names[3],
    coatColor: coatColors[3],
    eyesColor: eyesColors[3]
  }
};
var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
