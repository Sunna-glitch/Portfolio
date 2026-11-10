import { createContext, useContext, useEffect, useState } from 'react'
import { profile, ui } from './data'

const LanguageContext = createContext(null)

const isLang = (v) => v === 'es' || v === 'en'

function getInitialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (isLang(saved)) return saved
  } catch {
    /* localStorage no disponible */
  }
  // Por defecto: el idioma del navegador
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

/**
 * Idioma del sitio: 'es' | 'en'.
 * - Detecta el idioma del navegador la primera vez
 * - Recuerda la elección en localStorage
 * - Expone `t` con todos los textos del idioma actual
 */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignorar */
    }
    document.documentElement.lang = lang
    document.title =
      lang === 'es' ? `${profile.name} · Portafolio` : `${profile.name} · Portfolio`
  }, [lang])

  const value = {
    lang,
    setLang,
    toggleLang: () => setLang((l) => (l === 'es' ? 'en' : 'es')),
    t: ui[lang],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n debe usarse dentro de <LanguageProvider>')
  return ctx
}
