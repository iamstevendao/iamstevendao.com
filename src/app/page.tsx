import Projects from '@/components/projects'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-3xl">
        <Projects />
      </div>
    </main>
  )
}
