import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Zap } from 'lucide-react'

export default function LegalLayout({ eyebrow, title, updated, children }) {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${title} — Rooney Response Co.`
  }, [title])

  return (
    <div className="relative min-h-screen bg-background">
      <div className="noise-overlay" />
      <header className="bg-deep text-white rounded-b-4xl sm:rounded-b-6xl relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 sm:px-10 pt-10 pb-16 sm:pb-20">
          <div className="flex items-center justify-between mb-14">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-light via-primary to-primary-dark">
                <Zap className="h-5 w-5 text-white" fill="white" strokeWidth={2.4} />
              </span>
              <span className="font-display font-bold text-lg">
                Rooney Response <span className="font-serif italic font-medium text-primary-light">Co.</span>
              </span>
            </Link>
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition">
              <ArrowLeft className="h-4 w-4" /> Back
            </Link>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-light">╱ {eyebrow}</span>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl mt-4 tracking-tight">{title}</h1>
          <p className="font-mono text-[11px] uppercase tracking-widest text-white/50 mt-5">Last updated · {updated}</p>
        </div>
      </header>
      <main className="relative max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-24 space-y-10 text-muted leading-relaxed [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:text-ink [&_h2]:mb-3">
        {children}
      </main>
      <footer className="border-t border-divider py-8 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} Rooney Response Co. ·{' '}
        <Link to="/privacy" className="hover:text-primary">Privacy</Link> ·{' '}
        <Link to="/terms" className="hover:text-primary">Terms</Link>
      </footer>
    </div>
  )
}
