export default function Development() {
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description: "React, Vue, Angular - modern frameworks for responsive UIs"
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Node.js, Python, Java - robust server-side solutions"
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "End-to-end web application development"
    },
    {
      id: 4,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-[#982598] mb-8">Web Development Services</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-[#1c1f4f] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold text-[#e491c9] mb-3">{service.title}</h3>
            <p className="text-[#f1e9e9]">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-[#1c1f4f] p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-[#e491c9] mb-4">Why Choose Our Development Services?</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-[#982598] font-bold">✓</span>
            <span>Expert team with years of experience</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#982598] font-bold">✓</span>
            <span>Latest technologies and best practices</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#982598] font-bold">✓</span>
            <span>Scalable and maintainable code</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#982598] font-bold">✓</span>
            <span>24/7 support and maintenance</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
