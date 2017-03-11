import 'whatwg-fetch';

const form = document.querySelector('.top-form');
const navButton = document.querySelector('.form-toggle');

navButton.addEventListener('click', () => {
  navButton.querySelector('.form-toggle__icon')
    .classList.toggle('active');
  form.classList.toggle('top-form--active');
});

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const urlInput = document.querySelector('[name=url]');
  const captionInput = document.querySelector('[name=caption]');

  const data = {
    url: urlInput.value,
    caption: captionInput.value,
  };

  fetch('https://tiny-tn.herokuapp.com/collections/image-board-rt', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  navButton.querySelector('.form-toggle__icon')
    .classList.toggle('active');
  form.classList.toggle('top-form--active');

  urlInput.value = '';
  captionInput.value = '';
});

const data = [
  {
    _id: '58c441d9b1248c000420e486',
    url: 'http://placecage.com/200/200',
    caption: 'Cage'
  },
  {
    _id: '58c44220b1248c000420e487',
    url: 'http://placecera.com/200/200',
    caption: 'Cera'
  }
];

const gridEl = document.querySelector('.grid');

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
