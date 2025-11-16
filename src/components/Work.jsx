import React from 'react'

const items = [
  {
    tag: 'SaaS',
    title: '32% lower CAC with design + AI handoff',
    desc: 'Refactored landing system, launched testable ad creative, and automated lead enrichment for SDRs.'
  },
  {
    tag: 'Ecommerce',
    title: '8-figure launch with lifecycle automation',
    desc: 'Full GTM, landing, and lifecycle journey. AI follow-ups lifted repeat purchases by 7.3%.'
  },
  {
    tag: 'Fintech',
    title: 'Systematic experimentation to Series B',
    desc: 'Design system + content engine, with attribution tuning and weekly testing cadence.'
  },
]

function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Selected Work</h2>
          <p className="mt-4 text-gray-600">Outcomes weve delivered with creative, data, and automation together.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((w) => (
            <div key={w.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{w.tag}</span>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">{w.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
