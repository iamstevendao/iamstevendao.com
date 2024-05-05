'use-client'

import Intro from '@/components/intro'
import Projects from '@/components/projects'
import Social from '@/components/social'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-3xl flex flex-col gap-6">
        <Intro />
        <Projects />
        <Social />
      </div>
    </main>
  )
}
