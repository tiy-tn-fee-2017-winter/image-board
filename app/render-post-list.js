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

export default function renderPostList(el, list) {
  el.innerHTML = '';

  list.map(createPostElement)
    .forEach((postEl) => {
      el.appendChild(postEl);
    });
}
