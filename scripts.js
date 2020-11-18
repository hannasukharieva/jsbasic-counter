let buttonIncrease = document.querySelector('.counter__button--increase');
let buttonDecrease = document.querySelector('.counter__button--decrease');
let counterNumber = document.querySelector('.counter__number');
let clicksValue = 0;

buttonIncrease.addEventListener('click', increaseValue);
buttonDecrease.addEventListener('click', decreaseValue);

function increaseValue() {
  clicksValue++;
  counterNumber.textContent = clicksValue;
  colorCheck();
}

function decreaseValue() {
  clicksValue--;
  counterNumber.textContent = clicksValue;
  colorCheck();
}

function colorCheck() {
  if (clicksValue <= 0) {
    counterNumber.style.color = 'red';
  } else if (clicksValue <= 10) {
    counterNumber.style.color = 'yellow';
  } else {
    counterNumber.style.color = 'green';
  } 
}
