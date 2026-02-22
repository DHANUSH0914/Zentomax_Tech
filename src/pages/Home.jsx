import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero3DCore from '../components/Hero3DCore';
import TiltCard from '../components/TiltCard';

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function Home() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const clients = useCountUp(120, 1800, statsVisible);
  const projects = useCountUp(85, 1800, statsVisible);
  const years = useCountUp(6, 1200, statsVisible);

  const features = [
    { icon: '💻', title: 'Web Development', desc: 'Modern, scalable apps built with the latest frameworks.', link: '/services/development' },
    { icon: '📣', title: 'Digital Marketing', desc: 'Data-driven campaigns that grow your brand & audience.', link: '/services/digital-marketing' },
    { icon: '🎓', title: 'Courses', desc: 'Hands-on training in development, design & marketing.', link: '/services/courses' },
  ];

  return (
    <div className="min-h-full bg-[#15173D] text-[#f1e9e9]">
      {/* Hero */}
      <section className="relative px-6 py-28 md:py-36 lg:py-48 overflow-hidden">
        {/* Floating blobs */}
        <div className="absolute top-10 left-10 w-56 h-56 rounded-full bg-[#982598]/10 blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[#e491c9]/8 blur-3xl animate-float pointer-events-none" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#982598]/40 text-[#e491c9] text-sm font-medium animate-fadeIn bg-[#982598]/10">
              ✦ Building Tomorrow's Digital World
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-slideUp leading-tight">
              Build.{' '}
              <span className="text-gradient-animate">Innovate.</span>
              <br />
              <span className="text-[#982598] animate-pulse">Scale.</span>
            </h1>
            <p className="max-w-2xl text-lg text-[#f1e9e9]/80 mb-10 animate-slideUp mx-auto lg:mx-0" style={{ animationDelay: '0.2s' }}>
              ZentoMax Tech delivers modern web solutions, scalable applications,
              and powerful digital experiences for startups and enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slideUp" style={{ animationDelay: '0.4s' }}>
              {/* <Link
                to="/contact"
                className="bg-[#982598] hover:bg-[#e491c9] hover:text-[#15173D] transition-all duration-300 px-8 py-3 rounded-xl font-semibold btn-animate transform hover:scale-105 active:scale-95 shadow-lg shadow-[#982598]/40"
              >
                Get Started →
              </Link> */}
              <Link
                to="/portfolio"
                className="border border-[#982598] hover:border-[#e491c9] hover:text-[#e491c9] transition-all duration-300 px-8 py-3 rounded-xl font-semibold hover:bg-[#982598]/10"
              >
                View Our Work
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <Hero3DCore />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="bg-[#1c1f4f]/60 border-y border-[#982598]/20 py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { num: clients, suffix: '+', label: 'Happy Clients' },
            { num: projects, suffix: '+', label: 'Projects Delivered' },
            { num: years, suffix: ' Yrs', label: 'Of Experience' },
          ].map((stat, i) => (
            <div key={i} className="animate-scaleIn" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="text-4xl md:text-5xl font-extrabold text-[#e491c9]">
                {stat.num}{stat.suffix}
              </div>
              <div className="text-[#f1e9e9]/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-slideUp">
            What We <span className="text-[#e491c9]">Do</span>
          </h2>
          <p className="text-center text-[#f1e9e9]/60 mb-12 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            End-to-end digital solutions tailored to your business
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, idx) => (
              <TiltCard key={idx}>
                <Link to={f.link} className="block group h-full">
                  <div
                    className="bg-[#1c1f4f] p-8 rounded-2xl border border-[#982598]/10 group-hover:border-[#982598]/50 h-full animate-stagger-1 flex flex-col shadow-2xl shadow-black/40 group-hover:shadow-[0_0_40px_rgba(152,37,152,0.3)] transition-shadow duration-300"
                    style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                  >
                    <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${idx * 0.5}s` }}>{f.icon}</div>
                    <h3 className="text-xl font-bold text-[#e491c9] mb-3 group-hover:text-white transition-colors">{f.title}</h3>
                    <p className="text-[#f1e9e9]/70 leading-relaxed flex-1">{f.desc}</p>
                    <div className="mt-6 text-[#982598] text-sm font-semibold group-hover:text-[#e491c9] transition-colors">
                      Learn More →
                    </div>
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6 mb-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#982598]/30 to-[#1c1f4f] border border-[#982598]/30 rounded-2xl p-10 text-center shadow-2xl animate-glow">
          <h2 className="text-3xl font-bold mb-4">Ready to build something amazing?</h2>
          <p className="text-[#f1e9e9]/70 mb-8 max-w-xl mx-auto">
            Let's collaborate and bring your ideas to life with cutting-edge technology.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#982598] hover:bg-[#e491c9] hover:text-[#15173D] transition-all duration-300 px-10 py-3 rounded-xl font-semibold btn-animate transform hover:scale-105 active:scale-95 shadow-lg shadow-[#982598]/40"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
