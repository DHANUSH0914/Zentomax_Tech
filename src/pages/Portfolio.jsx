import { useState } from 'react';

const projects = [
  { id: 1, title: 'E-Commerce Platform', description: 'A full-stack e-commerce solution with payment integration, cart management, and admin dashboard.', category: 'Web Development', icon: '🛒', tags: ['React', 'Node.js', 'MongoDB'] },
  { id: 2, title: 'Mobile App Design', description: 'Beautiful and intuitive mobile application interface with smooth animations and great UX.', category: 'UI/UX Design', icon: '📱', tags: ['Figma', 'Prototyping'] },
  { id: 3, title: 'SaaS Dashboard', description: 'Analytics dashboard for enterprise clients with real-time data visualization.', category: 'Web Development', icon: '📊', tags: ['React', 'D3.js', 'PostgreSQL'] },
  { id: 4, title: 'Brand Identity', description: 'Complete branding and design system including logo, color palette, and component library.', category: 'UI/UX Design', icon: '🎨', tags: ['Illustrator', 'Design Systems'] },
  { id: 5, title: 'Real-time Chat App', description: 'Scalable messaging platform with real-time notifications and end-to-end encryption.', category: 'Web Development', icon: '💬', tags: ['Vue.js', 'Socket.io', 'Firebase'] },
  { id: 6, title: 'Marketing Campaign', description: 'Full-scale digital marketing campaign that increased client conversions by 180%.', category: 'Digital Marketing', icon: '📣', tags: ['SEO', 'Google Ads', 'Analytics'] },
];

const categories = ['All', 'Web Development', 'UI/UX Design', 'Digital Marketing'];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div className="min-h-screen bg-[#15173D] text-[#f1e9e9] px-6 md:px-10 py-16 page-transition">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#e491c9] mb-3 text-center animate-slideUp">Our Portfolio</h1>
        <p className="text-center text-[#f1e9e9]/60 mb-10 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          Showcasing our best work and successful projects
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${active === cat
                  ? 'bg-[#982598] border-[#982598] text-white shadow-lg shadow-[#982598]/40'
                  : 'border-[#982598]/30 hover:border-[#982598] hover:bg-[#982598]/10 text-[#f1e9e9]/70 hover:text-[#f1e9e9]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              className="bg-[#1c1f4f] p-7 rounded-2xl card-hover border border-[#982598]/10 hover:border-[#982598]/50 animate-stagger-1 group"
              style={{ animationDelay: `${0.1 + idx * 0.08}s` }}
            >
              <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${idx * 0.4}s` }}>{project.icon}</div>
              <span className="inline-block bg-[#982598]/20 text-[#e491c9] px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-[#982598]/20">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-[#e491c9] mb-2 group-hover:text-white transition-colors">{project.title}</h3>
              <p className="text-[#f1e9e9]/60 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-[#15173D] text-[#f1e9e9]/60 px-2 py-1 rounded text-xs border border-[#982598]/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
