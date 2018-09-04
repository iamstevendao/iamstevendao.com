<!-- Home -->

<template>
  <div class="home">
    <h1>Hi, I'm Steven Dao.</h1>
    <p>
      I'm building webs with my friends at
      <a href="https://geteducation.link"
         target="_blank"
         rel="noopener">EducationLink</a>.
    </p>
    <p>I spend my free time watching dog, cat<br> and working on open source projects.</p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  display: table-cell;
  vertical-align: middle;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  font-weight: 500;
  text-decoration: none;
  color: #b02000;
}
</style>
