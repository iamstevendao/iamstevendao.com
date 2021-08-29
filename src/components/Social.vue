<!-- Social -->

<template>
  <section class="container">
    <div class="social-item">
      <a class="btn btn-email block" href="mailto:hello@iamstevendao.com">
        Say <span class="highlight">hello@iamstevendao.com</span>
      </a>
      <span class="center description">Want to collaborate? Let's talk!</span>
    </div>
    <div class="social-item">
      <a class="btn" href="https://github.com/sponsors/iamstevendao?ref=iamstevendao.com"
        >Become a sponsor</a
      >
    </div>
    <div class="social-item">
      <a class="btn" href="https://github.com/iamstevendao?ref=iamstevendao.com"
        >View my projects</a
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
.container {
  display: flex;
  flex-direction: column;
}

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
    background-color: var(--bg-btn);
    text-align: center;
  }
}

.social-item {
  display: inline-block;
  vertical-align: top;
}

.description {
  color: var(--text-color-light);
  display: block;
  margin-top: 10px;
}

@media only screen and (min-width: 33.75em) {
  .container {
    flex-direction: row;
  }
  .social-item:first-of-type {
    margin-right: 15px;
  }
}
</style>
