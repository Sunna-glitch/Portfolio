import { useEffect, useRef, useState } from 'react'
import { profile } from '../data'
import { CloseIcon, MenuIcon } from './Icons'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
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

  return (
    <header
      ref={rootRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-white/5 bg-zinc-950/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo / nombre */}
        <a
          href="#inicio"
          className="font-display text-lg font-semibold tracking-tight text-zinc-100"
        >
          {profile.name}
          <span className="text-orange-500">.</span>
        </a>

        {/* Botón desplegable */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="inline-flex items-center gap-2 border border-white/15 px-4 py-1.5 text-sm font-medium text-zinc-300 transition-colors hover:border-orange-500/50 hover:text-orange-400"
        >
          {open ? 'Cerrar' : 'Menú'}
          {open ? <CloseIcon className="size-4" /> : <MenuIcon className="size-4" />}
        </button>

        {/* Panel desplegable */}
        {open && (
          <div
            role="menu"
            className="absolute inset-x-6 top-16 overflow-hidden border border-white/10 bg-zinc-900/95 shadow-2xl shadow-black/50 backdrop-blur-md sm:inset-x-auto sm:right-6 sm:w-56"
          >
            <ul className="p-2">
              {links.map((link) => (
                <li key={link.href} role="none">
                  <a
                    role="menuitem"
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-orange-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="border-t border-white/5 p-2">
              <a
                role="menuitem"
                href="#contacto"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-orange-400 transition-colors hover:bg-orange-500/10"
              >
                Hablemos →
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
