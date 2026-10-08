import { ArrowUpRight, Download, Heart, Mail, Star } from 'lucide-react'
import { GithubIcon } from '@/components/github-icon'
import { ThemeToggle } from '@/components/theme-toggle'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { compact, me, projects, speakeroo, withRef, type Stats } from '@/content'

export function VariantA({ stats }: { stats: Stats }) {
  return (
    <div className="grid min-h-dvh lg:h-dvh lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <section className="flex flex-col justify-between gap-12 p-[clamp(1.5rem,1rem+3vw,4rem)]">
        <header className="flex items-center justify-between">
          <img src={me.avatar} alt="" className="size-12 flex-none rounded-full" />
          <ThemeToggle />
        </header>

        <div className="space-y-5">
          <h1 className="text-[clamp(2.5rem,1.5rem+4vw,5rem)] leading-[0.95] font-semibold tracking-tighter">
            {me.name}
          </h1>
          <p className="max-w-sm text-lg text-muted-foreground">
            {me.role}. Building <span className="text-brand">Speakeroo</span> and maintaining
            open-source tools for Vue, Meteor & Alfred.
          </p>
        </div>

        <footer className="flex flex-wrap gap-2">
          <Button asChild size="lg">
            <a href={`mailto:${me.email}`}>
              <Mail /> {me.email}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={withRef(me.github)}>
              <GithubIcon className="size-4" /> GitHub
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href={withRef(me.sponsor)}>
              <Heart /> Sponsor
            </a>
          </Button>
        </footer>
      </section>

      <section className="flex flex-col border-t bg-muted/40 lg:border-t-0 lg:border-s">
        <a
          href={speakeroo.url}
          className="group relative flex flex-1 flex-col justify-between gap-8 overflow-clip border-b bg-brand-subtle p-[clamp(1.5rem,1rem+3vw,4rem)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand"
        >
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="border-brand/40 text-brand">
              Now building
            </Badge>
            <ArrowUpRight className="size-6 text-brand transition-transform motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1" />
          </div>
          <div className="relative z-10 max-w-md space-y-4">
            <img src={speakeroo.logo} alt="Speakeroo" className="h-10 w-auto" />
            <p className="text-2xl font-medium tracking-tight">{speakeroo.tagline}.</p>
            <p className="text-muted-foreground">{speakeroo.pitch}</p>
            <div className="flex flex-wrap gap-1.5">
              {speakeroo.scores.map((s) => (
                <Badge key={s} variant="secondary" className="bg-background/70">
                  {s}
                </Badge>
              ))}
            </div>
          </div>
          <img
            src={speakeroo.owl}
            alt=""
            className="pointer-events-none absolute inset-be-[-2rem] inset-e-[-1rem] w-[clamp(9rem,5rem+12vw,18rem)] opacity-90 transition-transform motion-safe:group-hover:-rotate-6"
          />
        </a>

        <div className="p-[clamp(1.5rem,1rem+3vw,4rem)] pbs-6">
          <h2 className="mbe-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Open source
          </h2>
          <ul className="divide-y">
            {projects.map((p) => (
              <li key={p.name}>
                <a
                  href={withRef(p.url)}
                  className="-mx-2 flex items-center gap-3 rounded-md px-2 py-2.5 hover:bg-accent active:bg-accent/70"
                >
                  <img src={p.img} alt="" className="size-8 flex-none rounded-md" />
                  <span className="flex-1 truncate">
                    <span className="font-medium">{p.name}</span>
                    <span className="hidden text-muted-foreground sm:inline"> — {p.description}</span>
                  </span>
                  <span className="flex flex-none gap-3 font-mono text-xs text-muted-foreground tabular-nums">
                    {stats[p.name]?.stars !== undefined && (
                      <span className="flex items-center gap-1">
                        <Star className="size-3" /> {compact(stats[p.name]?.stars)}
                      </span>
                    )}
                    {stats[p.name]?.downloads !== undefined && (
                      <span className="flex items-center gap-1">
                        <Download className="size-3" /> {compact(stats[p.name]?.downloads)}/mo
                      </span>
                    )}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
