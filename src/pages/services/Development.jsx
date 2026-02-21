export default function Development() {
  const services = [
    { icon: '⚛️', title: 'Frontend Development', description: 'React, Vue, Angular — modern frameworks for blazing-fast, responsive UIs.' },
    { icon: '🖥️', title: 'Backend Development', description: 'Node.js, Python, Java — robust, secure & scalable server-side solutions.' },
    { icon: '🔗', title: 'Full Stack Development', description: 'End-to-end web application development from database to deployment.' },
    { icon: '📱', title: 'Mobile Development', description: 'Native and cross-platform mobile apps for iOS & Android.' },
  ];

  const reasons = [
    { icon: '🏆', text: 'Expert team with years of production experience' },
    { icon: '🔧', text: 'Latest technologies and industry best practices' },
    { icon: '📐', text: 'Scalable architecture and maintainable code' },
    { icon: '🕐', text: '24/7 support and ongoing maintenance' },
  ];

  return (
    <div className="max-w-6xl mx-auto page-transition">
      <h2 className="text-3xl md:text-4xl font-bold text-[#982598] mb-3 animate-slideUp">Web Development Services</h2>
      <p className="text-[#f1e9e9]/60 mb-10 animate-slideUp" style={{ animationDelay: '0.1s' }}>
        Crafting digital solutions that perform, scale, and impress.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="bg-[#1c1f4f] p-7 rounded-2xl card-hover border border-[#982598]/10 hover:border-[#982598]/50 animate-stagger-1 group"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="text-3xl mb-3 animate-float" style={{ animationDelay: `${idx * 0.4}s` }}>{service.icon}</div>
            <h3 className="text-xl font-bold text-[#e491c9] mb-2 group-hover:text-white transition-colors">{service.title}</h3>
            <p className="text-[#f1e9e9]/70">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#1c1f4f] border border-[#982598]/20 p-8 rounded-2xl animate-fadeIn">
        <h3 className="text-2xl font-bold text-[#e491c9] mb-6">Why Choose Our Development Services?</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map((r, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 bg-[#15173D] rounded-xl border border-[#982598]/10 hover:border-[#982598]/30 transition-all duration-300 hover:translate-x-1">
              <span className="text-2xl">{r.icon}</span>
              <span className="text-[#f1e9e9]/80">{r.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
