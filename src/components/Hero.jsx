import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/90 text-white px-3 py-1 text-xs font-semibold shadow">AI + No‑Code Studio</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black">
            Build & Launch Your App — No Code, Just Chat
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-black/70">
            Byte Builder Studios makes it easy — from idea to running product.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition-colors">Get Started</a>
            <a href="#how" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold shadow border border-black/10 hover:bg-black/5 transition-colors">See how it works</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white" />
    </section>
  )
}
