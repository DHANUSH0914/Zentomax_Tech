export default function DataAnalytics() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-[#982598] mb-8">Data Analytics Course</h2>
      
      <div className="bg-[#1c1f4f] p-8 rounded-2xl mb-8">
        <h3 className="text-2xl font-bold text-[#e491c9] mb-4">Course Overview</h3>
        <p className="text-[#f1e9e9] mb-6">
          Transform raw data into actionable insights. Learn data analysis, visualization, statistical methods, 
          and tools like Python, SQL, and Tableau to make data-driven decisions.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-[#e491c9] font-bold mb-3">Course Details</h4>
            <ul className="space-y-2 text-[#f1e9e9]">
              <li>• Duration: 16 weeks</li>
              <li>• Level: Beginner to Advanced</li>
              <li>• Format: Online + Hands-on Labs</li>
              <li>• Certificate: Yes</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#e491c9] font-bold mb-3">What You'll Learn</h4>
            <ul className="space-y-2 text-[#f1e9e9]">
              <li>• Python & SQL</li>
              <li>• Data Visualization</li>
              <li>• Statistical Analysis</li>
              <li>• Business Intelligence</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#1c1f4f] p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-[#e491c9] mb-4">Curriculum</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-[#982598] pl-4">
            <h4 className="text-[#e491c9] font-bold">Module 1: Data Fundamentals</h4>
            <p className="text-[#f1e9e9] text-sm">Data types, sources, and collection methods</p>
          </div>
          <div className="border-l-4 border-[#982598] pl-4">
            <h4 className="text-[#e491c9] font-bold">Module 2: Python & SQL for Data</h4>
            <p className="text-[#f1e9e9] text-sm">Programming and database querying</p>
          </div>
          <div className="border-l-4 border-[#982598] pl-4">
            <h4 className="text-[#e491c9] font-bold">Module 3: Data Visualization & BI Tools</h4>
            <p className="text-[#f1e9e9] text-sm">Tableau, Power BI, and visualization techniques</p>
          </div>
          <div className="border-l-4 border-[#982598] pl-4">
            <h4 className="text-[#e491c9] font-bold">Module 4: Advanced Analytics & Projects</h4>
            <p className="text-[#f1e9e9] text-sm">Statistical analysis and real-world projects</p>
          </div>
        </div>
      </div>

      <button className="mt-8 w-full bg-[#982598] hover:bg-[#e491c9] hover:text-[#15173D] transition duration-300 px-8 py-3 rounded-xl font-semibold">
        Enroll Now
      </button>
    </div>
  );
}
