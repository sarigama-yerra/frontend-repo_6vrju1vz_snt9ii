import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/60" />
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-gray-900/10 backdrop-blur">
            Marketing Design • AI Automation • Faster Growth
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Design Data Dynamics
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We craft high-converting brands, websites, and campaigns—then automate the busywork with AI. Better creative, cleaner data, and systems that scale your growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-gray-800">
              Get an AI + Design Audit
            </a>
            <a href="#services" className="inline-flex items-center rounded-full bg-white/80 px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-900/10 hover:bg-white">
              Explore Services
            </a>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-3 text-xs text-gray-600 sm:grid-cols-3">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-600" />Design systems & conversion UX</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-600" />AI workflows for lead handling</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-600" />Attribution, testing, and insights</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
