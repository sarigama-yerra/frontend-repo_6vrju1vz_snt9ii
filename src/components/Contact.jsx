import React, { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          company: e.target.company.value,
          message: e.target.message.value,
        })
      })
      if (res.ok) setStatus('Thanks! We will get back within 24 hours.')
      else setStatus('Something went wrong. Please try again.')
    } catch (err) {
      setStatus('Network error. Please try later.')
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let’s build something</h2>
          <p className="mt-4 text-gray-600">Tell us about your goals. We’ll share a quick plan and timeline.</p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4">
          <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-sm outline-none ring-0 focus:border-gray-300" />
          <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-sm outline-none ring-0 focus:border-gray-300" />
          <input name="company" placeholder="Company (optional)" className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-sm outline-none ring-0 focus:border-gray-300" />
          <textarea name="message" required rows="5" placeholder="What do you want to achieve?" className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-sm outline-none ring-0 focus:border-gray-300" />
          <button className="mt-2 inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800">Request Proposal</button>
          {status && <p className="text-sm text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
