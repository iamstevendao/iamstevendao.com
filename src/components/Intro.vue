<!-- Intro -->

<template>
  <section class="intro container">
    <div class="row">
      <div class="col-10">
        <img src="../assets/avatar.png" style="width: 60px" alt="Steven Dao" />
      </div>
      <div class="col-2">
        <button class="theme" @click="toggleTheme">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24">
            <path
              v-if="userTheme === 'dark'"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
            <path
              v-else
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </div>
      <div class="col-12">
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

function getMediaPreference(): string {
  return localStorage.getItem('theme')
    || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
}

export default class Social extends Vue {
  userTheme = 'light';

  mounted(): void {
    const initUserTheme = getMediaPreference();
    this.setTheme(initUserTheme);
  }

  toggleTheme(): void {
    const activeTheme = localStorage.getItem('theme');
    if (activeTheme === 'light') {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  }

  setTheme(theme: string): void {
    localStorage.setItem('theme', theme);
    this.userTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
  }
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
button.theme {
  cursor: pointer;
  fill: var(--color-highlight);
  stroke: var(--color-highlight);
  background-color: var(--bg-btn);
  height: 40px;
  width: 40px;
  border: none;
  margin-top: 20px;
  border-radius: 50%;
}
</style>
