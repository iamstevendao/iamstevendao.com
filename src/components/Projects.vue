<!-- Projects -->

<template>
  <section class="projects container">
    <div class="row">
      <div v-for="project in projects" :key="project.name" class="col-md-6 col-12">
        <div class="project">
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
      </div>
      <div class="col-md-6 col-12">
        <span class="center view-more"
          >View more at
          <a href="https://github.com/iamstevendao?ref=iamstevendao.com">
            github/iamstevendao</a
          ></span
        >
      </div>
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
      img: require('../assets/projects/vue-tel-input.png'),
    },
    {
      name: 'vue-suggestion',
      url: 'https://iamstevendao.github.io/vue-suggestion/',
      description: 'Suggestion List Input with Vue',
      img: require('../assets/projects/vue-suggestion.png'),
    },
    {
      name: 'meteor-google-cloud',
      url: 'https://github.com/edvisor-io/meteor-google-cloud',
      img: require('../assets/projects/meteor-google-cloud.png'),
      description: 'Automate Meteor deployments on Google Cloud App Engine Flexible',
    },
    {
      name: 'alfred-open-with-vscode',
      url: 'https://github.com/iamstevendao/alfred-open-with-vscode',
      img: require('../assets/projects/alfred-open-with-vscode.png'),
      description: 'Alfred workflow for opening a folder with VS Code',
    },
    {
      name: 'alfred-open-with-sublime-merge',
      url: 'https://github.com/iamstevendao/alfred-open-with-sublime-merge',
      img: require('../assets/projects/alfred-open-with-sublime-merge.png'),
      description: 'Alfred workflow for opening a git folder with Sublime Merge',
    },
  ];
}
</script>

<style lang="scss" scoped>
.projects {
  .project {
    padding: 15px 0;
  }

  a {
    text-decoration: none;
  }

  a:hover .title {
    color: var(--color-link-focus);
  }

  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    max-height: 70px;
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

  .view-more {
    padding: 20px;
    display: block;
  }
}
</style>
