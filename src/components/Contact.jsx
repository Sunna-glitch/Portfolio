import { useState } from 'react'
import { profile } from '../data'
import {
  MailIcon,
  MapPinIcon,
  socialIcons,
} from './Icons'

const inputClass =
  'w-full rounded-lg border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Abre el cliente de correo con el mensaje ya redactado
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Hola ${profile.name}, soy ${form.name || 'un visitante'} — mensaje desde tu portafolio`,
    )
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contacto" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Información */}
        <div>
          <p className="font-mono text-sm text-orange-500">02 · contacto</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mt-4 max-w-md text-zinc-400">
            Cuéntame sobre tu idea, estoy abierto a colaborar en proyectos
            interesantes. Respondo normalmente en menos de 24 horas.
          </p>

          <ul className="mt-8 space-y-4">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-3 text-zinc-300 transition-colors hover:text-orange-400"
              >
                <span className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-orange-500/40">
                  <MailIcon className="size-5" />
                </span>
                {profile.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-3 text-zinc-300">
              <span className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <MapPinIcon className="size-5" />
              </span>
              {profile.location}
            </li>
          </ul>

          {/* Redes sociales */}
          <ul className="mt-8 flex gap-3">
            {profile.socials.map((social) => {
              const Icon = socialIcons[social.icon]
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-orange-500/40 hover:text-orange-400"
                  >
                    {Icon && <Icon className="size-5" />}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className=" border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-sm md:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Nombre
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Liino Lovelace"
                required
                className={inputClass}
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Tu email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="liino@example.com"
                required
                className={inputClass}
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Mensaje
            </span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hola, me interesa trabajar contigo en..."
              rows={5}
              required
              className={`${inputClass} resize-none`}
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-orange-400"
          >
            Enviar mensaje
          </button>
          <p className="mt-3 text-center text-xs text-zinc-500">
            Se abrirá tu cliente de correo con el mensaje listo para enviar.
          </p>
        </form>
      </div>
    </section>
  )
}
