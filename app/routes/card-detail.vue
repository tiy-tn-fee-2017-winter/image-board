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
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
