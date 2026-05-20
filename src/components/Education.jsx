import { GraduationCap } from 'lucide-react'

const education = [
  {
    degree: 'B.Tech – Computer Science & Engineering',
    institution: 'PVP Siddhartha Institute of Technology',
    score: 'GPA: 6.8',
    type: 'Undergraduate',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Narayana College',
    score: 'Score: 89%',
    type: '12th Grade',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Academic Background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {education.map((e, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} className="text-purple-400" />
                </div>
                <div>
                  <span className="text-xs text-purple-400 font-medium uppercase tracking-wider">
                    {e.type}
                  </span>
                  <h3 className="text-white font-bold mt-1 mb-1">{e.degree}</h3>
                  <p className="text-gray-400 text-sm">{e.institution}</p>
                  <p className="text-violet-400 text-sm mt-2 font-semibold">{e.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
