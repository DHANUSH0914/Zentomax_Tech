import TiltCard from '../components/TiltCard';

export default function About() {
  const values = [
    { icon: '�', title: 'Agility', desc: 'We iterate quickly and deploy faster to keep your startup ahead of the curve.' },
    { icon: '⚙️', title: 'Efficiency', desc: 'Streamlined architectures that maximize performance and minimize overhead.' },
    { icon: '📈', title: 'Scalability', desc: 'Systems built from day one to handle exponential user growth.' },
    { icon: '🔒', title: 'Security', desc: 'Enterprise-grade protection integrated seamlessly into your workflow.' },
    { icon: '💡', title: 'Innovation', desc: 'Leveraging the latest tech stack to build future-proof solutions.' },
    { icon: '🌍', title: 'Global Reach', desc: 'Infrastructure designed for a borderless digital footprint.' },
  ];

  return (
    <div className="bg-[#15173D] text-[#f1e9e9] page-transition">
      {/* 
        Section 1: About Us 
        Layout: Text Left, Image Right
      */}
      <section className="py-20 px-6 md:px-10 border-b border-[#982598]/20">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="flex-1 animate-slideInLeft max-w-2xl">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#982598]/40 text-[#e491c9] text-sm font-medium bg-[#982598]/10">
              ✦ About ZentoMax Tech
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#e491c9] mb-6 leading-tight">Built for Scale</h1>
            <p className="text-[#f1e9e9]/80 text-lg md:text-xl leading-relaxed mb-6">
              ZentoMax Tech engineers high-performance digital infrastructure designed specifically
              for fast-moving startups and modern enterprises.
            </p>
            <p className="text-[#f1e9e9]/60 text-lg leading-relaxed">
              We eliminate technical debt before it starts. By leveraging cutting-edge, efficient technologies,
              we build scalable, low-latency applications that allow your business to pivot rapidly and grow exponentially
              without infrastructure bottlenecking. From zero to one, and one to one million.
            </p>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end animate-fadeIn">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#982598]/40 group border border-[#e491c9]/20 w-full max-w-xl">
              <div className="absolute inset-0 bg-[#982598]/20 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay z-10" />
              <img
                src="/abstract_tech_innovation.png"
                alt="Digital Innovation Architecture"
                className="w-full h-auto object-cover transform scale-95 group-hover:scale-105 transition-transform duration-700 filter contrast-125 saturate-150"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 
        Section 2: Our Mission
        Layout: Image Left, Text Right
      */}
      <section className="py-20 px-6 md:px-10 border-b border-[#982598]/20 bg-[#1c1f4f]/30">
        <div className="max-w-[1400px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
          <div className="flex-1 flex justify-center lg:justify-start animate-fadeIn">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#e491c9]/30 group border border-[#e491c9]/20 w-full max-w-xl">
              <div className="absolute inset-0 bg-[#e491c9]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src="/abstract_growth_impact.png"
                alt="Global Network Scale"
                className="w-full h-auto object-cover transform scale-95 group-hover:scale-105 transition-transform duration-700 filter contrast-125 saturate-150"
              />
            </div>
          </div>
          <div className="flex-1 animate-slideInRight max-w-2xl">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#982598]/40 text-[#e491c9] text-sm font-medium bg-[#982598]/10">
              ✦ Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e491c9] mb-6 leading-tight">
              Maximizing Operational Efficiency
            </h2>
            <p className="text-[#f1e9e9]/80 text-lg leading-relaxed mb-6">
              Every millisecond counts. Every kilobyte matters. We build lean, modular systems that
              prioritize speed, reliability, and cost-efficiency.
            </p>
            <p className="text-[#f1e9e9]/60 text-lg leading-relaxed mb-8">
              We empower visionary founders by taking technical complexity out of the equation. Our mission
              is to provide the robust technological backbone required for startups to disrupt their industries—so
              you can focus solely on product-market fit and customer acquisition.
            </p>
            <div className="inline-flex items-center gap-3 text-[#982598] font-bold text-lg cursor-pointer hover:text-[#e491c9] transition-colors group">
              Accelerate Your Growth
              <span className="transform group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-4xl font-bold text-[#e491c9] mb-4">The Engineering DNA</h2>
            <p className="text-[#f1e9e9]/60 text-lg max-w-2xl mx-auto">
              The core principles that drive our development cycles and architecture choices.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <TiltCard key={idx} className="h-full">
                <div
                  className="bg-[#1c1f4f] border border-[#982598]/10 group-hover:border-[#982598]/50 p-8 rounded-3xl animate-stagger-1 group text-center flex flex-col h-full shadow-2xl shadow-black/40 group-hover:shadow-[0_0_40px_rgba(152,37,152,0.3)] transition-shadow duration-300"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto bg-[#15173D] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner shadow-[#982598]/20 group-hover:scale-110 transition-transform duration-300">
                    {v.icon}
                  </div>
                  <h3 className="text-[#e491c9] font-bold text-xl mb-3 group-hover:text-white transition-colors">{v.title}</h3>
                  <p className="text-[#f1e9e9]/60 leading-relaxed flex-1">{v.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
