import 'whatwg-fetch';

import store from './store';
import ApplicationController from './controllers/application';

const appEl = document.querySelector('.app');

const app = new ApplicationController(appEl, store);
app.created();
