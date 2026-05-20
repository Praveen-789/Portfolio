const experience = [
  {
    role: 'Software Development Engineer (SDE)',
    company: 'Fleetronix Systems Pvt Ltd',
    period: 'April 2023 – Present',
    type: 'Full-time',
    points: [
      'Develop and maintain web applications using Angular, JavaScript, and TypeScript.',
      'Build reusable UI components and integrate RESTful APIs for dynamic data handling.',
      'Implement responsive UI designs using HTML, CSS, and Bootstrap ensuring cross-browser compatibility.',
      'Optimize application performance to ensure scalability and high responsiveness.',
      'Develop interactive dashboards using Chart.js and NVD3 for fleet management analytics.',
      'Collaborate with backend developers and UX/UI teams to improve application functionality.',
      'Participate in code reviews, debugging, and agile development processes.',
      'Contributed to backend development using Node.js by designing RESTful APIs and implementing business logic.',
    ],
    tags: ['Angular', 'TypeScript', 'Node.js', 'Chart.js', 'NVD3', 'REST APIs', 'Bootstrap'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Industry Internship',
    period: 'Pre-2023',
    type: 'Internship',
    points: [
      'Developed multiple web applications using HTML, CSS, JavaScript, and Angular.',
      'Built backend services using Java and Spring Boot.',
      'Designed responsive UI components using Bootstrap.',
      'Integrated MySQL databases for data storage and application functionality.',
    ],
    tags: ['HTML', 'CSS', 'Angular', 'Java', 'Spring Boot', 'MySQL', 'Bootstrap'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Where I've Worked</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-purple-500 via-violet-500 to-transparent" />

            <div className="flex flex-col gap-10">
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-14">
                  {/* Timeline dot */}
                  <div className="absolute left-[0.875rem] top-7 w-3 h-3 rounded-full bg-purple-500 border-2 border-gray-900 ring-4 ring-purple-500/20 -translate-x-1/2" />

                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-200">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-white font-bold text-lg leading-snug">{exp.role}</h3>
                      <span className="text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20 px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-purple-400 font-medium mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-5">{exp.period}</p>

                    <ul className="space-y-2 mb-5">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="text-gray-400 text-sm flex gap-2">
                          <span className="text-purple-500 mt-0.5 flex-shrink-0">▸</span>
                          {pt}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-700 text-gray-300 px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
