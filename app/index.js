import 'whatwg-fetch';

import renderPostList from './render-post-list';
import store from './store';
import { create, findAll } from './actions/post';

const form = document.querySelector('.top-form');
const navButton = document.querySelector('.form-toggle');
const cancelButton = document.querySelector('.button--cancel');
const urlInput = document.querySelector('[name=url]');
const captionInput = document.querySelector('[name=caption]');
const gridEl = document.querySelector('.grid');

store.subscribe(() => {
  renderPostList(gridEl, store.getState().posts);
});

function clearForm() {
  urlInput.value = '';
  captionInput.value = '';
}

function toggleForm() {
  navButton.querySelector('.form-toggle__icon')
    .classList.toggle('active');
  form.classList.toggle('top-form--active');
}

navButton.addEventListener('click', toggleForm);
cancelButton.addEventListener('click', () => {
  toggleForm();
  clearForm();
});

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const data = {
    url: urlInput.value,
    caption: captionInput.value,
  };

  store.dispatch(create(data));

  toggleForm();
  clearForm();
});

store.dispatch(findAll());
