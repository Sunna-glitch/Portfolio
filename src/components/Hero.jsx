import { profile } from '../data'
import { ArrowDownIcon, CodeIcon } from './Icons'

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center">
      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        {/* Badge de disponibilidad */}
        <p className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-orange-400">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-orange-500" />
          </span>
          {profile.availability}
        </p>

        <div className="mt-8">
          <p className="text-lg font-medium text-zinc-400">Hola, soy</p>
          <h1 className="mt-2 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-8xl">
            {profile.name}
            <span className="text-orange-500">.</span>
          </h1>
          <h2 className="mt-3 font-display text-2xl font-semibold text-orange-500 sm:text-3xl md:text-4xl">
            {profile.role}
          </h2>
        </div>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
          {profile.bio}
        </p>

        {/* Botones */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 bg-orange-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-orange-400/30"
          >
            <CodeIcon className="size-4" />
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition-all hover:-translate-y-0.5 hover:border-orange-500/50 hover:text-orange-400"
          >
            Contáctame
          </a>
        </div>

        {/* Stack / habilidades */}
        <ul className="mt-12 flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#proyectos"
        aria-label="Ir a proyectos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 transition-colors hover:text-orange-400"
      >
        <ArrowDownIcon className="size-6 animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  )
}
