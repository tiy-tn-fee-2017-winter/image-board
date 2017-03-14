<template lang="html">
  <div class="grid">
    <div v-for="post in posts" class="grid__item">
      <card-item v-bind:key="post._id" @destroy="destroy" v-bind:post="post"></card-item>
    </div>
  </div>
</template>

<script>
import store from '../store';
import CardItem from '../components/card-item.vue';
import { destroy } from '../actions/post';

export default {
  name: 'CardList',
  components: {
    CardItem
  },
  data() {
    return {
      posts: this.$select('posts'),
    };
  },

  methods: {
    destroy(post) {
      store.dispatch(destroy(post));
    },
  },
};
</script>
