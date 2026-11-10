import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') return saved
  } catch {
    /* localStorage no disponible */
  }
  // Por defecto: la preferencia del sistema (oscuro si no dice nada)
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

/**
 * Tema del sitio: 'light' | 'dark'.
 * - Respetar la preferencia del sistema la primera vez
 * - Recuerda la elección en localStorage
 * - Alterna la clase .dark en <html> (los colores cambian solos)
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* ignorar */
    }
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const value = {
    theme,
    setTheme,
    dark: theme === 'dark',
    toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme debe usarse dentro de <ThemeProvider>')
  return ctx
}
