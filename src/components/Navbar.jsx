import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import { NAV } from '../data/content.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open ? 'bg-white/90 shadow-card backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between" aria-label="Principal">
        <Logo />

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium tracking-wide text-ink-soft transition hover:text-gold-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contacto" className="btn-gold hidden !py-2.5 lg:inline-flex">
          Cotiza tu boda
        </a>

        <button
          type="button"
          className="rounded-full p-2 text-ink lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="container-x pb-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base text-ink hover:bg-gold-50"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contacto" onClick={() => setOpen(false)} className="btn-gold mt-4 w-full">
            Cotiza tu boda
          </a>
        </div>
      )}
    </header>
  )
}
