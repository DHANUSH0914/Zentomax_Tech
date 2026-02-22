export default function Contact() {
  return (
    <div className="bg-[#15173D] text-[#f1e9e9] px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left Section - Info */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#e491c9] mb-6 leading-tight">
            Let’s Build Something Great Together
          </h1>

          <p className="text-[#f1e9e9]/70 mb-10 text-lg leading-relaxed">
            Have a project in mind or need expert technical support?
            Our team at <span className="text-[#e491c9] font-semibold">Zentomax Tech</span>
            is here to help you turn your ideas into reality.
          </p>

          {/* Contact Info Cards */}
          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <div className="bg-[#982598]/20 p-3 rounded-lg text-xl">📧</div>
              <div>
                <p className="text-[#e491c9] font-semibold">Email</p>
                <p className="text-[#f1e9e9]/70">zentomaxtech@gmail.com</p>
                <p className="text-[#f1e9e9]/50 text-sm">
                  Send us your queries anytime.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#982598]/20 p-3 rounded-lg text-xl">📞</div>
              <div>
                <p className="text-[#e491c9] font-semibold">Phone</p>
                <p className="text-[#f1e9e9]/70">+91 63845 14587</p>
                <p className="text-[#f1e9e9]/50 text-sm">
                  Mon – Fri, 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#982598]/20 p-3 rounded-lg text-xl">📍</div>
              <div>
                <p className="text-[#e491c9] font-semibold">Location</p>
                <p className="text-[#f1e9e9]/70">India</p>
                <p className="text-[#f1e9e9]/50 text-sm">
                  Chennai
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-[#1c1f4f] border border-[#982598]/20 rounded-2xl shadow-xl p-6">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe87cmxeB8CtkkGQCTnoBfzC9f6SumjgyQm3qSy9pNEG2yOFQ/viewform?embedded=true"
            className="w-full h-[550px] rounded-lg"
            style={{ border: "none" }}
            loading="lazy"
            title="Zentomax Contact Form"
          />
        </div>

      </div>
    </div>
  );
}