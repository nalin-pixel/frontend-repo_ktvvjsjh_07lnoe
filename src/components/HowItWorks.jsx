import { MessageCircle, Sparkles, Rocket } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Chat Your Idea',
      desc: 'Describe your app in natural language. Share your goals, audience, and must‑have features.'
    },
    {
      icon: Sparkles,
      title: 'AI Builds It',
      desc: 'Our AI generates a working prototype or blueprint — fast. Iterate with simple prompts.'
    },
    {
      icon: Rocket,
      title: 'Deploy & Monetize',
      desc: 'Export code or launch with payments, analytics, and a custom domain in minutes.'
    }
  ]

  return (
    <section id="how" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black text-center">How It Works</h2>
        <p className="mt-3 text-black/70 text-center max-w-2xl mx-auto">From idea to launch — simple, fast, and powerful.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
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
