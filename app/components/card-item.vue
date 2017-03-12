<template lang="html">
  <div class="card">
    <img v-bind:src="post.url" v-bind:alt="post.caption" class="card__pic" />
    <h2 class="level">
      <div class="level__left">
        <span class="card__caption">{{ post.caption }}</span>
      </div>
      <div class="level__right">
        <button class="card__delete button button--danger">
          <div class="fa fa-remove"></div>
        </button>
      </div>
    </h2>
  </div>
</template>

<script>
export default {
  props: ['post'],
};
</script>
