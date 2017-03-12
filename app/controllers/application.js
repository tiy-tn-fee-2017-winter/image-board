import { findAll } from '../actions/post';
import FormView from '../views/form';
import PostList from '../views/list';

export default class ApplicationController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    const gridEl = this.el.querySelector('.grid');
    const pageTopEl = this.el.querySelector('.page-top');

    this.formView = new FormView(pageTopEl, store);
    this.listView = new PostList(gridEl, store);
  }

  created() {
    this.formView.mounted();
    this.listView.mounted();

    this.store.dispatch(findAll());
  }
}
