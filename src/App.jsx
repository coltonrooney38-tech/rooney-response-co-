import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Headphones,
  PhoneCall,
  MessageSquareText,
  CalendarCheck,
  MonitorSmartphone,
  Bot,
  Workflow,
  Zap,
  Menu,
  X,
  Upload,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ----------------------------------------------------------------
   Brand / Content
---------------------------------------------------------------- */
const BRAND = 'Rooney Response Co.'
const PHONE_DISPLAY = '(945) 232-7593'
const PHONE_TEL = '+19452327593'
const EMAIL = 'colt_rooney@icloud.com'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES_FULL = [
  {
    icon: PhoneCall,
    title: 'AI Voice Receptionist',
    text: 'A natural-sounding agent that answers every call, qualifies the job, quotes from your price list and books it — day or night.',
  },
  {
    icon: MessageSquareText,
    title: 'Instant Lead Follow-Up',
    text: 'Missed call? Web form? The lead gets a text in seconds, then smart follow-ups until they book or say no.',
  },
  {
    icon: CalendarCheck,
    title: 'Booking Automation',
    text: 'Appointments land straight in your calendar, with confirmations and reminders that cut no-shows.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Websites That Convert',
    text: 'Fast, mobile-first sites built to turn visitors into booked jobs — with your AI agent built right in.',
  },
  {
    icon: Bot,
    title: 'Custom AI Agents',
    text: 'Agents for quoting, intake, FAQs and review requests — whatever is eating your team’s day.',
  },
  {
    icon: Workflow,
    title: 'CRM & Integrations',
    text: 'We connect your phone, CRM, calendar and invoicing so every lead is tracked from first ring to paid.',
  },
]

function Logo({ dark = false, size = 'md' }) {
  const box = size === 'lg' ? 'h-10 w-10' : 'h-9 w-9'
  return (
    <span className={`relative flex ${box} items-center justify-center rounded-xl bg-gradient-to-br from-primary-light via-primary to-primary-dark shadow-lg shadow-primary/30`}>
      <Zap className="h-5 w-5 text-white" strokeWidth={2.4} fill="white" />
      <span className={`absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-accent ring-2 ${dark ? 'ring-deep' : 'ring-white/80'}`} />
    </span>
  )
}

/* ----------------------------------------------------------------
   Navbar
---------------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-primary/10' : 'bg-transparent'
        } rounded-full px-4 sm:px-6 py-2.5 w-[calc(100%-2rem)] max-w-5xl`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2.5 group">
            <Logo />
            <span className={`font-display font-bold tracking-tight text-lg ${scrolled ? 'text-ink' : 'text-white'} transition-colors`}>
              Rooney Response
              <span className={`ml-1 font-serif italic font-medium ${scrolled ? 'text-primary' : 'text-primary-light'}`}>Co.</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-tight lift-on-hover ${
                  scrolled ? 'text-ink/70 hover:text-primary' : 'text-white/90 hover:text-white'
                } transition-colors`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden lg:inline-flex magnetic-btn items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/30"
          >
            Free audit
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>

          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden p-2 rounded-full ${scrolled ? 'text-ink' : 'text-white'}`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-deep/90 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 left-0 right-0 bg-background rounded-b-5xl px-6 pt-8 pb-12 transition-transform duration-500 ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="flex items-center gap-2.5">
              <Logo />
              <span className="font-display font-bold text-xl text-ink">
                Rooney Response <span className="font-serif italic font-medium text-primary">Co.</span>
              </span>
            </span>
            <button onClick={() => setOpen(false)} className="p-2 rounded-full bg-divider/50" aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold text-ink py-3 border-b border-divider"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 magnetic-btn flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-full font-semibold w-full"
          >
            Book a free audit
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  )
}

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.15 })
      gsap.from('.hero-line-1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.3 })
      gsap.from('.hero-line-2', { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 })
      gsap.from('.hero-cta, .hero-meta', { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.8, stagger: 0.12 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-[100dvh] w-full overflow-hidden bg-deep">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2400&q=80"
          alt="Abstract visualisation of an AI network"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-deep/90 via-deep/60 to-primary/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />
      </div>

      {/* Floating signal particles (message pings) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[22%] right-[16%] h-2 w-2 rounded-full bg-primary-light/80 animate-float shadow-[0_0_12px_rgba(167,139,250,0.9)]" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[34%] right-[8%] h-1.5 w-1.5 rounded-full bg-accent/80 animate-float shadow-[0_0_10px_rgba(182,255,59,0.9)]" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-[48%] right-[24%] h-1 w-1 rounded-full bg-white/60 animate-float" style={{ animationDelay: '2.4s' }} />
        <div className="absolute top-[16%] right-[30%] animate-float" style={{ animationDelay: '3s' }}>
          <svg width="22" height="20" viewBox="0 0 24 22" className="opacity-50">
            <path d="M4 1 h16 a3 3 0 0 1 3 3 v9 a3 3 0 0 1 -3 3 h-9 l-5 5 v-5 h-2 a3 3 0 0 1 -3 -3 v-9 a3 3 0 0 1 3 -3 z" fill="none" stroke="#A78BFA" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="absolute top-[60%] right-[12%] h-1.5 w-1.5 rounded-full bg-primary/80 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Top frame */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center text-center">
        <div className="px-6 sm:px-10 lg:px-16 max-w-4xl pt-24 pb-16">
          <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-3.5 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/80">
              AI Agents · Automations · Websites
            </span>
          </div>

          <h1 className="font-display font-extrabold text-white leading-[0.95] tracking-tight">
            <span className="hero-line-1 block text-4xl sm:text-5xl md:text-6xl">Every lead, answered.</span>
            <span
              className="hero-line-2 block font-serif italic font-medium text-primary-light text-6xl sm:text-7xl md:text-8xl lg:text-9xl mt-2"
              style={{ lineHeight: '0.92' }}
            >
              In seconds.
            </span>
          </h1>

          <p className="hero-meta mx-auto max-w-xl text-white/75 text-base sm:text-lg mt-8 leading-relaxed">
            AI voice agents, instant follow-up and websites that book jobs — built for local service businesses
            that are done losing customers to voicemail.
            <span className="text-white"> You do the work. We answer the phone.</span>
          </p>

          <div className="hero-cta mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="magnetic-btn group inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-7 py-4 rounded-full shadow-2xl shadow-primary/40"
            >
              Book a free audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#process"
              className="lift-on-hover inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium px-7 py-4 rounded-full"
            >
              See how it works
            </a>
          </div>

          <div className="hero-meta mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/55">
            <span>24/7 coverage</span>
            <span className="h-1 w-1 rounded-full bg-primary-light/60" />
            <span>&lt;60s response</span>
            <span className="h-1 w-1 rounded-full bg-primary-light/60" />
            <span>Live in 14 days</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 sm:right-12 hidden md:flex flex-col items-center gap-2 text-white/50">
          <span className="font-mono uppercase text-[10px] tracking-[0.3em]">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Feature Card 1 — Voice call shuffler
---------------------------------------------------------------- */
function VoiceShuffler() {
  const items = [
    { tag: 'Inbound', label: 'After-hours call answered & qualified', meta: '02:14' },
    { tag: 'Booking', label: 'Job booked straight into the calendar', meta: '01:38' },
    { tag: 'Follow-up', label: 'Quote reminder call — customer said yes', meta: '00:52' },
  ]
  const [stack, setStack] = useState(items)

  useEffect(() => {
    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-44 w-full">
      {stack.map((item, i) => {
        const total = stack.length
        return (
          <div
            key={item.tag}
            style={{
              transform: `translate(${i * 14}px, ${i * 14}px) scale(${1 - i * 0.05})`,
              zIndex: total - i,
              opacity: 1 - i * 0.25,
              transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
            }}
            className="absolute inset-0 right-7 bottom-7 bg-white border border-divider rounded-3xl p-5 shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-1 rounded-full">
                {item.tag}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
                <PhoneCall className="h-3 w-3" /> {item.meta}
              </span>
            </div>
            <div className="mt-3 font-display text-base sm:text-lg font-semibold text-ink leading-tight">{item.label}</div>
            <div className="mt-3 flex items-end gap-[3px] h-4">
              {Array.from({ length: 28 }).map((_, idx) => (
                <span
                  key={idx}
                  className="w-[3px] rounded-full"
                  style={{
                    height: `${30 + Math.abs(Math.sin(idx * 1.7 + i)) * 70}%`,
                    background: idx < 28 - i * 8 ? '#7C3AED' : '#E4E1EE',
                  }}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 2 — Signature: Lead Stream
   (re-skinned rain: incoming messages fall from the agent bus onto
    a live voice waveform; status tells the missed-call → booked story)
---------------------------------------------------------------- */
function LeadStream() {
  const [statusIdx, setStatusIdx] = useState(0)
  const [count, setCount] = useState(11)

  const statuses = [
    { text: 'Agent online · listening', label: 'Live', tone: 'emerald' },
    { text: 'Missed call · (555) 014-2290', label: 'New lead', tone: 'accent' },
    { text: 'AI texted back · 4 sec', label: 'Replied', tone: 'primary' },
    { text: 'Job booked · Tue 10:00 AM', label: 'Booked', tone: 'emerald' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((idx) => {
        const next = (idx + 1) % statuses.length
        if (next === 3) setCount((c) => c + 1)
        return next
      })
    }, 2300)
    return () => clearInterval(interval)
  }, [])

  const packets = [
    { left: '14%', delay: '0.0s', dur: '2.6s', size: 16, lime: false },
    { left: '26%', delay: '1.3s', dur: '3.0s', size: 13, lime: true },
    { left: '38%', delay: '0.6s', dur: '2.8s', size: 18, lime: false },
    { left: '50%', delay: '1.8s', dur: '2.4s', size: 14, lime: false },
    { left: '62%', delay: '0.9s', dur: '3.1s', size: 17, lime: true },
    { left: '74%', delay: '2.0s', dur: '2.7s', size: 13, lime: false },
    { left: '86%', delay: '0.4s', dur: '2.9s', size: 16, lime: false },
  ]

  const ripples = [
    { left: '22%', delay: '0.2s' },
    { left: '48%', delay: '1.0s' },
    { left: '76%', delay: '1.8s' },
  ]

  const status = statuses[statusIdx]
  const toneText =
    status.tone === 'emerald' ? 'text-emerald-600' : status.tone === 'accent' ? 'text-accent-dark' : 'text-primary-dark'
  const toneDot = status.tone === 'emerald' ? 'bg-emerald-500' : status.tone === 'accent' ? 'bg-accent' : 'bg-primary'

  return (
    <div
      className="relative h-44 w-full rounded-3xl overflow-hidden border border-primary/15"
      style={{ background: 'linear-gradient(180deg, #F4F0FF 0%, #E6DCFF 70%, #D6C8FF 100%)' }}
    >
      {/* Soft glow blobs */}
      <div className="absolute -top-8 -left-6 h-20 w-32 rounded-full bg-white/60 blur-2xl" />
      <div className="absolute top-2 right-10 h-14 w-24 rounded-full bg-white/50 blur-xl" />

      {/* Header strip */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <Bot className="h-3.5 w-3.5 text-primary-dark" strokeWidth={2.2} />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-dark">Lead response</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-sm text-ink tabular-nums">{String(count).padStart(2, '0')}</span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted">booked today</span>
        </div>
      </div>

      {/* Source: agent bus with node chips + LEDs */}
      <svg className="absolute left-3 right-3 top-9 h-5" viewBox="0 0 400 20" preserveAspectRatio="none">
        <rect x="0" y="7" width="400" height="6" rx="3" fill="#7C3AED" fillOpacity="0.18" />
        <rect x="0" y="9" width="400" height="1.5" fill="#7C3AED" fillOpacity="0.45" />
        {[60, 152, 248, 340].map((x, i) => (
          <g key={x}>
            <rect x={x - 9} y="3" width="18" height="14" rx="3" fill="#5B21B6" fillOpacity="0.9" />
            <circle cx={x - 3} cy="10" r="1.6" fill="#B6FF3B">
              <animate attributeName="opacity" values="1;0.2;1" dur={`${1.2 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={x + 3} cy="10" r="1.6" fill="#A78BFA" />
          </g>
        ))}
      </svg>

      {/* Message packet field */}
      <div className="absolute inset-x-0 top-14 bottom-11 overflow-hidden">
        {packets.map((d, i) => (
          <svg
            key={i}
            className="absolute top-0"
            style={{
              left: d.left,
              width: `${d.size}px`,
              height: `${Math.round(d.size * 1.1)}px`,
              animation: `rain-fall ${d.dur} cubic-bezier(0.55,0.05,0.7,0.45) ${d.delay} infinite`,
              filter: d.lime ? 'drop-shadow(0 1px 3px rgba(120,190,0,0.45))' : 'drop-shadow(0 1px 3px rgba(91,33,182,0.35))',
              transform: 'translateX(-50%)',
            }}
            viewBox="0 0 24 26"
          >
            <defs>
              <linearGradient id={`pkt-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                {d.lime ? (
                  <>
                    <stop offset="0%" stopColor="#E2FFB0" />
                    <stop offset="55%" stopColor="#B6FF3B" />
                    <stop offset="100%" stopColor="#7FC400" />
                  </>
                ) : (
                  <>
                    <stop offset="0%" stopColor="#C4B5FD" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#5B21B6" />
                  </>
                )}
              </linearGradient>
            </defs>
            {/* Chat-bubble packet */}
            <path
              d="M4 1 h16 a3 3 0 0 1 3 3 v11 a3 3 0 0 1 -3 3 h-9 l-5 6 v-6 h-2 a3 3 0 0 1 -3 -3 v-11 a3 3 0 0 1 3 -3 z"
              fill={`url(#pkt-${i})`}
            />
            {/* Typing dots */}
            <circle cx="7.5" cy="9.5" r="1.5" fill="white" fillOpacity="0.9" />
            <circle cx="12" cy="9.5" r="1.5" fill="white" fillOpacity="0.9" />
            <circle cx="16.5" cy="9.5" r="1.5" fill="white" fillOpacity="0.9" />
          </svg>
        ))}
      </div>

      {/* Surface: live voice waveform */}
      <div className="absolute bottom-9 left-4 right-4 h-4 flex items-center justify-between gap-[2px]">
        {Array.from({ length: 48 }).map((_, i) => (
          <span
            key={i}
            className="flex-1 rounded-full bg-primary/45"
            style={{
              height: '100%',
              transformOrigin: 'center',
              animation: `wave-bar ${0.9 + (i % 5) * 0.18}s ease-in-out ${(i % 7) * 0.09}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Ripples (signal pings where packets land) */}
      <div className="absolute bottom-[38px] left-3 right-3 h-2">
        {ripples.map((r, i) => (
          <span
            key={i}
            className="absolute top-0 -translate-x-1/2 rounded-full border border-primary-dark/50"
            style={{ left: r.left, width: '4px', height: '4px', animation: `rain-ripple 2.4s ease-out ${r.delay} infinite` }}
          />
        ))}
      </div>

      {/* Bottom status */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`relative h-2 w-2 shrink-0 rounded-full ${toneDot}`}>
            {status.tone === 'accent' && <span className={`absolute inset-0 rounded-full ${toneDot} animate-ping`} />}
          </span>
          <span key={status.text} className={`font-mono text-[10px] truncate ${toneText}`} style={{ animation: 'rain-fadein 0.35s ease-out' }}>
            {status.text}
          </span>
        </div>
        <span className={`font-mono text-[9px] uppercase tracking-[0.2em] whitespace-nowrap pl-2 ${toneText}`}>{status.label}</span>
      </div>

      <style>{`
        @keyframes rain-fall {
          0%   { transform: translate(-50%, -10px); opacity: 0; }
          12%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { transform: translate(-50%, 70px); opacity: 0; }
        }
        @keyframes rain-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.9; }
          80%  { transform: translateX(-50%) scale(3.5); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
        }
        @keyframes rain-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wave-bar {
          0%, 100% { transform: scaleY(0.25); }
          50%      { transform: scaleY(1); }
        }
      `}</style>
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 3 — Cursor scheduler (website booking widget)
---------------------------------------------------------------- */
function SiteScheduler() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const [step, setStep] = useState(0)
  const activeDay = 2

  useEffect(() => {
    const interval = setInterval(() => setStep((prev) => (prev + 1) % 5), 1400)
    return () => clearInterval(interval)
  }, [])

  const cursorPos = (() => {
    switch (step) {
      case 0: return { x: 8, y: 110, opacity: 0 }
      case 1: return { x: 60, y: 60, opacity: 1 }
      case 2:
      case 3: return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 4: return { x: 130, y: 130, opacity: 1 }
      default: return { x: 8, y: 110, opacity: 0 }
    }
  })()

  return (
    <div className="relative h-44 w-full bg-white border border-divider rounded-3xl p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">yourbusiness.com · Book</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-0.5 rounded-full">Online</span>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((d, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center h-9 rounded-xl text-xs font-medium transition-all duration-300 ${
              step >= 3 && idx === activeDay ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30' : 'bg-background text-ink'
            }`}
          >
            <span className={`font-mono text-[9px] ${step >= 3 && idx === activeDay ? 'text-white/70' : 'text-muted'}`}>{d}</span>
            <span className="font-display font-semibold text-sm">{idx + 7}</span>
          </div>
        ))}
      </div>

      <button
        tabIndex={-1}
        aria-hidden="true"
        className={`w-full py-2.5 rounded-2xl font-medium text-xs transition-all duration-300 ${
          step === 4 ? 'bg-deep text-accent scale-[1.02] shadow-md shadow-primary/30' : 'bg-divider/50 text-muted'
        }`}
      >
        {step >= 3 ? '✓ Booked from your website' : 'Pick a time'}
      </button>

      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, opacity: cursorPos.opacity, transform: step === 3 ? 'scale(0.85)' : 'scale(1)' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="#16141F" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Features Section
---------------------------------------------------------------- */
function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', once: true },
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
      })
      gsap.from('.feature-heading > *', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 95%', once: true },
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const cards = [
    {
      eyebrow: '01 / Voice',
      heading: 'AI Voice Agents',
      sub: 'Picks up on the first ring',
      text: 'A receptionist that never sleeps. It answers, qualifies, quotes and books — then hands urgent calls to you with a full summary.',
      Component: VoiceShuffler,
    },
    {
      eyebrow: '02 / Automation',
      heading: 'Instant Follow-Up',
      sub: 'Missed call to booked job',
      text: 'Every missed call, form and DM gets a reply in seconds — and keeps getting nudged until it turns into a booking.',
      Component: LeadStream,
    },
    {
      eyebrow: '03 / Web',
      heading: 'Websites That Book',
      sub: 'Built to convert, not just look good',
      text: 'Fast, mobile-first sites with booking, chat and your AI agent built in. Visitors stop browsing and start scheduling.',
      Component: SiteScheduler,
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="feature-heading max-w-3xl mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ What we build</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            Three systems.
            <span className="block font-serif italic font-medium text-primary-dark mt-1">Zero missed leads.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="feature-card group relative bg-surface border border-divider rounded-5xl p-7 hover:border-primary/40 transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{card.eyebrow}</span>
                <ArrowUpRight
                  className="h-5 w-5 text-ink/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  strokeWidth={1.8}
                />
              </div>

              <card.Component />

              <div className="mt-6">
                <h3 className="font-display font-bold text-2xl text-ink leading-tight">{card.heading}</h3>
                <p className="font-serif italic text-primary-dark text-base mt-1">{card.sub}</p>
                <p className="text-muted text-[15px] mt-4 leading-relaxed">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   CountUp — animated counter (intersection observer + RAF)
---------------------------------------------------------------- */
function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const elemRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = elemRef.current
    if (!el) return
    let raf
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const startTime = performance.now()
            const animate = (now) => {
              const progress = Math.min((now - startTime) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(target * eased))
              if (progress < 1) raf = requestAnimationFrame(animate)
              else setCount(target)
            }
            raf = requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, duration])

  return <span ref={elemRef}>{count}</span>
}

/* ----------------------------------------------------------------
   Pillars — three numbers
---------------------------------------------------------------- */
function Pillars() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      n: '01', title: 'Speed', target: 60, prefix: '<', suffix: 's', label: 'lead response time',
      desc: 'Every call, form and text gets a reply in under a minute — the window where most jobs are won or lost.',
    },
    {
      n: '02', title: 'Coverage', target: 24, suffix: '/7', label: 'always-on agents',
      desc: 'Nights, weekends, holidays, while you’re on a job site. Your AI front desk never clocks out.',
    },
    {
      n: '03', title: 'Launch', target: 14, suffix: 'd', label: 'from audit to live',
      desc: 'Done-for-you build, tested on real calls before it ever speaks to one of your customers.',
    },
  ]

  return (
    <section id="approach" ref={ref} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[44rem] max-w-full rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary-dark mb-5">╱ The standard</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight">
              The numbers we
              <span className="block font-serif italic font-medium text-primary-dark">build around.</span>
            </h2>
          </div>
          <p className="text-muted text-lg leading-relaxed max-w-md lg:text-right">
            The fastest business to respond usually wins the job. Everything we build is engineered to make that you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider rounded-5xl overflow-hidden border border-divider shadow-xl shadow-primary/5">
          {pillars.map((p, i) => (
            <article
              key={i}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
              className={`relative bg-surface p-9 sm:p-12 group overflow-hidden transition-all duration-1000 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">{p.n} / {p.title}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all duration-500" />
              </div>

              <div className="flex items-end gap-1 leading-none">
                {p.prefix && (
                  <span className="font-serif italic font-medium text-4xl sm:text-5xl md:text-6xl text-primary-dark mb-3 sm:mb-4">{p.prefix}</span>
                )}
                <span className="font-display font-extrabold text-[6rem] sm:text-[8rem] md:text-[7rem] lg:text-[9rem] leading-[0.85] text-ink tabular-nums tracking-tight">
                  <CountUp target={p.target} duration={1800 + i * 200} />
                </span>
                <span className="font-serif italic font-medium text-4xl sm:text-5xl md:text-6xl text-primary-dark mb-3 sm:mb-4">{p.suffix}</span>
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-dark mt-5">{p.label}</p>
              <p className="text-muted text-[15px] mt-6 leading-relaxed max-w-xs">{p.desc}</p>

              <div className="absolute bottom-0 left-9 right-9 sm:left-12 sm:right-12 h-px bg-divider overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                  style={{ animation: `pillar-sweep 4s ease-in-out ${i * 0.4}s infinite` }}
                />
              </div>

              <span className="absolute top-9 right-9 sm:top-12 sm:right-12 font-mono text-[9px] uppercase tracking-widest text-primary/30">
                {p.n}.ai
              </span>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pillar-sweep {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}

/* ----------------------------------------------------------------
   Protocol — Sticky stacking cards
---------------------------------------------------------------- */
function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top top+=100',
            endTrigger: cards[cards.length - 1],
            end: 'top top+=120',
            scrub: 1,
          },
          scale: 0.92,
          filter: 'blur(6px) saturate(0.7)',
          opacity: 0.5,
          ease: 'none',
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      num: '01',
      title: 'Lead Audit',
      tagline: 'We find the leaks.',
      text: 'We call your business like a customer and map how leads arrive and where they go cold — missed calls, slow replies, a site that doesn’t convert. You get a clear plan and a fixed price.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      alt: 'Strategy session mapping out a business workflow',
      meta: 'Step 1 / Audit',
    },
    {
      num: '02',
      title: 'Build & Train',
      tagline: 'We build your agents.',
      text: 'Voice agents trained on your services, prices and calendar. Follow-up sequences, booking flows and a fast new site — wired into the tools you already use.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
      alt: 'Developer building an automation on a laptop',
      meta: 'Step 2 / Build',
    },
    {
      num: '03',
      title: 'Launch & Optimize',
      tagline: 'We stay on it.',
      text: 'We go live, review conversations and tune scripts every week. Monthly reports show calls answered, leads recovered and jobs booked.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Performance dashboard with charts on a laptop',
      meta: 'Step 3 / Optimize',
    },
  ]

  return (
    <section id="process" ref={containerRef} className="relative px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto mb-16 px-2 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ How it works</span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
          Three steps.
          <span className="block font-serif italic font-medium text-primary-dark">Then it runs itself.</span>
        </h2>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <article
            key={idx}
            className="protocol-card sticky top-24 sm:top-28 mx-auto max-w-6xl bg-gradient-to-br from-surface to-background border border-divider rounded-4xl sm:rounded-6xl overflow-hidden shadow-2xl shadow-primary/5"
          >
            <div className="grid lg:grid-cols-5 gap-0 lg:min-h-[70vh]">
              <div className="lg:col-span-3 p-7 sm:p-12 lg:p-16 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{step.meta}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                    Response Protocol
                  </span>
                </div>

                <div className="my-8 sm:my-12">
                  <span className="font-display font-extrabold text-[5rem] sm:text-[10rem] leading-none text-primary/15 -mb-3 sm:-mb-4 block">{step.num}</span>
                  <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tight">{step.title}</h3>
                  <p className="font-serif italic text-primary-dark text-2xl sm:text-3xl mt-3">{step.tagline}</p>
                </div>

                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">{step.text}</p>
              </div>

              <div className="lg:col-span-2 relative overflow-hidden min-h-[220px] sm:min-h-[300px] lg:min-h-full bg-deep">
                <img src={step.image} alt={step.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-primary/10 to-deep/20" />
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink">Step {step.num}</span>
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-white/70">
                  {step.num} / Rooney Response
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Services grid (all 6)
---------------------------------------------------------------- */
function ServicesGrid() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
        y: 30, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.06,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-24 px-6 sm:px-10 lg:px-16 bg-deep text-white overflow-hidden rounded-t-4xl sm:rounded-t-6xl">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-light">╱ Everything we do</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
              Your whole front desk,
              <span className="block font-serif italic font-medium text-primary-light">on autopilot.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-base leading-relaxed">
            Pick one system or let us run the lot. Built for trades, clinics, salons and every business that lives on the phone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-4xl overflow-hidden">
          {SERVICES_FULL.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div key={i} className="svc-tile group bg-deep p-7 sm:p-9 hover:bg-white/[0.03] transition-colors duration-500 relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <Icon className="h-5 w-5 text-primary-light group-hover:text-white" strokeWidth={2} />
                  </div>
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest group-hover:text-accent transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mb-3">{svc.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{svc.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Trust signals
---------------------------------------------------------------- */
function TrustSignals() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const badges = [
    {
      Icon: ShieldCheck,
      title: 'Done-for-you setup',
      text: 'We build, test and launch everything. No software to learn, no prompts to write, nothing to babysit.',
    },
    {
      Icon: Award,
      title: 'Trained on your business',
      text: 'Your services, prices, service area and tone of voice. It sounds like your best front-desk hire.',
    },
    {
      Icon: Headphones,
      title: 'Human handoff',
      text: 'Emergencies and big jobs transfer straight to you — with a summary of the conversation so far.',
    },
  ]

  return (
    <section ref={ref} className="relative py-14 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ Why owners trust us</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink mt-3 tracking-tight">
            AI that sounds like <span className="font-serif italic font-medium text-primary-dark">you.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {badges.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
              className={`bg-white border border-divider rounded-4xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-700 ease-out shadow-sm hover:shadow-lg hover:shadow-primary/10 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Icon className="h-6 w-6 text-primary mb-3" strokeWidth={1.8} />
              <h3 className="font-display font-bold text-lg text-ink mb-1.5">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-primary/30"
          >
            Book a free audit
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Contact form
---------------------------------------------------------------- */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', website: '', message: '' })
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [dragging, setDragging] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  const handleFiles = (newFiles) => setFiles((prev) => [...prev, ...Array.from(newFiles)].slice(0, 5))
  const removeFile = (idx) => setFiles((prev) => prev.filter((_, i) => i !== idx))

  const contactItems = [
    { Icon: Phone, label: 'Call us', value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
    { Icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { Icon: MapPin, label: 'Where we work', value: 'Remote · local businesses nationwide' },
    { Icon: Clock, label: 'Hours', value: 'Mon–Fri 9–6 · your agents 24/7' },
  ]

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-dark">╱ Contact</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
              Stop losing
              <span className="block font-serif italic font-medium text-primary-dark">leads tonight.</span>
            </h2>
            <p className="text-muted text-lg mt-6 leading-relaxed max-w-md">
              Tell us about your business and we’ll send back a free lead-response audit — including a test call to your own number.
            </p>

            <div className="mt-10 space-y-4">
              {contactItems.map(({ Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="h-12 w-12 shrink-0 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                      <Icon className="h-5 w-5 text-primary group-hover:text-white" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">{label}</span>
                      <span className="font-display font-semibold text-ink text-base sm:text-lg break-words">{value}</span>
                    </span>
                  </>
                )
                return href ? (
                  <a key={label} href={href} className="lift-on-hover flex items-center gap-4 group">{inner}</a>
                ) : (
                  <div key={label} className="flex items-center gap-4">{inner}</div>
                )
              })}
            </div>

            <div className="mt-10 p-5 rounded-3xl bg-primary/5 border border-primary/15">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary-dark mb-2">Your data stays yours</p>
              <p className="text-sm text-muted leading-relaxed">
                We only use your details to prepare your audit and reply to your enquiry. No list selling, no third-party marketing.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-surface border border-divider rounded-4xl sm:rounded-5xl p-6 sm:p-10 shadow-xl shadow-primary/5">
              {status !== 'sent' ? (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Your name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                    <Field label="Email" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                    <Field label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                    <Field label="Business / website" value={form.website} onChange={(v) => setForm({ ...form, website: v })} />
                  </div>

                  <div className="mt-5">
                    <label htmlFor="msg" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
                      What do you need? *
                    </label>
                    <textarea
                      id="msg"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="What kind of business do you run, and where are leads slipping through?"
                      className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition resize-none font-body"
                    />
                  </div>

                  <div
                    onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={(e) => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files) }}
                    className={`mt-5 border-2 border-dashed rounded-3xl p-6 text-center transition-colors ${
                      dragging ? 'border-primary bg-primary/5' : 'border-divider hover:border-primary/50'
                    }`}
                  >
                    <input
                      type="file"
                      multiple
                      id="file-up"
                      className="hidden"
                      onChange={(e) => handleFiles(e.target.files)}
                      accept="image/*,audio/*,.pdf"
                    />
                    <label htmlFor="file-up" className="cursor-pointer block">
                      <Upload className="h-6 w-6 mx-auto text-primary-dark mb-2" />
                      <p className="font-display font-semibold text-ink text-sm">Attach screenshots, call recordings or brand files</p>
                      <p className="text-xs text-muted mt-1">Click or drag files here (max 5)</p>
                    </label>
                    {files.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        {files.map((f, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary-dark text-xs pl-3 pr-1.5 py-1.5 rounded-full font-mono">
                            <CheckCircle2 className="h-3 w-3" />
                            {f.name.length > 22 ? f.name.slice(0, 22) + '…' : f.name}
                            <button type="button" onClick={() => removeFile(i)} className="ml-0.5 rounded-full p-0.5 hover:bg-primary/20" aria-label={`Remove ${f.name}`}>
                              <X className="h-3 w-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-muted">We reply within one business day. Fields marked * are required.</p>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/30 disabled:opacity-60"
                    >
                      {status === 'sending' ? 'Sending…' : 'Get my free audit'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="h-16 w-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-6 ring-pulse">
                    <CheckCircle2 className="h-8 w-8 text-primary-dark" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink mb-3">Thanks — you’re in the queue.</h3>
                  <p className="text-muted max-w-md mx-auto">
                    We’ll review your business and get back to you within one business day with your audit.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, type = 'text', required, value, onChange }) {
  const id = `f-${label.toLowerCase().replace(/[^a-z]+/g, '-')}`
  return (
    <div>
      <label htmlFor={id} className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
        {label} {required && '*'}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition font-body"
      />
    </div>
  )
}

/* ----------------------------------------------------------------
   Footer
---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative bg-deep text-white rounded-t-4xl sm:rounded-t-6xl mt-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[40rem] max-w-full rounded-full bg-primary/25 blur-3xl" />

      <div className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-10 max-w-7xl mx-auto">
        <div className="border-b border-white/10 pb-12 mb-12">
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl leading-[0.92] tracking-tight">
            Every lead,
            <span className="font-serif italic font-medium text-primary-light block">answered.</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-8 gap-6">
            <p className="text-white/50 max-w-md">
              {BRAND} — AI agents, automations and websites for local service businesses.
            </p>
            <a
              href="#contact"
              className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full self-start sm:self-auto shadow-lg shadow-primary/30"
            >
              Book a free audit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Logo dark />
              <span className="font-display font-bold text-lg">
                Rooney Response <span className="font-serif italic font-medium text-primary-light">Co.</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              We build the AI front desk for businesses that are too busy doing the work to answer the phone.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-light mb-4">Services</p>
            <ul className="space-y-2.5">
              {SERVICES_FULL.slice(0, 4).map((s, i) => (
                <li key={i}>
                  <a href="#services" className="text-white/65 hover:text-primary-light transition text-sm">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-light mb-4">Company</p>
            <ul className="space-y-2.5">
              <li><a href="#approach" className="text-white/65 hover:text-primary-light transition text-sm">Approach</a></li>
              <li><a href="#process" className="text-white/65 hover:text-primary-light transition text-sm">Process</a></li>
              <li><a href="#contact" className="text-white/65 hover:text-primary-light transition text-sm">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-light mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li><a href={`tel:${PHONE_TEL}`} className="text-white/65 hover:text-primary-light transition text-sm">{PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="text-white/65 hover:text-primary-light transition text-sm break-all">{EMAIL}</a></li>
              <li className="text-white/65 text-sm">Remote · Nationwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">All agents online · Answering now</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/50 text-xs font-mono">
            <Link to="/privacy" className="hover:text-primary-light transition">Privacy</Link>
            <Link to="/terms" className="hover:text-primary-light transition">Terms</Link>
            <span>© {new Date().getFullYear()} {BRAND}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------------------------------------------
   App
---------------------------------------------------------------- */
export default function App() {
  useEffect(() => {
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200)
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1000)
    document.fonts?.ready.then(() => ScrollTrigger.refresh())
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pillars />
        <Protocol />
        <ServicesGrid />
        <TrustSignals />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
