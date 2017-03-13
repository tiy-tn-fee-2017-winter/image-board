<template lang="html">
  <div class="page-top">
    <header class="top-nav">
      <div class="container">
        <button class="form-toggle" @click="toggleForm">
          <span class="form-toggle__icon" v-bind:class="{ active }"></span>
        </button>
      </div>
    </header>
    <form class="top-form" @submit.prevent="save" v-bind:class="{ 'top-form--active': active }">
      <div class="container">
        <div class="form-control">
          <input v-model="newPost.url" type="text" class="form-control__input" name="url" placeholder="Image URL">
        </div>

        <div class="form-control">
          <input v-model="newPost.caption" type="text" class="form-control__input" name="caption" placeholder="Image Caption">
        </div>

        <div class="form-actions">
          <button type="button" class="button button--cancel">Cancel</button>
          <button class="button button--success">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { create } from '../actions/post';
import store from '../store';

export default {
  name: 'CardForm',

  data() {
    return {
      active: false,
      newPost: {
        url: '',
        caption: ''
      }
    };
  },

  methods: {
    toggleForm() {
      this.active = !this.active;
    },

    clearForm() {
      this.newPost = {
        url: '',
        caption: '',
      };
    },

    save() {
      store.dispatch(create(this.newPost));

      this.toggleForm();
      this.clearForm();
    },
  },
};
</script>
