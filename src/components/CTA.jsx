export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to build?</h2>
        <p className="mt-3 opacity-90 max-w-2xl mx-auto">Start a project, schedule a consultation, or try a demo — your product could be live this week.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/test" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold shadow hover:bg-white/90 transition-colors">Try a demo</a>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-black text-white font-semibold shadow hover:bg-black/90 transition-colors">Start a project</a>
        </div>
      </div>
    </section>
  )
}
