const theElements = document.querySelectorAll('.test');

function green(element) {
  element.classList.add('green');
  element.classList.remove('red');
}

function red(element) {
  element.classList.add('red');
  element.classList.remove('green');
}

theElements.forEach(function (element) {
  element.addEventListener('mouseover', function () {
    green(element);
  });

  element.addEventListener('mouseleave', function () {
    red(element);
  });
});
