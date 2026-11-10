import { useEffect, useRef, useState } from 'react'
import { profile } from '../data'
import { useI18n } from '../i18n'
import { useTheme } from '../theme'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons'

export default function Navbar() {
  const { t, lang, toggleLang } = useI18n()
  const { dark, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cierra el menú al hacer clic fuera o al pulsar Escape
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const links = [
    { href: '#inicio', label: t.nav.home },
    { href: '#proyectos', label: t.nav.projects },
    { href: '#contacto', label: t.nav.contact },
  ]

  return (
    <header
      ref={rootRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-surface/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo / nombre */}
        <a
          href="#inicio"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          {profile.name}
          <span className="text-orange-500">.</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          {/* Cambiar idioma (muestra el idioma al que cambiará) */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.a11y.changeLang}
            title={t.a11y.changeLang}
            className="flex h-8 min-w-9 items-center justify-center px-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted transition-colors hover:text-accent"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          {/* Cambiar tema */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t.a11y.toggleTheme}
            aria-pressed={dark}
            title={t.a11y.toggleTheme}
            className="flex size-8 items-center justify-center text-muted transition-colors hover:text-accent"
          >
            {dark ? (
              <SunIcon className="size-[18px]" />
            ) : (
              <MoonIcon className="size-[18px]" />
            )}
          </button>

          {/* Botón desplegable */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={open}
            aria-label={open ? t.nav.close : t.nav.menu}
            className="ml-1 inline-flex items-center gap-2 border border-line px-4 py-1.5 text-sm font-medium text-muted transition-colors hover:border-accent-line hover:text-accent"
          >
            {open ? t.nav.close : t.nav.menu}
            {open ? (
              <CloseIcon className="size-4" />
            ) : (
              <MenuIcon className="size-4" />
            )}
          </button>
        </div>

        {/* Panel desplegable */}
        {open && (
          <div
            role="menu"
            className="absolute inset-x-6 top-16 overflow-hidden border border-line bg-panel/95 shadow-xl shadow-black/10 backdrop-blur-md dark:shadow-black/50 sm:inset-x-auto sm:right-6 sm:w-56"
          >
            <ul className="p-2">
              {links.map((link) => (
                <li key={link.href} role="none">
                  <a
                    role="menuitem"
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-chip hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="border-t border-line p-2">
              <a
                role="menuitem"
                href="#contacto"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft"
              >
                {t.nav.letsTalk} →
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
