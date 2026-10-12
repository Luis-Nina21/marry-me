import Reveal from './Reveal.jsx'
import DestinoArt from './DestinoArt.jsx'
import { DESTINOS } from '../data/content.js'

export default function Destinos() {
  return (
    <section id="destinos" className="section bg-gradient-to-b from-white to-celeste-50">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow">Destinos</p>
          <h2 className="section-title">Elige el escenario de tu &ldquo;sí, acepto&rdquo;</h2>
          <p className="section-lead">
            Trabajamos en Costa, Sierra y Selva. La barra muestra qué porcentaje de las parejas
            encuestadas elegiría cada destino.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {DESTINOS.map((d, i) => (
            <Reveal
              key={d.id}
              delay={i * 90}
              className={i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}
            >
              <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="h-48 overflow-hidden">
                  <div className="h-full w-full transition duration-700 group-hover:scale-105">
                    {d.image ? (
                        <img
                          src={d.image}
                          alt={d.name}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <DestinoArt id={d.id} jh/>
                      )}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-700">
                    {d.region}
                  </span>
                  <h3 className="mt-1 text-2xl font-semibold">{d.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d.text}</p>

                  <div className="mt-5">
                    <div className="mb-1.5 flex justify-between text-xs text-ink-soft">
                      <span>Preferencia de las parejas</span>
                      <span className="font-medium text-ink">{d.preferencia}%</span>
                    </div>
                    <div
                      className="h-2 overflow-hidden rounded-full bg-celeste-100"
                      role="img"
                      aria-label={`${d.preferencia}% de preferencia`}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold-300 to-gold-500"
                        style={{ width: `${d.preferencia}%` }}
                      />
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
