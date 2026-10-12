import Reveal from './Reveal.jsx'
import { PASOS } from '../data/content.js'

export default function Proceso() {
  return (
    <section id="proceso" className="section bg-cream">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow">Cómo trabajamos</p>
          <h2 className="section-title">Del primer mensaje al &ldquo;sí, acepto&rdquo;</h2>
          <p className="section-lead">Cinco pasos claros para que planificar tu boda también sea parte del disfrute.</p>
        </Reveal>

        <ol className="relative mx-auto mt-14 max-w-3xl space-y-8 border-l border-gold-300 pl-8 sm:pl-12">
          {PASOS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 80} className="relative">
              <span className="absolute -left-[3.2rem] top-0 grid h-9 w-9 place-items-center rounded-full border border-gold-400 bg-white font-display text-lg font-semibold text-gold-700 sm:-left-[4.2rem] sm:h-11 sm:w-11">
                {i + 1}
              </span>
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-ink-soft">{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
