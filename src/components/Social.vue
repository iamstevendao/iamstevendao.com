<!-- Social -->

<template>
  <section class="social container">
    <div class="inline-block">
      <a class="btn btn-email block" href="mailto:hello@iamstevendao.com">
        Say <span class="highlight">hello@iamstevendao.com</span>
      </a>
      <span class="center description">Want to collaborate? Let's talk!</span>
    </div>
    <div class="inline-block">
      <a class="btn" href="https://github.com/iamstevendao?ref=iamstevendao.com"
        >View my projects</a
      >
    </div>
    <div class="inline-block">
      <a class="btn" href="https://github.com/sponsors/iamstevendao?ref=iamstevendao.com"
        >Become a sponsor</a
      >
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Social extends Vue {
}
</script>

<style lang="scss" scoped>
.social {
  a {
    text-decoration: none;

    &.btn {
      padding: 15px;
      display: block;
    }

    &.btn-email {
      color: var(--text-color-normal);
      text-decoration: none;
      border-radius: 15px;
      border: 0.5px solid var(--btn-border);
      background-color: var(--bg-btn);
    }
  }

  .inline-block {
    vertical-align: top;
    margin-right: 15px;
  }

  .description {
    color: var(--text-color-light);
    display: block;
    margin-top: 10px;
  }
}
</style>
