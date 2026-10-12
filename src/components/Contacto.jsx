import { useEffect, useState } from 'react'
import { AtSign, Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { CONTACT, DESTINOS, PLANES } from '../data/content.js'

// PEGA AQUÍ TU ACCESS KEY de Web3Forms, entre las comillas
const ACCESS_KEY = '1a45227d-ccbf-427b-855f-837fd9d7f6c6'

const INITIAL = {
  nombre: '',
  email: '',
  fecha: '',
  destino: '',
  invitados: '',
  plan: '',
  mensaje: '',
}

const field =
  'w-full rounded-xl border border-gold-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 transition focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-200'

export default function Contacto() {
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)
  const [waUrl, setWaUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Permite que los botones de "Elegir plan" preseleccionen el plan
  useEffect(() => {
    const onSelect = (e) => setForm((f) => ({ ...f, plan: e.detail }))
    window.addEventListener('select-plan', onSelect)
    return () => window.removeEventListener('select-plan', onSelect)
  }, [])

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const plan = PLANES.find((p) => p.id === form.plan)?.name || 'Por definir'
    const destino = DESTINOS.find((d) => d.id === form.destino)?.name || 'Por definir'

    // Mensaje opcional de WhatsApp para la pantalla final
    const text = `Hola Marry Me, soy ${form.nombre}. Acabo de enviar mi solicitud de cotización (Plan: ${plan}, Destino: ${destino}).`
    setWaUrl(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Nueva solicitud de cotización - ${form.nombre}`,
          from_name: 'Marry Me (web)',
          replyto: form.email,
          Nombres: form.nombre,
          Correo: form.email,
          'Fecha estimada': form.fecha || 'Por definir',
          Destino: destino,
          Invitados: form.invitados || 'Por definir',
          Plan: plan,
          Mensaje: form.mensaje || '-',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
      } else {
        setError('No pudimos enviar tu solicitud. Intenta de nuevo en unos minutos.')
      }
    } catch {
      setError('No hay conexión. Revisa tu internet e intenta otra vez.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="section bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <p className="eyebrow">Contacto</p>
          <h2 className="section-title">Empecemos a diseñar tu historia</h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Cuéntanos tu idea y te enviaremos una propuesta personalizada. Respondemos por WhatsApp o
            correo.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-celeste-100 text-gold-700">
                <MessageCircle size={18} />
              </span>
              <a className="hover:text-gold-700" href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-celeste-100 text-gold-700">
                <Mail size={18} />
              </span>
              <a className="hover:text-gold-700" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-celeste-100 text-gold-700">
                <AtSign size={18} />
              </span>
              {CONTACT.instagram}
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-celeste-100 text-gold-700">
                <MapPin size={18} />
              </span>
              {CONTACT.location}
            </li>
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-3" delay={120}>
          <form
            onSubmit={submit}
            className="rounded-[2rem] border border-gold-100 bg-cream p-6 shadow-card sm:p-9"
          >
            {sent ? (
              <div className="py-10 text-center" role="status">
                <h3 className="text-3xl font-semibold">¡Gracias, {form.nombre.split(' ')[0] || 'pareja'}!</h3>
                <p className="mt-3 text-ink-soft">
                  Recibimos tu solicitud. Te responderemos pronto al correo que indicaste.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
                    Escribirnos por WhatsApp <Send size={16} />
                  </a>
                  <button
                    type="button"
                    className="btn-outline"
                    onClick={() => {
                      setForm(INITIAL)
                      setSent(false)
                      setError('')
                    }}
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium">
                  Nombres
                  <input required name="nombre" value={form.nombre} onChange={update} className={`${field} mt-1.5`} placeholder="Ana y Luis" autoComplete="name" />
                </label>
                <label className="text-sm font-medium">
                  Correo
                  <input required type="email" name="email" value={form.email} onChange={update} className={`${field} mt-1.5`} placeholder="tu@correo.com" autoComplete="email" />
                </label>
                <label className="text-sm font-medium">
                  Fecha estimada
                  <input type="month" name="fecha" value={form.fecha} onChange={update} className={`${field} mt-1.5`} />
                </label>
                <label className="text-sm font-medium">
                  Destino
                  <select name="destino" value={form.destino} onChange={update} className={`${field} mt-1.5`}>
                    <option value="">Aún no lo decidimos</option>
                    {DESTINOS.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-medium">
                  Invitados
                  <select name="invitados" value={form.invitados} onChange={update} className={`${field} mt-1.5`}>
                    <option value="">Selecciona</option>
                    <option>Solo nosotros</option>
                    <option>2 a 20</option>
                    <option>21 a 40</option>
                    <option>41 a 80</option>
                    <option>Más de 80</option>
                  </select>
                </label>
                <label className="text-sm font-medium">
                  Plan de interés
                  <select name="plan" value={form.plan} onChange={update} className={`${field} mt-1.5`}>
                    <option value="">Quiero asesoría</option>
                    {PLANES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-medium sm:col-span-2">
                  Cuéntanos tu idea
                  <textarea name="mensaje" rows={4} value={form.mensaje} onChange={update} className={`${field} mt-1.5 resize-none`} placeholder="Estilo, ritual, ideas especiales..." />
                </label>

                {error && (
                  <p className="text-sm text-red-600 sm:col-span-2" role="alert">
                    {error}
                  </p>
                )}

                <button type="submit" disabled={loading} className="btn-gold sm:col-span-2 disabled:opacity-60">
                  {loading ? 'Enviando...' : 'Enviar solicitud'} <Send size={16} />
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
