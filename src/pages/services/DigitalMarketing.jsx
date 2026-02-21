export default function DigitalMarketing() {
  const services = [
    { icon: '🔍', title: 'SEO Optimization', description: 'Improve your search engine rankings and organic visibility across all major search engines.' },
    { icon: '📱', title: 'Social Media Marketing', description: 'Engage your audience across all major social platforms with targeted content strategies.' },
    { icon: '✍️', title: 'Content Marketing', description: 'Create compelling content that educates, engages, and drives meaningful conversions.' },
    { icon: '💰', title: 'PPC Advertising', description: 'Targeted paid advertising campaigns engineered for maximum ROI and brand reach.' },
    { icon: '📧', title: 'Email Marketing', description: 'Build and nurture customer relationships with personalized, automated email campaigns.' },
    { icon: '📈', title: 'Analytics & Reporting', description: 'Data-driven insights and dashboards to continuously optimize your marketing strategy.' },
  ];

  const approach = [
    { icon: '🎯', title: 'Strategy', desc: 'Custom strategies tailored to your specific business goals and audience.' },
    { icon: '⚙️', title: 'Execution', desc: 'Professional implementation across all channels by experienced marketers.' },
    { icon: '🔄', title: 'Optimization', desc: 'Continuous monitoring, A/B testing, and iterative improvements.' },
  ];

  return (
    <div className="max-w-6xl mx-auto page-transition">
      <h2 className="text-3xl md:text-4xl font-bold text-[#982598] mb-3 animate-slideUp">Digital Marketing Services</h2>
      <p className="text-[#f1e9e9]/60 mb-10 animate-slideUp" style={{ animationDelay: '0.1s' }}>
        Data-driven strategies that grow your brand and deliver measurable results.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="bg-[#1c1f4f] p-6 rounded-2xl card-hover border border-[#982598]/10 hover:border-[#982598]/50 animate-stagger-1 group"
            style={{ animationDelay: `${idx * 0.08}s` }}
          >
            <div className="text-3xl mb-3 animate-float" style={{ animationDelay: `${idx * 0.3}s` }}>{service.icon}</div>
            <h3 className="text-lg font-bold text-[#e491c9] mb-2 group-hover:text-white transition-colors">{service.title}</h3>
            <p className="text-[#f1e9e9]/70 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#1c1f4f] border border-[#982598]/20 p-8 rounded-2xl animate-fadeIn">
        <h3 className="text-2xl font-bold text-[#e491c9] mb-3">Our Approach</h3>
        <p className="text-[#f1e9e9]/70 mb-8 leading-relaxed">
          We combine data-driven strategies with creative excellence to deliver measurable results.
          Our team stays ahead of the latest trends and algorithms so your brand always leads.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {approach.map((a, idx) => (
            <div key={idx} className="bg-[#15173D] p-5 rounded-xl border border-[#982598]/10 hover:border-[#982598]/30 transition-all duration-300 text-center">
              <div className="text-3xl mb-3">{a.icon}</div>
              <h4 className="text-[#982598] font-bold mb-2">{a.title}</h4>
              <p className="text-sm text-[#f1e9e9]/60">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
