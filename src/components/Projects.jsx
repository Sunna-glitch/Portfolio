import { projects } from '../data'
import { ArrowUpRightIcon, GithubIcon } from './Icons'

function ProjectRow({ project, index }) {
  return (
    <li className="group grid gap-x-6 border-t border-white/10 py-6 last:border-b sm:grid-cols-[2.5rem_1fr] sm:py-7">
      {/* Número */}
      <span
        aria-hidden="true"
        className="hidden font-mono text-xs leading-7 text-zinc-600 sm:block"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div>
        {/* Título + enlace al código */}
        <div className="flex items-center gap-4">
          <h3 className="font-display text-lg font-semibold text-zinc-100">
            <a
              href={project.demo}
              className="inline-flex items-center gap-1.5 transition-colors group-hover:text-orange-400"
            >
              {project.title}
              <ArrowUpRightIcon className="size-4 translate-y-px text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-400" />
            </a>
          </h3>
          <a
            href={project.code}
            aria-label={`Ver código de ${project.title}`}
            className="ml-auto text-zinc-600 transition-colors hover:text-orange-400"
          >
            <GithubIcon className="size-4" />
          </a>
        </div>

        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
        <p className="mt-2.5 font-mono text-xs text-zinc-500">
          {project.tech.join(' · ')}
        </p>
      </div>
    </li>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Encabezado */}
        <p className="font-mono text-sm text-orange-500">01 · proyectos</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
          Cosas que he construido
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Algunos proyectos personales y de práctica. El código de cada uno
          está en su repositorio.
        </p>

        {/* Lista de proyectos */}
        <ul className="mt-12">
          {projects.map((project, index) => (
            <ProjectRow key={project.title} project={project} index={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}
