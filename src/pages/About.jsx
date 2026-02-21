export default function About() {
  return (
    <div className="min-h-screen bg-[#15173D] text-[#f1e9e9] px-10 py-20 page-transition">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#e491c9] mb-8 animate-slideUp">About Us</h1>
        
        <div className="space-y-6">
          <p className="text-lg leading-relaxed animate-slideUp" style={{ animationDelay: '0.1s' }}>
            ZentoMax Tech is a forward-thinking technology company dedicated to delivering 
            innovative solutions that empower businesses to thrive in the digital age.
          </p>
          
          <p className="text-lg leading-relaxed animate-slideUp" style={{ animationDelay: '0.2s' }}>
            With a team of experienced developers, designers, and strategists, we specialize 
            in creating scalable applications, stunning user experiences, and comprehensive 
            digital solutions tailored to your unique needs.
          </p>

          <div className="mt-12 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-bold text-[#982598] mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              innovation, and success in an increasingly digital world.
            </p>
          </div>

          <div className="mt-12 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-bold text-[#982598] mb-6">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 transform transition-all duration-300 hover:translate-x-2">
                <span className="text-[#e491c9] font-bold">•</span>
                <span>Innovation: We constantly push boundaries to deliver cutting-edge solutions</span>
              </li>
              <li className="flex items-start gap-4 transform transition-all duration-300 hover:translate-x-2">
                <span className="text-[#e491c9] font-bold">•</span>
                <span>Quality: We maintain the highest standards in everything we do</span>
              </li>
              <li className="flex items-start gap-4 transform transition-all duration-300 hover:translate-x-2">
                <span className="text-[#e491c9] font-bold">•</span>
                <span>Collaboration: We work closely with our clients to achieve their goals</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
