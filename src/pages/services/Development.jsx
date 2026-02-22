import TiltCard from '../../components/TiltCard';
import Dev3DCore from '../../components/Dev3DCore';

export default function Development() {
  const services = [
    { icon: '⚛️', title: 'Landing Page', description: 'Single Page Application ' },
    { icon: '🖥️', title: 'Customized Multipage Website', description: 'Customized website development for businesses of all sizes.' },
    { icon: '🔗', title: 'Wordpress Website', description: 'Wordpress website development for businesses of all sizes.' },  
  ];

  const reasons = [
    { icon: '🏆', title: 'Production Ready', text: 'Expert team with Knowleadge of production experience scaling apps.' },
    { icon: '🔧', title: 'Modern Stack', text: 'Latest technologies and industry-leading best practices.' },
    { icon: '📐', title: 'Scalable Core', text: 'Microservices architecture and highly maintainable codebases.' },
    { icon: '⚡', title: 'High Performance', text: 'Optimized routing, asset loading, and minimal latency.' },
  ];

  return (
    <div className="max-w-[1400px] mx-auto page-transition pb-20">

      {/* Hero Header Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-24 px-6 md:px-10 pt-10">
        <div className="flex-1 animate-slideInLeft max-w-2xl">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#982598]/40 text-[#e491c9] text-sm font-medium bg-[#982598]/10">
            ✦ Engineering Excellence
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#e491c9] mb-6 leading-tight">
            Web Development <span className="text-white">Services</span>
          </h2>
          <p className="text-[#f1e9e9]/80 text-lg md:text-xl leading-relaxed mb-6">
            Crafting digital solutions that perform, scale, and impress. From the database layer to the user interface, we build robust systems.
          </p>
          <div className="flex gap-4">
            {/* <button className="bg-[#982598] hover:bg-[#e491c9] hover:text-[#15173D] transition-all duration-300 px-8 py-3 rounded-xl font-semibold btn-animate shadow-lg shadow-[#982598]/40">
              Start Building
            </button>
            <button className="border border-[#982598] hover:border-[#e491c9] hover:text-[#e491c9] transition-all duration-300 px-8 py-3 rounded-xl font-semibold hover:bg-[#982598]/10">
              Tech Stack
            </button> */}
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end animate-fadeIn">
          <Dev3DCore />
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-6 md:px-10 mb-20">
  <div className="text-center mb-12 animate-slideUp">
    <h2 className="text-3xl md:text-4xl font-bold text-[#e491c9] mb-4">Web Development Services</h2>
    <p className="text-[#f1e9e9]/60 max-w-2xl mx-auto">
      Providing end-to-end technological infrastructure for modern businesses.
    </p>
  </div>
  
  {/* Grid with 3 boxes per row */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {services.map((service, idx) => (
      <TiltCard key={service.title} className="h-full">
        <div
          className="bg-[#1c1f4f] p-8 rounded-3xl border border-[#982598]/10 group-hover:border-[#982598]/50 animate-stagger-1 group h-full flex flex-col shadow-2xl shadow-black/40 group-hover:shadow-[0_0_40px_rgba(152,37,152,0.3)] transition-shadow duration-300"
          style={{ animationDelay: `${idx * 0.1}s` }}
        >
          <div
            className="text-4xl mb-6 animate-float"
            style={{ animationDelay: `${idx * 0.4}s` }}
          >
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-[#e491c9] mb-3 group-hover:text-white transition-colors">
            {service.title}
          </h3>
          <p className="text-[#f1e9e9]/70 leading-relaxed flex-1">
            {service.description}
          </p>
        </div>
      </TiltCard>
    ))}
  </div>
</div>

      {/* Why Choose Us */}
      <div className="px-6 md:px-10 animate-slideUp" style={{ animationDelay: '0.4s' }}>
        <div className="bg-[#1c1f4f]/50 border border-[#982598]/20 p-10 md:p-14 rounded-3xl backdrop-blur-sm relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e491c9]/10 rounded-full blur-[80px]" />

          <h3 className="text-3xl font-bold text-[#e491c9] mb-10 text-center relative z-10">Why Choose Our Engineering Team?</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {reasons.map((r, idx) => (
              <TiltCard key={idx} className="h-full">
                <div className="flex flex-col gap-4 p-8 bg-[#15173D]/80 rounded-2xl border border-[#982598]/20 hover:border-[#e491c9]/50 transition-all duration-300 group h-full shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-[#982598]/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {r.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#e491c9] mb-2">{r.title}</h4>
                    <p className="text-[#f1e9e9]/60 text-sm leading-relaxed">{r.text}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
