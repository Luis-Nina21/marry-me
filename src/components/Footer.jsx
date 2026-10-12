import Logo from './Logo.jsx'
import { CONTACT, NAV } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-gold-100 bg-cream">
      <div className="container-x flex flex-col items-center gap-6 py-12 text-center">
        <Logo />
        <p className="max-w-md text-sm text-ink-soft">
          Romance DMC &amp; Destination Agency. Bodas simbólicas y experiencias de romance en el Perú.
        </p>
        <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm text-ink-soft">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="hover:text-gold-700">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-ink-soft/80">
          {CONTACT.location} · © {new Date().getFullYear()} Marry Me. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
