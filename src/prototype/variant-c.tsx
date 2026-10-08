import { ArrowUpRight, Mail, Star } from 'lucide-react'
import type { ReactNode } from 'react'
import { GithubIcon } from '@/components/github-icon'
import { ThemeToggle } from '@/components/theme-toggle'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { compact, me, projects, speakeroo, withRef, type Stats } from '@/content'

function Tile({
  className,
  href,
  children,
}: {
  className?: string
  href?: string
  children: ReactNode
}) {
  const classes = cn(
    'relative flex flex-col overflow-clip rounded-2xl border bg-card p-5',
    href &&
      'transition-[border-color,translate] hover:border-ring active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
    className,
  )
  return href ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <div className={classes}>{children}</div>
  )
}

export function VariantC({ stats }: { stats: Stats }) {
  return (
    <div className="grid min-h-dvh auto-rows-[minmax(9rem,auto)] grid-cols-2 gap-3 p-3 md:h-dvh md:auto-rows-fr md:grid-cols-4 md:grid-rows-4">
      <Tile className="col-span-2 justify-between">
        <div className="flex items-start justify-between">
          <img src={me.avatar} alt="" className="size-14 flex-none rounded-full" />
          <ThemeToggle className="-me-2 -mt-2" />
        </div>
        <div>
          <h1 className="text-[clamp(1.75rem,1rem+2vw,2.75rem)] leading-none font-semibold tracking-tighter">
            {me.name}
          </h1>
          <p className="mt-1.5 text-muted-foreground">{me.role}</p>
        </div>
      </Tile>

      <Tile
        href={speakeroo.url}
        className="group col-span-2 row-span-3 justify-between md:row-span-4 border-brand/30 bg-brand-subtle"
      >
        <div className="flex items-start justify-between">
          <img src={speakeroo.logo} alt="Speakeroo" className="h-9 w-auto" />
          <ArrowUpRight className="size-6 text-brand" />
        </div>
        <img
          src={speakeroo.owl}
          alt=""
          className="mx-auto w-[clamp(8rem,4rem+10vw,15rem)] transition-transform motion-safe:group-hover:scale-105 motion-safe:group-hover:-rotate-3"
        />
        <div className="space-y-3">
          <p className="text-[clamp(1.5rem,1rem+1.5vw,2.25rem)] leading-tight font-medium tracking-tight">
            {speakeroo.tagline}
          </p>
          <p className="max-w-md text-sm text-muted-foreground">{speakeroo.pitch}</p>
        </div>
      </Tile>

      {projects.slice(0, 4).map((p) => (
        <Tile key={p.name} href={withRef(p.url)} className="justify-between gap-3">
          <div className="flex items-start justify-between">
            <img src={p.img} alt="" className="size-9 flex-none rounded-lg" />
            {stats[p.name]?.stars !== undefined && (
              <Badge variant="secondary" className="font-mono tabular-nums">
                <Star /> {compact(stats[p.name]?.stars)}
              </Badge>
            )}
          </div>
          <div>
            <p className="truncate text-sm font-medium">{p.name}</p>
            <p className="line-clamp-2 text-xs text-muted-foreground">
              {stats[p.name]?.downloads !== undefined
                ? `${compact(stats[p.name]?.downloads)} downloads/mo`
                : p.description}
            </p>
          </div>
        </Tile>
      ))}

      <Tile href={`mailto:${me.email}`} className="justify-between bg-foreground text-background">
        <Mail className="size-5" />
        <div>
          <p className="text-sm font-medium">Say hello</p>
          <p className="truncate text-xs opacity-70">{me.email}</p>
        </div>
      </Tile>

      <Tile href={withRef(me.github)} className="justify-between">
        <GithubIcon className="size-5" />
        <div>
          <p className="text-sm font-medium">More on GitHub</p>
          <p className="text-xs text-muted-foreground">Alfred, Meteor & more</p>
        </div>
      </Tile>
    </div>
  )
}
