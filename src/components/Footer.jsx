import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-extrabold">Byte Builder Studios</h3>
            <p className="text-black/70 mt-1 max-w-md">AI app builder • No‑code development • Deploy with custom domain • Monetize easily</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-md hover:bg-black/5" aria-label="GitHub"><Github className="w-5 h-5" /></a>
            <a href="#" className="p-2 rounded-md hover:bg-black/5" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="p-2 rounded-md hover:bg-black/5" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-black/70">
          <div>© Byte Builder Studios, {new Date().getFullYear()}</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
            <a href="#" className="hover:text-black">About</a>
            <a href="#" className="hover:text-black">Services</a>
            <a href="#" className="hover:text-black">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
