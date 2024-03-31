let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.bx-search');
let adminContainer = document.querySelector('.admin-dashboard-container');

function active(element) {
  element.classList.toggle('active');
  adminContainer.classList.toggle('active');
  btn.classList.toggle('bx-x');

  if (btn.classList.contains('bx-x')) {
    btn.style.fontSize = '24px';
  } else {
    btn.style.fontSize = '20px';
  }
}

if (btn.classList.contains('bx-x')) {
  btn.fontSize;
}

btn.addEventListener('click', function () {
  active(sidebar);
});

searchBtn.addEventListener('click', function () {
  active(sidebar);
});
