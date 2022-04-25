function changeMode() {
  changeClasses();
  changeText();
}

function changeClasses() {
  $header.classList.toggle('dark-mode2');
  $main.classList.toggle('dark-mode');
  $btn.classList.toggle('dark-mode2');
  $footer.classList.toggle('dark-mode2');
  $h1.classList.toggle('dark-mode3');
}

function changeText() {
  if ($btn.classList.contains('dark-mode2')) {
    $btn.innerHTML = 'Light Mode';
    $h1.innerHTML = 'Dark Mode ON';
    return;
  }
  $btn.innerHTML = 'Dark Mode';
  $h1.innerHTML = 'Light Mode ON';
}

const $header = document.querySelector('#header');
const $main = document.querySelector('#main');
const $btn = document.querySelector('#mode-selection');
const $footer = document.querySelector('#footer');
const $h1 = document.querySelector('#page-title');

$btn.addEventListener('click', changeMode);