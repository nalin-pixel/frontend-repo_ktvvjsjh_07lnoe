import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (href, label) => (
    <a
      href={href}
      className="text-gray-800 hover:text-black font-medium transition-colors"
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-orange-500" />
            <span className="text-lg font-extrabold tracking-tight">Byte Builder Studios</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItem('#how', 'How it works')}
            {navItem('#services', 'Services')}
            {navItem('#cases', 'Case studies')}
            {navItem('#pricing', 'Pricing')}
            {navItem('#contact', 'Contact')}
          </nav>

          <div className="hidden md:block">
            <a href="#cta" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition-colors">Get Started</a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navItem('#how', 'How it works')}
            {navItem('#services', 'Services')}
            {navItem('#cases', 'Case studies')}
            {navItem('#pricing', 'Pricing')}
            {navItem('#contact', 'Contact')}
            <a href="#cta" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition-colors">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}
