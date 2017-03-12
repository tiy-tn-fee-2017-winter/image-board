class PostItem {
  constructor(post) {
    this.post = post;
    this.el = document.createElement('div');
    this.el.classList.add('grid__item');

    this.el.innerHTML = `
      <div class="card">
        <img src="" alt="" class="card__pic" />
        <h2 class="card__caption"></h2>
      </div>`;
  }

  render() {
    this.el.querySelector('.card__pic').src = this.post.url;
    this.el.querySelector('.card__pic').alt = this.post.caption;
    this.el.querySelector('.card__caption').innerText = this.post.caption;
  }
}

export default class PostList {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.store.subscribe(() => {
      this.render();
    });
  }

  render() {
    this.el.innerHTML = '';

    this.store.getState().posts.map(p => new PostItem(p))
      .forEach((postView) => {
        postView.render();
        this.el.appendChild(postView.el);
      });
  }
}
