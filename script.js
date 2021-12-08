const button = document.querySelector('.celebration-button');
const counter = document.querySelector('body');
let count = 0;

button.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

const message = document.getElementById('message');
const bodyArea = document.getElementById('body');

const messages = [
  "Oh. You thought you had it, didn't you?",
  "You're supposed to click the button, not me!",
  'Try again!',
];

bodyArea.addEventListener('click', () => {
  const randomElement = messages[Math.floor(Math.random() * messages.length)];
  message.innerHTML = randomElement;
});

const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});
