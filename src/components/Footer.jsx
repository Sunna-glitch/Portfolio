import { profile } from '../data'
import { useI18n } from '../i18n'
import { ArrowUpIcon } from './Icons'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-subtle">
          © {new Date().getFullYear()}{' '}
          <span className="font-medium text-muted">
            {profile.name}
            <span className="text-orange-500">.</span>
          </span>
        </p>
        <p className="text-sm text-subtle">
          {t.footer.madeWith} <span className="text-accent">React</span> +{' '}
          <span className="text-accent">Tailwind CSS</span>
        </p>
        <a
          href="#inicio"
          aria-label={t.footer.backToTop}
          className="flex size-9 items-center justify-center border border-line bg-chip text-muted transition-all hover:-translate-y-0.5 hover:border-accent-line hover:text-accent"
        >
          <ArrowUpIcon className="size-4" />
        </a>
      </div>
    </footer>
  )
}
