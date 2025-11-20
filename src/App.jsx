import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <HowItWorks />
        <Services />
        <Showcase />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
