<template lang="html">
  <div class="grid">
    <div class="grid__item">
      <form class="card">
        <h2>Editing --Photo Caption Here--</h2>
        <div class="form-control">
          <input type="text" class="form-control__input">
        </div>
        <div class="form-control">
          <input type="text" class="form-control__input">
        </div>

        <div class="form-actions">
          <router-link v-bind:to="{ name: 'index' }" class="button button--cancel">Back</router-link>
          <button class="button button--danger">Delete</button>
          <button class="button button--success">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import store from '../store';
import { findOne } from '../actions/post';

export default {
  name: 'CardDetail',
  data() {
    return {
      posts: this.$select('posts'),
      currentPost: null,
    };
  },

  mounted() {
    store.dispatch(findOne(this.$route.params.id));
  },

  watch: {
    posts: 'findPost'
  },

  methods: {
    findPost() {
      this.currentPost = this.posts.find(p => p._id == this.$route.params.id);
    }
  },
};
</script>
