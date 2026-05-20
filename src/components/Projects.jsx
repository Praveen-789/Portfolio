import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './icons'

const projects = [
  {
    title: 'FleetManagement Dashboard',
    description:
      'Responsive fleet monitoring and analytics dashboard with interactive charts, reusable form components, and real-time RESTful API integration.',
    tags: ['Angular', 'Chart.js', 'NVD3', 'Bootstrap', 'REST APIs'],
    points: [
      'Interactive charts for fleet analytics and reporting',
      'Reusable form components for data entry and management',
      'Responsive design across multiple browsers and devices',
      'Optimized UI performance and scalable API consumption',
    ],
    github: 'https://github.com/Praveen-789',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    title: 'Fleet Tracking Mobile App',
    description:
      'Cross-platform mobile app for fleet device inventory and trip lifecycle management with QR/barcode scanning and role-based operational flows.',
    tags: ['React Native', 'Expo', 'TypeScript', 'REST APIs'],
    points: [
      'GPS device assignment, trip creation, and completion workflows',
      'QR/barcode scanning for seal verification at checkpoints',
      'Role-based flows for installers and uninstallers in the field',
      'Optimized responsive mobile UI for Android with Expo',
    ],
    github: 'https://github.com/Praveen-789',
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'SaaS Task Management System',
    description:
      'Multi-tenant SaaS platform for multiple organizations with dynamic RBAC, JWT auth, and organization-level data isolation.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Mongoose'],
    points: [
      'Dynamic RBAC with customizable roles and permissions per org',
      'JWT-based authentication and authorization middleware',
      'Scalable MongoDB schemas for multi-tenant architecture',
      'Organization-level data isolation for secure access',
    ],
    github: 'https://github.com/Praveen-789',
    gradient: 'from-fuchsia-500 to-pink-500',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">What I've Built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group bg-gray-900 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 flex flex-col overflow-hidden"
            >
              {/* Gradient accent bar */}
              <div className={`h-1 bg-gradient-to-r ${p.gradient}`} />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {p.points.map((pt, j) => (
                    <li key={j} className="text-gray-500 text-xs flex gap-2">
                      <span className="text-purple-500 flex-shrink-0 mt-0.5">▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-purple-400 text-sm font-medium transition-colors"
                >
                  <GithubIcon size={15} /> View on GitHub <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
