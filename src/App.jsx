import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),rgba(59,130,246,0)_60%)]" />
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Design Data Dynamics. All rights reserved.</p>
          <div className="text-sm text-gray-600">Built for performance • Analytics-first • Privacy-conscious</div>
        </div>
      </footer>
    </div>
  )
}

export default App
