<!-- Projects -->

<template>
  <section class="projects container">
    <div class="row">
      <div v-for="project in projects" :key="project.name" class="col-6 project">
        <a :href="project.url">
          <div class="row">
            <div class="col-3">
              <img :src="project.img" />
            </div>
            <div class="col-9">
              <span class="title">{{ project.name }}</span>
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
      url: 'https://iamstevendao.github.io/vue-tel-input',
      description: 'International Telephone Input with Vue',
      img: require('../assets/vue-tel-input.png'),
    },
    {
      name: 'meteor-google-cloud',
      url: 'https://iamstevendao.github.io/vue-tel-input',
      description: 'Automate Meteor deployments on Google Cloud App Engine Flexible',
      img: require('../assets/vue-tel-input.png'),
    },
    {
      name: 'alfred-open-with-vscode',
      url: 'https://iamstevendao.github.io/vue-tel-input',
      description: 'Alfred workflow for opening a folder with VS Code',
      img: require('../assets/vue-tel-input.png'),
    },
    {
      name: 'alfred-open-with-sublime-merge',
      url: 'https://iamstevendao.github.io/vue-tel-input',
      description: 'International Telephone Input with Vue',
      img: require('../assets/vue-tel-input.png'),
    },
  ];
}
</script>

<style scoped>
.project img {
  width: 90%;
  border-radius: 8px;
}
.project span.title {
  display: block;
}
.project span.description {
  display: block;
}
</style>
