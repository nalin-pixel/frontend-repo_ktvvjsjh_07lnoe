import { Bot, Code, LayoutDashboard, CreditCard, Briefcase } from 'lucide-react'

export default function Services() {
  const items = [
    { icon: Bot, title: 'AI‑Driven App Generation', desc: 'Turn plain‑English ideas into working prototypes and code you can export.' },
    { icon: LayoutDashboard, title: 'No‑Code / Low‑Code', desc: 'Build dashboards, CRUD apps, and workflows with visual editing.' },
    { icon: Code, title: 'Custom Web Apps', desc: 'When you need something unique, we design and develop bespoke solutions.' },
    { icon: CreditCard, title: 'Monetization & Analytics', desc: 'Integrations with Stripe subscriptions, payments, and product analytics.' },
    { icon: Briefcase, title: 'Consulting & Delivery', desc: 'From strategy to launch. We ship MVPs fast and help teams adopt AI.' },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black text-center">What We Offer</h2>
        <p className="mt-3 text-black/70 text-center max-w-2xl mx-auto">Everything you need to build, deploy, and grow your product — fast.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-black/10 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                <Icon />
              </div>
              <h3 className="mt-4 text-xl font-bold text-black">{title}</h3>
              <p className="mt-2 text-black/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
