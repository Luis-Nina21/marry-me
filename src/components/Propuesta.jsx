import { Compass, Heart, Mountain, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { VALUE } from '../data/content.js'

const ICONS = { Heart, Compass, Mountain, ShieldCheck }

export default function Propuesta() {
  return (
    <section id="propuesta" className="section bg-cream">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow">Nuestra propuesta</p>
          <h2 className="section-title">
            Más que una boda,
            <br className="hidden sm:block" /> una experiencia de destino
          </h2>
          <p className="section-lead">
            Los wedding planners organizan la ceremonia y las agencias venden el viaje. Nosotros unimos
            ambas cosas para que tu boda y tu viaje sean una sola historia.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE.map((v, i) => {
            const Icon = ICONS[v.icon]
            return (
              <Reveal key={v.title} delay={i * 100}>
                <article className="h-full rounded-3xl border border-gold-100 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-celeste-100 text-gold-700">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-2xl font-semibold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{v.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
