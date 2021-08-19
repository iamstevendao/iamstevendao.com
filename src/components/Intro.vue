<!-- Intro -->

<template>
  <section class="intro container">
    <div class="pure-g">
      <div class="pure-u-1-1">
        <img src="../assets/avatar.png" style="border-radius: 50%; width: 60px" alt="Steven Dao" />
      </div>
      <div class="pure-u-1-1">
        <h1 class="name">Steven Dao</h1>
        <h2 class="role">Technical Lead/Full Stack Dev & Ailurophilic Cynophilist</h2>
        <p>
          I work at
          <a href="https://edvisor.io?ref=iamstevendao.com" target="_blank" rel="noopener">
            Edvisor</a
          >
          to streamline international education for everyone.
        </p>
        <p>I also make some open-source packages, mostly in Vue, Meteor & Alfred.</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Social extends Vue {
}
</script>

<style scoped>
.intro h1.name {
  margin: 0;
  font-weight: 500;
}
.intro h2.role {
  margin: 0;
  font-weight: 300;
}
.intro p {
  font-size: 1.3rem;
}
</style>
