const skillGroups = [
  {
    category: 'Frontend',
    badgeClass: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    headerClass: 'text-purple-400',
    skills: ['Angular', 'React', 'React Native', 'Expo', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    category: 'Backend',
    badgeClass: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    headerClass: 'text-violet-400',
    skills: ['Node.js', 'Express.js', 'REST API Development'],
  },
  {
    category: 'Database',
    badgeClass: 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20',
    headerClass: 'text-fuchsia-400',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Tools',
    badgeClass: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    headerClass: 'text-indigo-400',
    skills: ['Git', 'Postman', 'VS Code', 'Spring Tool Suite'],
  },
  {
    category: 'Concepts',
    badgeClass: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
    headerClass: 'text-pink-400',
    skills: ['JWT Authentication', 'RBAC', 'API Integration', 'Agile Development', 'Responsive Design'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">What I Know</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills &amp; Technologies</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500/30 transition-colors"
            >
              <h3 className={`font-semibold text-sm uppercase tracking-wider mb-4 ${group.headerClass}`}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-3 py-1.5 rounded-full border font-medium ${group.badgeClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
