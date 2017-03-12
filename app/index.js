import 'whatwg-fetch';

import PostList from './views/list';
import FormView from './views/form';
import store from './store';
import { findAll } from './actions/post';

const gridEl = document.querySelector('.grid');
const pageTopEl = document.querySelector('.page-top');

const formView = new FormView(pageTopEl, store);
formView.mounted();

const listView = new PostList(gridEl, store);
listView.mounted();

store.dispatch(findAll());
