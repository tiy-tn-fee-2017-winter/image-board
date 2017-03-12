import 'whatwg-fetch';

const form = document.querySelector('.top-form');
const navButton = document.querySelector('.form-toggle');
const cancelButton = document.querySelector('.button--cancel');
const urlInput = document.querySelector('[name=url]');
const captionInput = document.querySelector('[name=caption]');
const gridEl = document.querySelector('.grid');

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

      gridEl.insertBefore(postEl, gridEl.querySelector('.grid__item'));
    });

  toggleForm();
  clearForm();
});

fetch('https://tiny-tn.herokuapp.com/collections/image-board-rt')
  .then(res => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      const itemEl = document.createElement('div');
      itemEl.classList.add('grid__item');
      itemEl.innerHTML = `
        <div class="card">
          <img src="" alt="" class="card__pic">
          <h2 class="card__caption"></h2>
        </div>`;

      const imgEl = itemEl.querySelector('.card__pic');
      const captionEl = itemEl.querySelector('.card__caption');

      imgEl.src = item.url;
      imgEl.alt = item.caption;
      captionEl.innerText = item.caption;

      gridEl.appendChild(itemEl);
    }
  });
