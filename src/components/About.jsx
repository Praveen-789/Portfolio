const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '3', label: 'Production Projects' },
  { value: '5+', label: 'Tech Stacks' },
  { value: '100%', label: 'Commitment' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Who I Am</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a{' '}
              <span className="text-purple-400 font-semibold">Full Stack JavaScript Developer</span> with
              over 3 years of experience building scalable web and mobile applications. I specialize in
              Angular, React Native, Node.js, and MongoDB.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Currently at{' '}
              <span className="text-white font-medium">Fleetronix Systems</span>, I build responsive
              dashboards, reusable component systems, and RESTful APIs for fleet management platforms. I'm
              also independently developing a multi-organization SaaS task management platform with dynamic
              RBAC and secure multi-tenant architecture.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Passionate about clean architecture, performance optimization, and delivering real-world
              solutions that scale. Comfortable across the full stack — from crafting pixel-perfect UIs to
              designing robust backend systems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats?.map((s) => (
              <div
                key={s.label}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-colors text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-2">
                  {s.value}
                </div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
