import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { FAQ } from '../data/content.js'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section bg-gradient-to-b from-celeste-50 to-white">
      <div className="container-x max-w-3xl">
        <Reveal className="text-center">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="section-title">Resolvemos tus dudas</h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl border border-gold-100 bg-white">
                  <h3 className="font-sans text-base font-medium">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      {item.q}
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-gold-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-${i}`}
                    role="region"
                    className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
