import 'whatwg-fetch';

const form = document.querySelector('.top-form');
const navButton = document.querySelector('.form-toggle');

navButton.addEventListener('click', () => {
  navButton.querySelector('.form-toggle__icon')
    .classList.toggle('active');
  form.classList.toggle('top-form--active');
});
