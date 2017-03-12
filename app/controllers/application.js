import Vue from 'vue';

import { findAll } from '../actions/post';
import CardList from '../components/card-list.vue';
import CardForm from '../components/card-form.vue';

export default class ApplicationController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.cardForm = new Vue(CardForm);
    this.cardList = new Vue(CardList);
  }

  created() {
    this.cardForm.$mount('.page-top');
    this.cardList.$mount('.grid');

    this.store.dispatch(findAll());
  }
}
