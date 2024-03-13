const h1 = document.querySelector('.test');

function green(element) {
  element.classList.add('green');
  element.classList.remove('red');
}

function red(element) {
  element.classList.add('red');
  element.classList.remove('green');
}

h1.addEventListener('mouseover', function () {
  green(h1);
});

h1.addEventListener('mouseleave', function () {
  red(h1);
});
