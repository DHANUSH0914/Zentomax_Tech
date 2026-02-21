export default function About() {
  const values = [
    { icon: '💡', title: 'Innovation', desc: 'We constantly push boundaries to deliver cutting-edge solutions.' },
    { icon: '⭐', title: 'Quality', desc: 'We maintain the highest standards in everything we do.' },
    { icon: '🤝', title: 'Collaboration', desc: 'We work closely with our clients to achieve their goals.' },
    { icon: '🔒', title: 'Integrity', desc: 'Transparent and honest in all our relationships.' },
    { icon: '⚡', title: 'Speed', desc: 'Fast delivery without compromising on excellence.' },
    { icon: '🌍', title: 'Impact', desc: 'Technology solutions that create real-world change.' },
  ];

  const team = [
    { name: 'Alex Chen', role: 'CEO & Founder', icon: '👨‍💼' },
    { name: 'Sarah Kim', role: 'Lead Designer', icon: '👩‍🎨' },
    { name: 'Raj Patel', role: 'Head of Engineering', icon: '👨‍💻' },
    { name: 'Priya Singh', role: 'Marketing Director', icon: '👩‍💼' },
  ];

  return (
    <div className="min-h-screen bg-[#15173D] text-[#f1e9e9] px-6 md:px-10 py-16 page-transition">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h1 className="text-4xl md:text-5xl font-bold text-[#e491c9] mb-4">About Us</h1>
          <p className="text-[#f1e9e9]/60 text-lg max-w-2xl mx-auto">
            A forward-thinking technology company dedicated to empowering businesses in the digital age.
          </p>
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="animate-slideInLeft">
            <h2 className="text-2xl font-bold text-[#982598] mb-4">Our Story</h2>
            <p className="text-[#f1e9e9]/80 leading-relaxed mb-4">
              ZentoMax Tech was born from a passion for technology and a drive to make a difference.
              We believe great software can transform businesses and the lives of the people they serve.
            </p>
            <p className="text-[#f1e9e9]/80 leading-relaxed">
              With a team of experienced developers, designers, and strategists, we specialize in
              creating scalable applications, stunning user experiences, and comprehensive digital
              solutions tailored to your unique needs.
            </p>
          </div>
          <div className="animate-slideInRight">
            <h2 className="text-2xl font-bold text-[#982598] mb-4">Our Mission</h2>
            <div className="bg-[#1c1f4f] border border-[#982598]/20 rounded-2xl p-6">
              <p className="text-[#f1e9e9]/80 leading-relaxed italic text-lg">
                "To empower businesses with cutting-edge technology solutions that drive growth,
                innovation, and success in an increasingly digital world."
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-[#e491c9] mb-10 animate-slideUp">Our Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="bg-[#1c1f4f] border border-[#982598]/10 hover:border-[#982598]/50 p-6 rounded-2xl card-hover animate-stagger-1 group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-3xl mb-3 animate-float" style={{ animationDelay: `${idx * 0.3}s` }}>{v.icon}</div>
                <h3 className="text-[#e491c9] font-bold text-lg mb-2 group-hover:text-white transition-colors">{v.title}</h3>
                <p className="text-[#f1e9e9]/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        {/* <div>
          <h2 className="text-3xl font-bold text-center text-[#e491c9] mb-10 animate-slideUp">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#1c1f4f] border border-[#982598]/10 hover:border-[#982598]/50 p-6 rounded-2xl card-hover text-center animate-stagger-1"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl mb-3">{member.icon}</div>
                <h3 className="font-bold text-[#e491c9] mb-1">{member.name}</h3>
                <p className="text-[#f1e9e9]/50 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div> */}

      </div>
    </div>
  );
}
