import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect } from 'react'

export type VariantOption = { key: string; label: string }

const isTyping = (el: Element | null) =>
  el instanceof HTMLInputElement ||
  el instanceof HTMLTextAreaElement ||
  (el instanceof HTMLElement && el.isContentEditable)

export function PrototypeSwitcher({
  variants,
  current,
  onChange,
}: {
  variants: VariantOption[]
  current: string
  onChange: (key: string) => void
}) {
  const index = Math.max(0, variants.findIndex((v) => v.key === current))
  const step = (delta: number) =>
    onChange(variants[(index + delta + variants.length) % variants.length].key)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isTyping(document.activeElement) || e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === 'ArrowLeft') step(-1)
      if (e.key === 'ArrowRight') step(1)
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  })

  const variant = variants[index]

  return (
    <div className="fixed inset-bs-auto inset-be-4 inset-x-0 z-50 mx-auto flex w-fit items-center gap-1 rounded-full bg-fuchsia-600 p-1 font-mono text-xs text-white shadow-xl ring-2 ring-fuchsia-300">
      <button
        className="grid size-8 place-items-center rounded-full hover:bg-white/20 active:bg-white/30"
        onClick={() => step(-1)}
        aria-label="Previous variant"
      >
        <ChevronLeft className="size-4" />
      </button>
      <span className="min-w-44 px-2 text-center">
        PROTOTYPE · {variant.key} ({variant.label})
      </span>
      <button
        className="grid size-8 place-items-center rounded-full hover:bg-white/20 active:bg-white/30"
        onClick={() => step(1)}
        aria-label="Next variant"
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  )
}
