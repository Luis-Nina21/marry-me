// Ilustraciones sencillas por destino (reemplazables por fotografías reales en /public)
const SCENES = {
  cusco: (
    <>
      <rect width="400" height="240" fill="#F5EBCB" />
      <circle cx="310" cy="70" r="28" fill="#FDFBF7" />
      <path d="M0 190 L70 110 L130 160 L210 80 L290 165 L350 120 L400 170 V240 H0Z" fill="#CBE6F4" />
      <path d="M0 215 L90 160 L180 205 L260 150 L400 210 V240 H0Z" fill="#C9A961" opacity="0.7" />
      <path d="M0 225 H400 V240 H0Z" fill="#8C6F33" opacity="0.5" />
    </>
  ),
  costa: (
    <>
      <rect width="400" height="240" fill="#E3F1F9" />
      <circle cx="200" cy="120" r="46" fill="#EBD9A0" />
      <rect y="130" width="400" height="110" fill="#A9D4E8" />
      <path d="M0 160 Q50 148 100 160 T200 160 T300 160 T400 160 V240 H0Z" fill="#86BFDA" opacity="0.8" />
      <path d="M0 195 Q60 180 120 195 T240 195 T360 195 T480 195 V240 H0Z" fill="#FDFBF7" opacity="0.9" />
    </>
  ),
  arequipa: (
    <>
      <rect width="400" height="240" fill="#F7E6E4" />
      <path d="M40 240 L170 60 L200 80 L230 60 L360 240Z" fill="#A9D4E8" />
      <path d="M170 60 L200 80 L230 60 L212 98 L188 98Z" fill="#FDFBF7" />
      <path d="M0 215 Q100 190 200 212 T400 205 V240 H0Z" fill="#FDFBF7" />
    </>
  ),
  selva: (
    <>
      <rect width="400" height="240" fill="#CBE6F4" />
      <circle cx="320" cy="60" r="24" fill="#F5EBCB" />
      <path d="M0 240 V140 Q40 90 80 150 Q120 70 170 150 Q210 100 250 160 Q300 80 340 150 Q380 110 400 140 V240Z" fill="#86BFDA" opacity="0.65" />
      <path d="M0 240 V185 Q60 140 110 190 Q170 130 230 195 Q300 140 360 195 Q385 175 400 190 V240Z" fill="#C9A961" opacity="0.55" />
    </>
  ),
  puno: (
    <>
      <rect width="400" height="240" fill="#FBF6E9" />
      <circle cx="90" cy="70" r="26" fill="#EBD9A0" />
      <path d="M0 130 L80 95 L170 125 L260 85 L400 130 V150 H0Z" fill="#CBE6F4" />
      <rect y="145" width="400" height="95" fill="#A9D4E8" />
      <path d="M60 205 Q120 190 200 205 Q150 218 60 205Z" fill="#C9A961" opacity="0.8" />
      <path d="M240 190 Q300 178 360 190 Q310 202 240 190Z" fill="#C9A961" opacity="0.8" />
    </>
  ),
}

export default function DestinoArt({ id }) {
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {SCENES[id]}
    </svg>
  )
}
