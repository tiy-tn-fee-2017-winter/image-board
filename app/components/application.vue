<template lang="html">
  <div class="app">
    <card-form></card-form>

    <div class="section">
      <div class="container container--bg">
        <card-list class="grid"></card-list>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import { findAll } from '../actions/post';

import CardForm from './card-form.vue';
import CardList from './card-list.vue';

export default {
  name: 'Application',

  components: {
    CardForm,
    CardList,
  },

  mounted() {
    store.dispatch(findAll());
  },
};
</script>
