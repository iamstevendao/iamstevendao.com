<!-- Intro -->

<template>
  <section class="intro">
    <div class="flex justify-between">
      <img src="../assets/avatar.png" width="60" height="60" alt="Steven Dao" />
      <button
        class="theme-toggler highlight bg-highlight"
        @click="toggleTheme"
        aria-label="Theme Toggler"
      >
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
    <div>
      <h1 class="name">Steven Dao</h1>
      <h2 class="role">
        Technical Lead/Full Stack Dev &
        <span class="tooltip">Ailurophilic&nbsp;<span class="tooltip-text">🐱</span></span>
        <span class="tooltip">Cynophilist<span class="tooltip-text">🐶</span></span>
      </h2>
      <p>
        I work at
        <a
          href="https://edvisor.io?ref=iamstevendao.com"
          target="_blank"
          rel="noopener"
          class="text-link"
        >
          Edvisor</a
        >
        to streamline international education for everyone.
      </p>
      <p>I also make some open-source packages, mostly in Vue, Meteor & Alfred.</p>
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
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
</script>

<style lang="scss" scoped>
h1.name {
  @apply font-semibold;
}

h2.role {
  @apply font-light;
}

button.theme-toggler {
  @apply fill-current stroke-current rounded-full;
  height: 40px;
  width: 40px;
  margin-top: 20px;
  padding: 8px;
}

.tooltip {
  position: relative;

  .tooltip-text {
    visibility: hidden;
    text-align: center;
    font-size: 40px;
    position: absolute;
    z-index: 1;
    bottom: 80%;
    left: 50%;
    margin-left: -25px;
  }

  &:hover {
    color: var(--color-highlight);

    .tooltip-text {
      visibility: visible;
    }
  }
}
</style>
