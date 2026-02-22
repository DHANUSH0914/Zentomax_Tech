export default function UIUX() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-[#982598] mb-8">UI/UX Design Course</h2>
      
      <div className="bg-[#1c1f4f] p-8 rounded-2xl mb-8">
        <h3 className="text-2xl font-bold text-[#e491c9] mb-4">Course Overview</h3>
        <p className="text-[#f1e9e9] mb-6">
          Learn to create beautiful, user-centered digital experiences. This course covers design principles, 
          wireframing, prototyping, and industry-standard tools like Figma and Adobe XD.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-[#e491c9] font-bold mb-3">Course Details</h4>
            <ul className="space-y-2 text-[#f1e9e9]">
              <li>• Duration: 10 weeks</li>
              <li>• Level: Beginner to Intermediate</li>
              <li>• Format: Online + Mentorship</li>
              <li>• Certificate: Yes</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#e491c9] font-bold mb-3">What You'll Learn</h4>
            <ul className="space-y-2 text-[#f1e9e9]">
              <li>• Design Principles</li>
              <li>• User Research</li>
              <li>• Wireframing & Prototyping</li>
              <li>• Design Tools & Software</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#1c1f4f] p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-[#e491c9] mb-4">Curriculum</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-[#982598] pl-4">
            <h4 className="text-[#e491c9] font-bold">Module 1: Design Fundamentals</h4>
            <p className="text-[#f1e9e9] text-sm">Color theory, typography, and layout principles</p>
          </div>
          <div className="border-l-4 border-[#982598] pl-4">
            <h4 className="text-[#e491c9] font-bold">Module 2: User Research</h4>
            <p className="text-[#f1e9e9] text-sm">User personas, user journeys, and usability testing</p>
          </div>
          <div className="border-l-4 border-[#982598] pl-4">
            <h4 className="text-[#e491c9] font-bold">Module 3: Wireframing & Prototyping</h4>
            <p className="text-[#f1e9e9] text-sm">Creating wireframes and interactive prototypes</p>
          </div>
          <div className="border-l-4 border-[#982598] pl-4">
            <h4 className="text-[#e491c9] font-bold">Module 4: Portfolio Projects</h4>
            <p className="text-[#f1e9e9] text-sm">Build real-world design projects for your portfolio</p>
          </div>
        </div>
      </div>

      {/* <button className="mt-8 w-full bg-[#982598] hover:bg-[#e491c9] hover:text-[#15173D] transition duration-300 px-8 py-3 rounded-xl font-semibold">
        Enroll Now
      </button> */}
    </div>
  );
}
