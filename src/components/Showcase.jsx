import { AppWindow, MessageSquare, Rocket, Coins } from 'lucide-react'

export default function Showcase() {
  const cards = [
    { icon: AppWindow, title: 'Client Portal', desc: 'A secure dashboard with subscriptions and analytics.' },
    { icon: MessageSquare, title: 'Chat‑Based Builder', desc: 'Describe your idea and watch the app assemble live.' },
    { icon: Rocket, title: 'One‑Click Deploy', desc: 'Go live with custom domains and CI out of the box.' },
  ]

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">Case Studies & Examples</h2>
            <p className="mt-3 text-black/70 max-w-2xl">A peek at what’s possible — from prototypes to production‑ready products.</p>
          </div>
          <a href="#cta" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition-colors">Build with us</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-black/10 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                  <Icon />
                </div>
                <h3 className="mt-4 text-xl font-bold text-black">{title}</h3>
                <p className="mt-2 text-black/70">{desc}</p>
              </div>
              <div className="h-36 bg-gradient-to-br from-orange-50 to-white border-t border-black/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
