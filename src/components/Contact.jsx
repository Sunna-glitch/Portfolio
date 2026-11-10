import { useState } from 'react'
import { profile } from '../data'
import { useI18n } from '../i18n'
import { MailIcon, MapPinIcon, socialIcons } from './Icons'

const inputClass =
  'w-full border border-line bg-card px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-subtle focus:border-accent-line focus:ring-2 focus:ring-orange-500/20'

export default function Contact() {
  const { t, lang } = useI18n()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Abre el cliente de correo con el mensaje ya redactado
  const handleSubmit = (e) => {
    e.preventDefault()
    const sender = form.name || t.contact.visitor
    const subject = encodeURIComponent(t.contact.mailSubject(profile.name, sender))
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
          <p className="font-mono text-sm text-accent">{t.contact.kicker}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-md text-muted">{t.contact.desc}</p>

          <ul className="mt-8 space-y-4">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-3 text-muted transition-colors hover:text-accent"
              >
                <span className="flex size-10 items-center justify-center border border-line bg-chip transition-colors group-hover:border-accent-line">
                  <MailIcon className="size-5" />
                </span>
                {profile.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-3 text-muted">
              <span className="flex size-10 items-center justify-center border border-line bg-chip">
                <MapPinIcon className="size-5" />
              </span>
              {profile.location[lang]}
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
                    className="flex size-10 items-center justify-center border border-line bg-chip text-muted transition-all hover:-translate-y-0.5 hover:border-accent-line hover:text-accent"
                  >
                    {Icon && <Icon className="size-5" />}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="border border-line bg-card p-6 md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">
                {t.contact.name}
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ada Lovelace"
                required
                className={inputClass}
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">
                {t.contact.email}
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="ada@example.com"
                required
                className={inputClass}
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">
              {t.contact.message}
            </span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t.contact.messagePlaceholder}
              rows={5}
              required
              className={`${inputClass} resize-none`}
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-orange-400"
          >
            {t.contact.send}
          </button>
          <p className="mt-3 text-center text-xs text-subtle">{t.contact.mailNote}</p>
        </form>
      </div>
    </section>
  )
}
