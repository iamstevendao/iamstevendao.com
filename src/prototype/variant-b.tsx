import { ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/github-icon'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { compact, me, projects, speakeroo, withRef, type Stats } from '@/content'

export function VariantB({ stats }: { stats: Stats }) {
  const monthlyDownloads = Object.values(stats).reduce((sum, s) => sum + (s.downloads ?? 0), 0)

  return (
    <div className="flex min-h-dvh flex-col px-[clamp(1.25rem,0.5rem+4vw,6rem)]">
      <header className="flex items-center justify-between py-6">
        <span className="flex items-center gap-2.5 text-sm font-medium">
          <img src={me.avatar} alt="" className="size-7 flex-none rounded-full" />
          {me.name}
        </span>
        <nav className="flex items-center gap-1">
          <Button asChild variant="ghost" size="icon" aria-label="GitHub">
            <a href={withRef(me.github)}>
              <GithubIcon className="size-4" />
            </a>
          </Button>
          <ThemeToggle />
        </nav>
      </header>

      <main className="flex flex-1 flex-col justify-center gap-10 py-12">
        <h1 className="max-w-[22ch] text-[clamp(2rem,1rem+4.2vw,4.75rem)] leading-[1.05] font-medium tracking-tighter">
          <span className="text-muted-foreground">Hi, I'm Steven.</span> I'm building{' '}
          <a
            href={speakeroo.url}
            className="inline-flex items-baseline gap-[0.2em] rounded-lg text-brand underline decoration-brand/30 decoration-[0.06em] underline-offset-[0.12em] hover:decoration-brand"
          >
            <img
              src={speakeroo.icon}
              alt=""
              className="inline size-[0.85em] translate-y-[0.1em] rounded-[0.2em]"
            />
            Speakeroo
          </a>
          , a free AI coach that helps you speak English with confidence
          <span className="text-muted-foreground">
            {' '}
            — and I keep a few open-source tools alive
            {monthlyDownloads > 0 && <>, downloaded {compact(monthlyDownloads)} times a month</>}.
          </span>
        </h1>

        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-brand text-white hover:bg-brand/90">
            <a href={speakeroo.url}>
              Practice speaking free <ArrowRight />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`mailto:${me.email}`}>Say hello</a>
          </Button>
        </div>
      </main>

      <footer className="border-t py-6">
        <ul className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
          {projects.map((p) => (
            <li key={p.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={withRef(p.url)}
                    className="text-muted-foreground hover:text-foreground active:text-foreground"
                  >
                    {p.name}
                    {stats[p.name]?.stars !== undefined && (
                      <sup className="ms-1 text-[0.7em] text-brand tabular-nums">
                        ★{compact(stats[p.name]?.stars)}
                      </sup>
                    )}
                  </a>
                </TooltipTrigger>
                <TooltipContent>{p.description}</TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  )
}
