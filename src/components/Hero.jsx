import { ArrowRight, MapPin, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-celeste-50 via-white to-cream pt-[72px]">
      {/* Manchas decorativas */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-celeste-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold-200/50 blur-3xl" />

      <div className="container-x relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-2 lg:gap-10">
        <div className="text-center lg:text-left">
          <p className="eyebrow">Romance DMC &amp; Destination Agency</p>
          <h1 className="text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Tu boda, un <em className="text-gold-600">destino</em> inolvidable
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg lg:mx-0">
            Diseñamos bodas simbólicas, renovación de votos y rituales de unión en los paisajes más
            hermosos del Perú. Ceremonia, viaje y experiencia, todo en un solo lugar.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#planes" className="btn-gold">
              Ver planes <ArrowRight size={18} />
            </a>
            <a href="#destinos" className="btn-outline">
              Explorar destinos
            </a>
          </div>
        </div>

        {/* Arco ilustrado */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] border-[6px] border-white shadow-soft">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPfat9RtFOwGkrthlGUtiNemEucvDmJQ-Sif3fSIS7Q&s=10"
                alt="Ceremonia de boda en Perú"
                className="h-full w-full object-cover"
              />
          </div>

          <div className="absolute -left-4 top-14 hidden animate-float items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-card sm:flex">
            <MapPin size={18} className="text-gold-600" />
            <span className="text-sm font-medium">Valle Sagrado</span>
          </div>
          <div
            className="absolute -right-3 bottom-20 hidden animate-float items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-card sm:flex"
            style={{ animationDelay: '1.5s' }}
          >
            <Sparkles size={18} className="text-celeste-500" />
            <span className="text-sm font-medium">Ceremonia simbólica</span>
          </div>
        </div>
      </div>
    </section>
  )
}
