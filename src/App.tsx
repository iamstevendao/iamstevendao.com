// PROTOTYPE: three layouts for the one-page home, switchable via ?variant=A|B|C (dev only).
import { useState } from 'react'
import { TooltipProvider } from '@/components/ui/tooltip'
import { useProjectStats } from '@/content'
import { PrototypeSwitcher } from '@/prototype/prototype-switcher'
import { VariantA } from '@/prototype/variant-a'
import { VariantB } from '@/prototype/variant-b'
import { VariantC } from '@/prototype/variant-c'

const variants = [
  { key: 'A', label: 'Split', Component: VariantA },
  { key: 'B', label: 'Statement', Component: VariantB },
  { key: 'C', label: 'Bento', Component: VariantC },
]

const readVariant = () => new URLSearchParams(location.search).get('variant') ?? 'A'

export function App() {
  const stats = useProjectStats()
  const [current, setCurrent] = useState(readVariant)

  const select = (key: string) => {
    const url = new URL(location.href)
    url.searchParams.set('variant', key)
    history.replaceState(null, '', url)
    setCurrent(key)
  }

  const { Component } = variants.find((v) => v.key === current) ?? variants[0]

  return (
    <TooltipProvider>
      <Component stats={stats} />
      {import.meta.env.DEV && (
        <PrototypeSwitcher variants={variants} current={current} onChange={select} />
      )}
    </TooltipProvider>
  )
}
