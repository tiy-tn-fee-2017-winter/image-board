import { destroy } from '../actions/post';

class PostItem {
  constructor(post, store) {
    this.post = post;
    this.store = store;
    this.el = document.createElement('div');
    this.el.classList.add('grid__item');

    this.el.innerHTML = `
      <div class="card">
        <img src="" alt="" class="card__pic" />
        <h2 class="level">
          <div class="level__left">
            <span class="card__caption"></span>
          </div>
          <div class="level__right">
            <button class="card__delete button button--danger">
              <div class="fa fa-remove"></div>
            </button>
          </div>
        </h2>
      </div>`;
  }

  mounted() {
    this.el.querySelector('.card__delete').addEventListener('click', () => {
      this.store.dispatch(destroy(this.post));
    });
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

    this.store.getState().posts.map(p => new PostItem(p, this.store))
      .forEach((postView) => {
        postView.render();
        postView.mounted();
        this.el.appendChild(postView.el);
      });
  }
}
