export default function Contact() {
  return (
    <div className="min-h-screen bg-[#15173D] text-[#f1e9e9] px-10 py-20 page-transition">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-[#e491c9] mb-4 text-center animate-slideUp">Contact Us</h1>
        <p className="text-center text-[#e491c9] mb-12 animate-slideUp" style={{ animationDelay: '0.1s' }}>Get in touch with our team</p>

        <form className="space-y-6 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          <div className="transform transition-all duration-300 hover:translate-x-1">
            <label className="block text-[#e491c9] font-semibold mb-2">Name</label>
            <input 
              type="text" 
              className="w-full bg-[#1c1f4f] border border-[#982598] rounded-lg px-4 py-3 text-[#f1e9e9] focus:outline-none focus:border-[#e491c9] focus:shadow-lg focus:shadow-[#982598]/50 transition-all duration-300"
              placeholder="Your name"
            />
          </div>

          <div className="transform transition-all duration-300 hover:translate-x-1">
            <label className="block text-[#e491c9] font-semibold mb-2">Email</label>
            <input 
              type="email" 
              className="w-full bg-[#1c1f4f] border border-[#982598] rounded-lg px-4 py-3 text-[#f1e9e9] focus:outline-none focus:border-[#e491c9] focus:shadow-lg focus:shadow-[#982598]/50 transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>

          <div className="transform transition-all duration-300 hover:translate-x-1">
            <label className="block text-[#e491c9] font-semibold mb-2">Subject</label>
            <input 
              type="text" 
              className="w-full bg-[#1c1f4f] border border-[#982598] rounded-lg px-4 py-3 text-[#f1e9e9] focus:outline-none focus:border-[#e491c9] focus:shadow-lg focus:shadow-[#982598]/50 transition-all duration-300"
              placeholder="Subject"
            />
          </div>

          <div className="transform transition-all duration-300 hover:translate-x-1">
            <label className="block text-[#e491c9] font-semibold mb-2">Message</label>
            <textarea 
              className="w-full bg-[#1c1f4f] border border-[#982598] rounded-lg px-4 py-3 text-[#f1e9e9] focus:outline-none focus:border-[#e491c9] focus:shadow-lg focus:shadow-[#982598]/50 h-32 resize-none transition-all duration-300"
              placeholder="Your message"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#982598] hover:bg-[#e491c9] hover:text-[#15173D] transition-all duration-300 px-8 py-3 rounded-xl font-semibold btn-animate transform hover:scale-105 active:scale-95 shadow-lg shadow-[#982598]/50 hover:shadow-[#e491c9]/50"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-[#982598] animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl font-bold text-[#e491c9] mb-6">Other Ways to Reach Us</h2>
          <div className="space-y-4">
            <p className="transform transition-all duration-300 hover:translate-x-2"><span className="text-[#982598] font-semibold">Email:</span> info@zentomaxtech.com</p>
            <p className="transform transition-all duration-300 hover:translate-x-2"><span className="text-[#982598] font-semibold">Phone:</span> +1 (555) 123-4567</p>
            <p className="transform transition-all duration-300 hover:translate-x-2"><span className="text-[#982598] font-semibold">Address:</span> 123 Tech Street, Innovation City, IC 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
}
