import React from 'react'

const quotes = [
  {
    name: 'Ava Thompson',
    role: 'VP Growth, Kineo',
    text: 'Their ability to tie creative to measurable outcomes is rare. We saw impact within weeks.'
  },
  {
    name: 'Ravi Patel',
    role: 'Founder, LumenPay',
    text: 'Clear strategy, crisp design, and a team that actually ships. Could not recommend more.'
  },
  {
    name: 'Mara Kim',
    role: 'CMO, Octon',
    text: 'They built our experimentation muscle and handed us the playbook. Real partners.'
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What clients say</h2>
          <p className="mt-4 text-gray-600">We focus on outcomes and ownership. Here’s what that feels like.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <blockquote className="text-sm text-gray-700">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-gray-900">{q.name} <span className="font-normal text-gray-500">— {q.role}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
