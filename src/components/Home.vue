<!-- Home -->

<template>
  <div class="home">
    <img src="../assets/avatar.jpg"
         style="border-radius: 50%; width: 25%; min-width: 80px; max-width: 180px;"
         alt="Steven Dao's avatar">
    <h1>Hi, I'm Steven Dao.</h1>
    <p>
      I'm building webs with my friends at
      <a href="https://geteducation.link"
         target="_blank"
         rel="noopener">EducationLink</a>.
    </p>
    <p>I develop, maintain open source projects <br> and am a bit obsessed with dogs and cats.</p>
    <h3>Ping me at</h3>
    <ul>
      <li>
        <a href="https://github.com/iamstevendao"
           target="_blank"
           rel="noopener">Github</a>
      </li>
      <li>
        <a href="https://twitter.com/iamstevendao"
           target="_blank"
           rel="noopener">Twitter</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  @Prop() private msg!: string;
}
</script>
