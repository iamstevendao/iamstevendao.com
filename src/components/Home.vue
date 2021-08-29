<!-- Home -->

<template>
  <main class="home">
    <intro />
    <projects />
    <social />
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

<style scoped>
.home {
  @apply max-w-2xl mx-auto py-8;
}
</style>
