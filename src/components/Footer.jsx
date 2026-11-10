import { profile } from '../data'
import { ArrowUpIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()}{' '}
          <span className="font-medium text-zinc-300">
            {profile.name}
            <span className="text-orange-500">.</span>
          </span>
        </p>
        <a
          href="#inicio"
          aria-label="Volver arriba"
          className="flex size-9 items-center justify-center border border-white/10 bg-white/5 text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-orange-500/40 hover:text-orange-400"
        >
          <ArrowUpIcon className="size-4" />
        </a>
      </div>
    </footer>
  )
}
