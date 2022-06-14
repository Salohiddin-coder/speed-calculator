var elForm = document.querySelector('.form');
var elInput = document.querySelector('.form__input');
var elButton = document.querySelector('form__button');
var elHumanText = document.querySelector('.human');
var elBikeText = document.querySelector('.bike');
var elCarText = document.querySelector('.car');
var elPlaneText = document.querySelector('.plane');
var humanSpeed = 3.6;
var bikeSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;

function humanSpeedCalculate(length) {
  return length / humanSpeed
}

function bikeSpeedCalculate(length) {
  return length / bikeSpeed
}

function carSpeedCalculate(length) {
  return length / carSpeed
}

function planeSpeedCalculate(length) {
  return length / planeSpeed
}

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var elDistance = elInput.value;

  if(elDistance >= 0){
    elHumanText.textContent = Math.round(humanSpeedCalculate(elDistance)) + " " + 'soat' + ' ' +
    ((humanSpeedCalculate(elDistance) - Math.floor(humanSpeedCalculate(elDistance)))*60).toFixed()+"daqiqa";
    elBikeText.textContent = Math.round(bikeSpeedCalculate(elDistance)) + " " + 'soat' + ' ' +
    ((bikeSpeedCalculate(elDistance) - Math.floor(bikeSpeedCalculate(elDistance)))*60).toFixed()+"daqiqa";
    elCarText.textContent = Math.round(carSpeedCalculate(elDistance)) + " " + 'soat' + ' ' +
    ((carSpeedCalculate(elDistance) - Math.floor(carSpeedCalculate(elDistance)))*60).toFixed()+"daqiqa";
    elPlaneText.textContent = Math.round(planeSpeedCalculate(elDistance)) + " " + 'soat' + ' ' +
    ((planeSpeedCalculate(elDistance) - Math.floor(planeSpeedCalculate(elDistance)))*60).toFixed()+"daqiqa";
  } else{
    alert("Iltimos musbat son kiriting")
  }
})

