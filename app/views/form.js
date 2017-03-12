import { create } from '../actions/post';

export default class FormView {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.formEl = this.el.querySelector('.top-form');
    this.navButtonEl = this.el.querySelector('.form-toggle');
    this.cancelButtonEl = this.el.querySelector('.button--cancel');
    this.urlInputEl = this.el.querySelector('[name=url]');
    this.captionInputEl = this.el.querySelector('[name=caption]');
  }

  clearForm() {
    this.urlInputEl.value = '';
    this.captionInputEl.value = '';
  }

  toggleForm() {
    this.navButtonEl.querySelector('.form-toggle__icon')
      .classList.toggle('active');
    this.formEl.classList.toggle('top-form--active');
  }

  mounted() {
    this.navButtonEl.addEventListener('click', this.toggleForm.bind(this));
    this.cancelButtonEl.addEventListener('click', () => {
      this.toggleForm();
      this.clearForm();
    });

    this.formEl.addEventListener('submit', (ev) => {
      ev.preventDefault();

      const data = {
        url: this.urlInputEl.value,
        caption: this.captionInputEl.value,
      };

      this.store.dispatch(create(data));

      this.toggleForm();
      this.clearForm();
    });
  }
}
