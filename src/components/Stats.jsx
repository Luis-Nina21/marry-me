import Reveal from './Reveal.jsx'
import { STATS } from '../data/content.js'

export default function Stats() {
  return (
    <section aria-label="Interés del mercado" className="border-y border-gold-100 bg-white">
      <div className="container-x py-12">
        <div className="grid gap-10 text-center md:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.value} delay={i * 120}>
              <p className="font-display text-5xl font-semibold text-gold-600">{s.value}</p>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">{s.label}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-ink-soft/80">
          Encuesta a 60 parejas nacionales y extranjeras, 2026.
        </p>
      </div>
    </section>
  )
}
