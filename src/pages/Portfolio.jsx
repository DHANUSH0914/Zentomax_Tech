export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Mobile App Design",
      description: "Beautiful and intuitive mobile application interface",
      category: "UI/UX Design"
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      description: "Analytics dashboard for enterprise clients",
      category: "Web Development"
    },
    {
      id: 4,
      title: "Brand Identity",
      description: "Complete branding and design system",
      category: "UI/UX Design"
    }
  ];

  return (
    <div className="min-h-screen bg-[#15173D] text-[#f1e9e9] px-10 py-20 page-transition">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#e491c9] mb-4 text-center animate-slideUp">Our Portfolio</h1>
        <p className="text-center text-[#e491c9] mb-12 animate-slideUp" style={{ animationDelay: '0.1s' }}>Showcasing our best work and successful projects</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={project.id} className={`bg-[#1c1f4f] p-8 rounded-2xl shadow-lg card-hover animate-slideUp`}
                 style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
              <h3 className="text-2xl font-bold text-[#982598] mb-3 transition-all duration-300">{project.title}</h3>
              <p className="text-[#f1e9e9] mb-4">{project.description}</p>
              <span className="inline-block bg-[#982598] text-[#f1e9e9] px-4 py-2 rounded-lg text-sm transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#982598]/50">
                {project.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
