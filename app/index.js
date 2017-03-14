import 'whatwg-fetch';

import Vue from 'vue';
import VueRouter from 'vue-router';

import Application from './routes/application.vue';
import CardList from './routes/card-list.vue';
import CardDetail from './routes/card-detail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: CardList
  },
  {
    path: '/posts/:id',
    name: 'detail',
    component: CardDetail
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

const appEl = document.querySelector('.app');

const app = new Vue({ ...Application, router });
app.$mount(appEl);
