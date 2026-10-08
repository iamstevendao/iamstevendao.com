import { useEffect, useState } from 'react'
import alfredSublimeMerge from '@/assets/projects/alfred-open-with-sublime-merge.png'
import alfredVscode from '@/assets/projects/alfred-open-with-vscode.png'
import meteorGoogleCloud from '@/assets/projects/meteor-google-cloud.png'
import vueSuggestion from '@/assets/projects/vue-suggestion.png'
import vueTelInput from '@/assets/projects/vue-tel-input.png'
import avatar from '@/assets/avatar.png'
import speakerooIcon from '@/assets/speakeroo/icon.png'
import speakerooLogo from '@/assets/speakeroo/logo.webp'
import speakerooOwl from '@/assets/speakeroo/owl-hi.webp'

export const me = {
  name: 'Steven Dao',
  role: 'Technical Lead & Full-stack Engineer',
  avatar,
  email: 'hello@iamstevendao.com',
  github: 'https://github.com/iamstevendao',
  sponsor: 'https://github.com/sponsors/iamstevendao',
}

export const speakeroo = {
  name: 'Speakeroo',
  tagline: 'Free AI Speaking Coach',
  pitch:
    'Practice speaking English out loud and get scored feedback on pronunciation, fluency, grammar, vocabulary and confidence — right in your browser.',
  url: 'https://speakeroo.app?ref=iamstevendao.com',
  scores: ['Pronunciation', 'Fluency', 'Grammar', 'Vocabulary', 'Confidence'],
  logo: speakerooLogo,
  icon: speakerooIcon,
  owl: speakerooOwl,
}

export type Project = {
  name: string
  description: string
  url: string
  img: string
  repo?: string
  npm?: boolean
}

export const projects: Project[] = [
  {
    name: 'vue-tel-input',
    description: 'International telephone input for Vue',
    url: 'https://iamstevendao.github.io/vue-tel-input',
    img: vueTelInput,
    repo: 'iamstevendao/vue-tel-input',
    npm: true,
  },
  {
    name: 'vue-suggestion',
    description: 'Suggestion list input for Vue',
    url: 'https://iamstevendao.github.io/vue-suggestion/',
    img: vueSuggestion,
    repo: 'iamstevendao/vue-suggestion',
    npm: true,
  },
  {
    name: 'meteor-google-cloud',
    description: 'Automate Meteor deploys on Google App Engine Flexible',
    url: 'https://github.com/edvisor-io/meteor-google-cloud',
    img: meteorGoogleCloud,
    repo: 'edvisor-io/meteor-google-cloud',
    npm: true,
  },
  {
    name: 'alfred-open-with-vscode',
    description: 'Alfred workflow to open a folder in VS Code',
    url: 'https://github.com/iamstevendao/alfred-open-with-vscode',
    img: alfredVscode,
    repo: 'iamstevendao/alfred-open-with-vscode',
  },
  {
    name: 'alfred-open-with-sublime-merge',
    description: 'Alfred workflow to open a repo in Sublime Merge',
    url: 'https://github.com/iamstevendao/alfred-open-with-sublime-merge',
    img: alfredSublimeMerge,
  },
]

export type Stats = Record<string, { stars?: number; downloads?: number }>

export function useProjectStats() {
  const [stats, setStats] = useState<Stats>({})

  useEffect(() => {
    const merge = (name: string, patch: Stats[string]) =>
      setStats((prev) => ({ ...prev, [name]: { ...prev[name], ...patch } }))

    for (const { name, repo, npm } of projects) {
      if (repo) {
        fetch(`https://api.github.com/repos/${repo}`)
          .then((r) => (r.ok ? r.json() : null))
          .then((d) => d && merge(name, { stars: d.stargazers_count }))
          .catch(() => {})
      }
      if (npm) {
        fetch(`https://api.npmjs.org/downloads/point/last-month/${name}`)
          .then((r) => (r.ok ? r.json() : null))
          .then((d) => d && merge(name, { downloads: d.downloads }))
          .catch(() => {})
      }
    }
  }, [])

  return stats
}

export const compact = (n?: number) =>
  n === undefined ? undefined : Intl.NumberFormat('en', { notation: 'compact' }).format(n)

export const withRef = (url: string) =>
  url.includes('?') ? url : `${url}?ref=iamstevendao.com`
