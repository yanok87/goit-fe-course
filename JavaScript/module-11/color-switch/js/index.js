const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

body.addEventListener('click', handleClick);

let timerId = 0;

function handleClick(event) {
  event.preventDefault();

  if (event.target === buttonStart) {
    timerId = setInterval(() => {
      buttonStart.setAttribute('disabled', true);
      const randomColor = colors[randomIntegerFromInterval(0, 5)];
      body.style.backgroundColor = randomColor;
    }, 1000);

  }

  if (event.target === buttonStop) {
    buttonStart.removeAttribute('disabled');

    clearInterval(timerId);
  }
}





