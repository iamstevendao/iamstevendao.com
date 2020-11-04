<!-- Home -->

<template>
  <div class="home">
    <a href="#">
      <img
        src="../assets/avatar.jpeg"
        style="border-radius: 50%; width: 25%; min-width: 80px; max-width: 180px"
        alt="Steven Dao"
      />
    </a>
    <h1>Hi, I'm Steven Dao.</h1>
    <p>
      I'm building
      <a href="https://geteducation.link" target="_blank" rel="noopener">EducationLink</a>
      with the most awesome people on Earth.
    </p>
    <p>
      I create, maintain open source projects <br />
      and am a bit obsessed with dogs and cats.
    </p>
    <div style="margin-top: 20px">
      <strong>Find me at</strong>
      <a href="https://github.com/iamstevendao" rel="noopener" style="display: block;margin-top: 5px;">Github</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  @Prop() private msg!: string;
}
</script>
