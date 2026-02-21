export default function Projects() {
  const projects = [
    { id: 1, icon: '🛒', title: 'E-Commerce Platform', description: 'Full-stack e-commerce solution with payment gateway integration, inventory management, and real-time analytics.', technologies: ['React', 'Node.js', 'MongoDB'] },
    { id: 2, icon: '📊', title: 'SaaS Dashboard', description: 'Analytics and management dashboard for enterprise clients with real-time data visualization and reporting.', technologies: ['React', 'Express', 'PostgreSQL'] },
    { id: 3, icon: '💬', title: 'Real-time Chat Application', description: 'Scalable messaging platform with real-time notifications, file sharing and end-to-end encryption.', technologies: ['Vue.js', 'Socket.io', 'Firebase'] },
    { id: 4, icon: '📝', title: 'Content Management System', description: 'Headless CMS for content creators and publishers with a powerful API and rich editor.', technologies: ['Next.js', 'GraphQL', 'MongoDB'] },
  ];

  return (
    <div className="max-w-6xl mx-auto page-transition">
      <h2 className="text-3xl md:text-4xl font-bold text-[#982598] mb-3 animate-slideUp">Featured Projects</h2>
      <p className="text-[#f1e9e9]/60 mb-10 animate-slideUp" style={{ animationDelay: '0.1s' }}>
        A selection of our most impactful work
      </p>

      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="bg-[#1c1f4f] p-8 rounded-2xl card-hover border border-[#982598]/10 hover:border-[#982598]/50 animate-stagger-1 group flex gap-6 items-start"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="text-5xl flex-shrink-0 animate-float" style={{ animationDelay: `${idx * 0.4}s` }}>{project.icon}</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#e491c9] mb-2 group-hover:text-white transition-colors">{project.title}</h3>
              <p className="text-[#f1e9e9]/70 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-[#982598]/20 border border-[#982598]/40 text-[#e491c9] px-3 py-1 rounded-lg text-sm font-medium hover:bg-[#982598]/40 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
