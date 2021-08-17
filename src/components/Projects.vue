<!-- Projects -->

<template>
  <section class="projects container">
    <div class="row">
      <div v-for="project in projects" :key="project.name" class="col-6 project">
        <a :href="`${project.url}?ref=iamstevendao.com`">
          <div class="row">
            <div class="col-3">
              <img v-if="project.img" :src="project.img" />
            </div>
            <div class="col-9">
              <strong class="title">{{ project.name }}</strong>
              <span class="description">{{ project.description }}</span>
            </div>
          </div>
        </a>
      </div>
      <div class="col-3">View more at</div>
    </div>
  </section>
</template>

<script lang="ts">
/* eslint-disable global-require */
import { Vue } from 'vue-class-component';

export default class Projects extends Vue {
  projects = [
    {
      name: 'vue-tel-input',
      url: 'https://iamstevendao.github.io/vue-tel-input',
      description: 'International Telephone Input with Vue',
      img: require('../assets/vue-tel-input.png'),
    },
    {
      name: 'vue-suggestion',
      url: 'https://iamstevendao.github.io/vue-suggestion/',
      description: 'Suggestion List Input with Vue',
      img: require('../assets/vue-suggestion.png'),
    },
    {
      name: 'meteor-google-cloud',
      url: 'https://github.com/edvisor-io/meteor-google-cloud',
      description: 'Automate Meteor deployments on Google Cloud App Engine Flexible',
    },
    {
      name: 'alfred-open-with-vscode',
      url: 'https://github.com/iamstevendao/alfred-open-with-vscode',
      description: 'Alfred workflow for opening a folder with VS Code',
    },
    {
      name: 'alfred-open-with-sublime-merge',
      url: 'https://github.com/iamstevendao/alfred-open-with-sublime-merge',
      description: 'Alfred workflow for opening a git folder with Sublime Merge',
    },
  ];
}
</script>

<style lang="scss" scoped>
.project {
  a {
    text-decoration: none;
  }
  img {
    width: 100%;
    border-radius: 8px;
  }
  .title {
    color: var(--text-color-normal);
    display: block;
  }
  .description {
    color: var(--text-color-light);
    display: block;
  }
}
</style>
