import { Check, Crown, Gem, Heart } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { BASE_INCLUYE, PLANES } from '../data/content.js'

const ICONS = { basico: Heart, estandar: Gem, premium: Crown }

export default function Planes() {
  return (
    <section id="planes" className="section bg-white">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow">Planes</p>
          <h2 className="section-title">Tres formas de vivir tu boda de destino</h2>
          <p className="section-lead">
            Todos parten de una misma base integral y se adaptan a tu historia, tu presupuesto y el
            número de invitados.
          </p>
        </Reveal>

        {/* Base común */}
        <Reveal className="mx-auto mt-10 max-w-4xl rounded-3xl bg-celeste-50 p-6 sm:p-8">
          <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-gold-700">
            Todos los planes incluyen
          </p>
          <ul className="mt-5 grid gap-x-8 gap-y-2.5 text-sm text-ink-soft sm:grid-cols-2">
            {BASE_INCLUYE.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check size={16} className="mt-0.5 shrink-0 text-gold-600" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-7 lg:grid-cols-3">
          {PLANES.map((p, i) => {
            const Icon = ICONS[p.id]
            return (
              <Reveal key={p.id} delay={i * 120} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-[2rem] p-8 transition duration-300 ${
                    p.featured
                      ? 'border-2 border-gold-500 bg-gradient-to-b from-gold-50 to-white shadow-soft lg:-translate-y-4'
                      : 'border border-gold-100 bg-white shadow-card hover:-translate-y-1'
                  }`}
                >
                  {p.badge && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-ink">
                      {p.badge}
                    </span>
                  )}

                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-celeste-100 text-gold-700">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-3xl font-semibold">{p.name}</h3>
                  <p className="text-sm text-ink-soft">{p.tagline}</p>

                  <div className="mt-6 border-y border-gold-100 py-5">
                    <p className="text-xs uppercase tracking-widest text-ink-soft">Desde</p>
                    <p className="font-display text-5xl font-semibold text-ink">{p.price}</p>
                    <p className="mt-1 text-sm text-ink-soft">{p.note}</p>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check size={16} className="mt-0.5 shrink-0 text-gold-600" />
                        <span className="text-ink-soft">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contacto"
                    onClick={(e) => {
                      // Preselecciona el plan en el formulario
                      window.dispatchEvent(new CustomEvent('select-plan', { detail: p.id }))
                      e.preventDefault()
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`mt-8 ${p.featured ? 'btn-gold' : 'btn-outline'}`}
                  >
                    Elegir {p.name}
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-soft">
          Precios referenciales por pareja. La cotización final depende del destino, la fecha, la
          cantidad de invitados y la personalización que elijas.
        </p>
      </div>
    </section>
  )
}
