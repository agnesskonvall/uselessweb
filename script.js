function addDarkmodeWidget() {
  new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);

const madeBy = ['Made by', ' Agnes', ' Skönvall'];
const made = document.getElementById('made');

madeBy.forEach((element) => {
  made.textContent += element;
});

document.getElementById('clicker').addEventListener('click', function (event) {
  let count = document.getElementById('counter').textContent;
  parseInt(count);
  count++;
  document.getElementById('counter').textContent = count;
});

const countEl = document.getElementById('counter');
const buttonEl = document.getElementById('clicker');
const messageEl = document.getElementById('message');

const increment = (() => {
  let i = 1;

  return () => i++;
})();

buttonEl.addEventListener('click', () => {
  buttonEl.addEventListener('click', () => {
    if (increment() === 10) {
      messageEl.textContent = "You're supposed to click the button!";
    }
  });
});

let title = document.getElementById('title');

title.addEventListener(
  'mouseover',
  function (event) {
    event.target.style.color = 'purple';
    setTimeout(function () {
      event.target.style.color = '';
    }, 500);
  },
  false
);
