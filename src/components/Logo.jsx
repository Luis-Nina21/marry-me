// Logotipo: dos anillos entrelazados + nombre "Marry Me"
export default function Logo({ className = '' }) {
  return (
    <a href="#inicio" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Marry Me, inicio">
      <svg viewBox="0 0 44 36" className="h-8 w-10" aria-hidden="true">
        <circle cx="16" cy="21" r="11" fill="none" stroke="#C9A961" strokeWidth="2.6" />
        <circle cx="28" cy="21" r="11" fill="none" stroke="#86BFDA" strokeWidth="2.6" />
        <path d="M22 2.5l2.6 4.2h-5.2z" fill="#C9A961" />
      </svg>
      <span className="font-display text-3xl font-semibold italic leading-none tracking-wide">
        Marry <span className="text-gold-600">Me</span>
      </span>
    </a>
  )
}
