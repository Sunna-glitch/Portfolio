import { projects } from '../data'
import { useI18n } from '../i18n'
import { ArrowUpRightIcon, GithubIcon } from './Icons'

function ProjectRow({ project, index }) {
  const { lang, t } = useI18n()
  const title = project.title[lang]

  return (
    <li className="group grid gap-x-6 border-t border-line py-6 last:border-b sm:grid-cols-[2.5rem_1fr] sm:py-7">
      {/* Número */}
      <span
        aria-hidden="true"
        className="hidden font-mono text-xs leading-7 text-subtle sm:block"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div>
        {/* Título + enlace al código */}
        <div className="flex items-center gap-4">
          <h3 className="font-display text-lg font-semibold text-ink">
            <a
              href={project.demo}
              className="inline-flex items-center gap-1.5 transition-colors group-hover:text-accent"
            >
              {title}
              <ArrowUpRightIcon className="size-4 translate-y-px text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
          </h3>
          <a
            href={project.code}
            aria-label={`${t.projects.viewCode} ${title}`}
            className="ml-auto text-subtle transition-colors hover:text-accent"
          >
            <GithubIcon className="size-4" />
          </a>
        </div>

        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
          {project.description[lang]}
        </p>
        <p className="mt-2.5 font-mono text-xs text-subtle">
          {project.tech.join(' · ')}
        </p>
      </div>
    </li>
  )
}

export default function Projects() {
  const { t } = useI18n()

  return (
    <section id="proyectos" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Encabezado */}
        <p className="font-mono text-sm text-accent">{t.projects.kicker}</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
          {t.projects.title}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{t.projects.desc}</p>

        {/* Lista de proyectos */}
        <ul className="mt-12">
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} index={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}
