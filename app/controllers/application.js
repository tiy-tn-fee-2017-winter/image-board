import Vue from 'vue';

import { findAll } from '../actions/post';
import FormView from '../views/form';
import PostList from '../views/list';
import CardList from '../components/card-list.vue';

export default class ApplicationController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    const pageTopEl = this.el.querySelector('.page-top');

    this.formView = new FormView(pageTopEl, store);
    this.cardList = new Vue(CardList);
  }

  created() {
    this.formView.mounted();
    this.cardList.$mount('.grid');

    this.store.dispatch(findAll());
  }
}
