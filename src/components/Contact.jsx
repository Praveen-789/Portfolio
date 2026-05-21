import { Mail, Phone, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

const contacts = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'Praveennagadesi789@gmail.com',
    href: 'mailto:Praveennagadesi789@gmail.com',
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+91 7893900268',
    href: 'tel:+917893900268',
  },
  {
    Icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'praveen-nagadesi-34a064179',
    href: 'https://www.linkedin.com/in/praveen-nagadesi-34a064179/',
  },
  {
    Icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/Praveen-789',
    href: 'https://github.com/Praveen-789',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contact</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-gray-400 text-center text-lg mb-12">
            Open to new opportunities, collaborations, or just a good tech chat. Reach out through any
            channel below.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {contacts.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900/80 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                  <Icon size={20} className="text-purple-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">{label}</p>
                  <p className="text-gray-200 text-sm font-medium truncate">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              // href="mailto:Praveennagadesi789@gmail.com"
              href="https://wa.me/917893900268?text=Hi%20Praveen,%20I%20saw%20your%20portfolio"
               target="_blank"
               rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Send size={20} /> Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
