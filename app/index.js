import 'whatwg-fetch';

const form = document.querySelector('.top-form');
const navButton = document.querySelector('.form-toggle');
const cancelButton = document.querySelector('.button--cancel');
const urlInput = document.querySelector('[name=url]');
const captionInput = document.querySelector('[name=caption]');
const gridEl = document.querySelector('.grid');

let postList = [];

function clearForm() {
  urlInput.value = '';
  captionInput.value = '';
}

function toggleForm() {
  navButton.querySelector('.form-toggle__icon')
    .classList.toggle('active');
  form.classList.toggle('top-form--active');
}

function createPostElement(post) {
  const postEl = document.createElement('div');
  postEl.classList.add('grid__item');

  postEl.innerHTML = `
    <div class="card">
      <img src="" alt="" class="card__pic" />
      <h2 class="card__caption"></h2>
    </div>`;

  postEl.querySelector('.card__pic').src = post.url;
  postEl.querySelector('.card__pic').alt = post.caption;
  postEl.querySelector('.card__caption').innerText = post.caption;

  return postEl;
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
      postList = [post, ...postList];

      gridEl.innerHTML = '';

      postList.map(createPostElement)
        .forEach((postEl) => {
          gridEl.appendChild(postEl);
        });
    });

  toggleForm();
  clearForm();
});

fetch('https://tiny-tn.herokuapp.com/collections/image-board-rt')
  .then(res => res.json())
  .then((data) => {
    postList = data;

    postList.map(createPostElement)
      .forEach((postEl) => {
        gridEl.appendChild(postEl);
      });
  });
