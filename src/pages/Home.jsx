export default function Home() {
  return (
    <div className="h-full bg-[#15173D] text-[#f1e9e9] flex items-center justify-center">
      <section className="flex flex-col items-center justify-center text-center px-6 page-transition">
        <h2 className="text-5xl font-extrabold mb-6 animate-slideUp">
          Build. Innovate. <span className="text-[#982598] animate-pulse">Scale.</span>
        </h2>

        <p className="max-w-2xl text-lg text-[#e491c9] mb-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          ZentoMax Tech delivers modern web solutions, scalable applications,
          and powerful digital experiences for startups and enterprises.
        </p>

        <button className="bg-[#982598] hover:bg-[#e491c9] hover:text-[#15173D] 
                           transition-all duration-300 px-8 py-3 rounded-xl font-semibold btn-animate animate-slideUp transform hover:scale-105 active:scale-95 shadow-lg shadow-[#982598]/50 hover:shadow-[#e491c9]/50"
                  style={{ animationDelay: '0.4s' }}>
          Get Started
        </button>
      </section>
    </div>
  );
}
