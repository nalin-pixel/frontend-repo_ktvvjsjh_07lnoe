export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$0',
      note: 'Try the AI builder',
      features: ['Chat your idea', 'Prototype preview', 'Export snapshot']
    },
    {
      name: 'Pro',
      price: '$79/mo',
      note: 'For serious builders',
      features: ['Custom components', 'Deploy to domain', 'Stripe subscriptions', 'Analytics']
    },
    {
      name: 'Studio',
      price: 'Let’s talk',
      note: 'Full‑service delivery',
      features: ['Bespoke design & dev', 'Roadmapping & consulting', 'Migrations & CI/CD']
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black text-center">Pricing</h2>
        <p className="mt-3 text-black/70 text-center max-w-2xl mx-auto">Flexible paths for founders, teams, and enterprises.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-xl border border-black/10 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-black">{t.name}</h3>
              <p className="text-3xl font-extrabold mt-2">{t.price}</p>
              <p className="text-black/70 mt-1">{t.note}</p>
              <ul className="mt-4 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span className="text-black/80">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center px-4 py-2 rounded-md bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition-colors">Select</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
