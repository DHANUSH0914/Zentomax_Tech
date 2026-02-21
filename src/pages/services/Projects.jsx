export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment gateway integration",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      description: "Analytics and management dashboard for enterprise clients",
      technologies: ["React", "Express", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description: "Scalable messaging platform with real-time notifications",
      technologies: ["Vue.js", "Socket.io", "Firebase"]
    },
    {
      id: 4,
      title: "Content Management System",
      description: "Headless CMS for content creators and publishers",
      technologies: ["Next.js", "GraphQL", "MongoDB"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-[#982598] mb-8">Featured Projects</h2>
      
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#1c1f4f] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-[#e491c9] mb-3">{project.title}</h3>
            <p className="text-[#f1e9e9] mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="bg-[#982598] text-[#f1e9e9] px-3 py-1 rounded-lg text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
