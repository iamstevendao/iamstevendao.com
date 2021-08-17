<!-- Social -->

<template>
  <section class="social container">
    <a class="btn-email" href="mailto:hello@iamstevendao.com">
      Say <span class="highlight">hello@iamstevendao.com</span>
    </a>
    <a href="https://github.com/iamstevendao?ref=iamstevendao.com">View my projects</a>
    <a href="https://github.com/sponsors/iamstevendao?ref=iamstevendao.com">Become a sponsor</a>
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
    padding: 10px;
    text-decoration: none;
    color: var(--text-color-normal);

    &.btn-email {
      text-decoration: none;
      padding: 10px;
      border: 0.5px solid var(--btn-border);
      border-radius: 10px;
    }
  }
  .highlight {
    color: #805de1;
  }
}
</style>
