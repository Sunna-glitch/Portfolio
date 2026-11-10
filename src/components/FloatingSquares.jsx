import { useMemo } from 'react'

// Paleta de tonos naranja para los cuadritos
const COLORS = [
  'bg-orange-500',
  'bg-orange-400',
  'bg-orange-300',
  'bg-amber-500',
]

/**
 * Fondo animado: cuadritos naranjas semi-transparentes que
 * aparecen desde abajo de la pantalla y suben hasta desaparecer.
 * El tamaño, la posición, la velocidad, la opacidad y el giro
 * de cada cuadrito son aleatorios.
 */
export default function FloatingSquares({ count = 26 }) {
  const squares = useMemo(
    () =>
      Array.from({ length: count }, (_, id) => ({
        id,
        // Posición horizontal aleatoria (0% – 100%)
        left: Math.random() * 100,
        // Tamaño aleatorio (6px – 28px)
        size: 6 + Math.random() * 22,
        // Duración del recorrido (9s – 18s): a menor tiempo, más rápido
        duration: 9 + Math.random() * 9,
        // Retraso negativo para que ya haya cuadritos en pantalla al cargar
        delay: -(Math.random() * 18),
        // Opacidad máxima que alcanza (0.12 – 0.42)
        opacity: 0.12 + Math.random() * 0.3,
        // Giro al subir (20° – 90°)
        rotate: 20 + Math.random() * 70,
        // Algunos cuadritos ligeramente redondeados
        rounded: Math.random() > 0.7 ? 3 : 0,
        // Color aleatorio de la paleta
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      })),
    [count],
  )

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {squares.map((s) => (
        <span
          key={s.id}
          className={`absolute top-full block will-change-transform animate-float-up motion-reduce:animate-none ${s.color}`}
          style={{
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            borderRadius: s.rounded,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            // Variables que consumen los keyframes "float-up"
            '--sq-opacity': s.opacity,
            '--sq-rotate': `${s.rotate}deg`,
          }}
        />
      ))}
    </div>
  )
}
