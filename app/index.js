import 'whatwg-fetch';

import renderPostList from './render-post-list';
import store from './store';
import { createComplete, findAllComplete } from './actions/post';

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

  fetch('https://tiny-tn.herokuapp.com/collections/image-board-rt', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(res => res.json())
    .then((post) => {
      store.dispatch(createComplete(post));
    });

  toggleForm();
  clearForm();
});

fetch('https://tiny-tn.herokuapp.com/collections/image-board-rt')
  .then(res => res.json())
  .then((posts) => {
    store.dispatch(findAllComplete(posts));
  });
