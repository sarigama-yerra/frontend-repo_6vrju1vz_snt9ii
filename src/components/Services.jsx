import React from 'react'
import { Sparkles, Workflow, LayoutDashboard, Megaphone, MousePointerClick, Zap, Bot, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: <LayoutDashboard className="h-6 w-6 text-indigo-600" />,
    title: 'Marketing Design',
    desc: 'Brand systems, high-converting landing pages, and UI that turns attention into action.'
  },
  {
    icon: <Megaphone className="h-6 w-6 text-amber-600" />,
    title: 'Performance Creative',
    desc: 'Ad concepts, motion graphics, and content that’s built to test and scale across channels.'
  },
  {
    icon: <MousePointerClick className="h-6 w-6 text-fuchsia-600" />,
    title: 'CRO & Experimentation',
    desc: 'Research, A/B testing, and funnel optimization with clear hypotheses and results.'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-emerald-600" />,
    title: 'Analytics & Attribution',
    desc: 'Tracking, dashboards, and models so you can see what’s working and double down.'
  },
  {
    icon: <Bot className="h-6 w-6 text-cyan-600" />,
    title: 'AI Automation',
    desc: 'Lead triage, enrichment, and follow-ups with human-in-the-loop workflows that save hours.'
  },
  {
    icon: <Zap className="h-6 w-6 text-rose-600" />,
    title: 'Ops & Enablement',
    desc: 'Playbooks, systems, and training to keep teams moving quickly with quality.'
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Marketing Design & AI Automation</h2>
          <p className="mt-4 text-gray-600">We blend creative, data, and automation to launch faster and learn continuously.</p>
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
