export default function DigitalMarketing() {
  const services = [
    {
      id: 1,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and organic visibility"
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description: "Engage your audience across all major social platforms"
    },
    {
      id: 3,
      title: "Content Marketing",
      description: "Create compelling content that drives conversions"
    },
    {
      id: 4,
      title: "PPC Advertising",
      description: "Targeted paid advertising campaigns for maximum ROI"
    },
    {
      id: 5,
      title: "Email Marketing",
      description: "Build and nurture customer relationships through email"
    },
    {
      id: 6,
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your marketing strategy"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-[#982598] mb-8">Digital Marketing Services</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {services.map((service) => (
          <div key={service.id} className="bg-[#1c1f4f] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold text-[#e491c9] mb-3">{service.title}</h3>
            <p className="text-[#f1e9e9]">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#1c1f4f] p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-[#e491c9] mb-4">Our Digital Marketing Approach</h3>
        <p className="text-[#f1e9e9] mb-6">
          We combine data-driven strategies with creative excellence to deliver measurable results. 
          Our team stays updated with the latest trends and algorithms to ensure your brand stays ahead of the competition.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-[#982598] font-bold mb-2">Strategy</h4>
            <p className="text-sm text-[#f1e9e9]">Custom strategies tailored to your business goals</p>
          </div>
          <div>
            <h4 className="text-[#982598] font-bold mb-2">Execution</h4>
            <p className="text-sm text-[#f1e9e9]">Professional implementation across all channels</p>
          </div>
          <div>
            <h4 className="text-[#982598] font-bold mb-2">Optimization</h4>
            <p className="text-sm text-[#f1e9e9]">Continuous monitoring and improvement</p>
          </div>
        </div>
      </div>
    </div>
  );
}
