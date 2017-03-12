<template lang="html">
  <div class="page-top">
    <header class="top-nav">
      <div class="container">
        <button class="form-toggle" @click="toggleForm">
          <span class="form-toggle__icon" v-bind:class="{ active }"></span>
        </button>
      </div>
    </header>
    <form class="top-form" v-bind:class="{ 'top-form--active': active }">
      <div class="container">
        <div class="form-control">
          <input type="text" class="form-control__input" name="url" placeholder="Image URL">
        </div>

        <div class="form-control">
          <input type="text" class="form-control__input" name="caption" placeholder="Image Caption">
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
export default {
  name: 'CardForm',
  data() {
    return {
      active: false
    };
  },

  methods: {
    toggleForm() {
      this.active = !this.active;
    }
  },
};
</script>
