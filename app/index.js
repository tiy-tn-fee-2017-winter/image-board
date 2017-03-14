import 'whatwg-fetch';

import Vue from 'vue';
import Application from './components/application.vue';
const appEl = document.querySelector('.app');

const app = new Vue(Application);
app.$mount(appEl);
