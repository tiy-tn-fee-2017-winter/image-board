<template lang="html">
  <div class="grid">
    <div v-for="post in posts" class="grid__item">
      <card-item v-bind:post="post"></card-item>
    </div>
  </div>
</template>

<script>
import store from '../store';
import CardItem from './card-item.vue';

export default {
  components: {
    CardItem
  },
  data() {
    store.subscribe(() => {
      this.posts = store.getState().posts;
    });

    return {
      posts: [],
    };
  },

  methods: {

  },
};
</script>
