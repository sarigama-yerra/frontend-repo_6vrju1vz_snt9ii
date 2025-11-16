import React from 'react'
import { BarChart3, Sparkles, Rocket, LineChart, MousePointerClick, Megaphone } from 'lucide-react'

const services = [
  {
    icon: <Sparkles className="h-6 w-6 text-indigo-600" />,
    title: 'Brand & Creative',
    desc: 'Visual identity, design systems, and UI libraries that scale across every channel.'
  },
  {
    icon: <LineChart className="h-6 w-6 text-cyan-600" />,
    title: 'Performance Marketing',
    desc: 'Paid search, social, and programmatic campaigns optimized for ROAS and CAC.'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-emerald-600" />,
    title: 'Analytics & Data',
    desc: 'Tracking, dashboards, and experimentation frameworks to measure what matters.'
  },
  {
    icon: <MousePointerClick className="h-6 w-6 text-fuchsia-600" />,
    title: 'CRO & UX',
    desc: 'Rapid testing, user research, and funnel optimization to increase conversions.'
  },
  {
    icon: <Megaphone className="h-6 w-6 text-amber-600" />,
    title: 'Content & SEO',
    desc: 'AI-assisted content ops and technical SEO to grow organic demand.'
  },
  {
    icon: <Rocket className="h-6 w-6 text-rose-600" />,
    title: 'Product Launch',
    desc: 'Go-to-market strategy, landing pages, and lifecycle campaigns that scale.'
  },
]

function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8">
          <div className="h-full rounded-3xl bg-gradient-to-br from-indigo-50 to-cyan-50" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services</h2>
          <p className="mt-4 text-gray-600">Full-funnel capabilities designed to ship fast and iterate even faster.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white ring-1 ring-gray-200">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <div className="mt-4 text-sm font-semibold text-indigo-600 opacity-0 transition group-hover:opacity-100">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
