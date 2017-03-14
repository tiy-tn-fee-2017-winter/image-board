<template lang="html">
  <div class="app">
    <card-form></card-form>

    <div class="section">
      <div class="container container--bg">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import { findAll } from '../actions/post';

import CardForm from '../components/card-form.vue';

export default {
  name: 'Application',

  components: {
    CardForm,
  },

  mounted() {
    store.dispatch(findAll());
  },
};
</script>
