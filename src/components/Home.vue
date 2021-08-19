<!-- Home -->

<template>
  <main class="home">
    <intro />
    <projects />
    <social class="social" />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Projects from './Projects.vue';
import Social from './Social.vue';
import Intro from './Intro.vue';

@Options({
  components: {
    Projects,
    Social,
    Intro,
  },
})
export default class Home extends Vue { }
</script>

<style lang="scss" scoped>
.home {
  padding-top: 2rem;
  padding-bottom: 2rem;
  .social {
    padding-top: 30px;
  }
}
</style>
