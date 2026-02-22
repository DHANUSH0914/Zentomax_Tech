import { Routes, Route, Link, useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ServicesLayout from './pages/services/ServicesLayout';
import Development from './pages/services/Development';
import Projects from './pages/services/Projects';
import DigitalMarketing from './pages/services/DigitalMarketing';
import CoursesLayout from './pages/courses/CoursesLayout';
import Java from './pages/courses/Java';
import ReactJS from './pages/courses/Reactjs';
import MySQL from './pages/courses/Mysql';
import UIUX from './pages/courses/UIUX';
import DigitalMarketingCourse from './pages/courses/DigitalMarketingCourse';
import DataAnalytics from './pages/courses/DataAnalytics';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import './App.css';

function App() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileOpen(false);
  }, [location]);

  const navLinkClass = ({ isActive }) =>
    `relative group transition-all duration-300 ${isActive ? 'text-[#e491c9]' : 'hover:text-[#e491c9]'}`;

  const underline = (isActive) => (
    <span
      className={`absolute bottom-0 left-0 h-0.5 bg-[#e491c9] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
    />
  );

  return (
    <div className="h-screen bg-[#15173D] text-[#f1e9e9] flex flex-col overflow-hidden">
      <CustomCursor />

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-5 z-40 bg-[#15173D] backdrop-blur-sm bg-opacity-95 shadow-lg shadow-[#982598]/20 animate-slideDown flex-shrink-0">
        <Link to="/" className="text-2xl font-bold text-[#e491c9] transition-all duration-300 hover:scale-105 tracking-wide">
          ZentoMax Tech
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-[#f1e9e9] font-medium items-center">
          <li>
            <NavLink to="/" end className={navLinkClass}>
              {({ isActive }) => (<>Home{underline(isActive)}</>)}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              {({ isActive }) => (<>About Us{underline(isActive)}</>)}
            </NavLink>
          </li>
          {/* Services dropdown */}
          <li className="relative group">
            <span className="hover:text-[#e491c9] cursor-pointer transition-all duration-300 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e491c9] group-hover:w-full transition-all duration-300" />
            </span>
            <div className="absolute left-0 mt-2 w-52 bg-[#1c1f4f] rounded-xl shadow-2xl shadow-[#982598]/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-[#982598]/20">
              <Link to="/services/development" className="flex items-center gap-2 px-4 py-3 hover:text-[#e491c9] hover:bg-[#15173D] rounded-t-xl transition-all duration-200 hover:pl-6">
                <span>💻</span> Web Development
              </Link>
              <Link to="/services/projects" className="flex items-center gap-2 px-4 py-3 hover:text-[#e491c9] hover:bg-[#15173D] transition-all duration-200 hover:pl-6 border-t border-[#982598]/10">
                <span>🚀</span> Projects
              </Link>
              <Link to="/services/digital-marketing" className="flex items-center gap-2 px-4 py-3 hover:text-[#e491c9] hover:bg-[#15173D] transition-all duration-200 hover:pl-6 border-t border-[#982598]/10">
                <span>📣</span> Digital Marketing
              </Link>
              <Link to="/services/courses" className="flex items-center gap-2 px-4 py-3 hover:text-[#e491c9] hover:bg-[#15173D] rounded-b-xl transition-all duration-200 hover:pl-6 border-t border-[#982598]/10">
                <span>🎓</span> Courses
              </Link>
            </div>
          </li>
          <li>
            <NavLink to="/portfolio" className={navLinkClass}>
              {({ isActive }) => (<>Portfolio{underline(isActive)}</>)}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <span className="btn-animate px-4 py-2 rounded-lg border border-[#982598] hover:bg-[#982598] transition-all duration-300">
                    Contact Us
                  </span>
                </>
              )}
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#1c1f4f] transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#e491c9] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#e491c9] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#e491c9] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="md:hidden bg-[#1c1f4f] border-b border-[#982598]/30 px-6 py-4 flex flex-col gap-3 z-30 animate-slideDown flex-shrink-0">
            <Link to="/" className="hover:text-[#e491c9] py-2 border-b border-[#982598]/10 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-[#e491c9] py-2 border-b border-[#982598]/10 transition-colors">About Us</Link>
            <div>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full text-left hover:text-[#e491c9] py-2 border-b border-[#982598]/10 transition-colors flex justify-between">
                Services <span>{servicesOpen ? '▲' : '▼'}</span>
              </button>
              {servicesOpen && (
                <div className="pl-4 mt-1 flex flex-col gap-2">
                  <Link to="/services/development" className="hover:text-[#e491c9] py-1 text-sm transition-colors">💻 Web Development</Link>
                  <Link to="/services/projects" className="hover:text-[#e491c9] py-1 text-sm transition-colors">🚀 Projects</Link>
                  <Link to="/services/digital-marketing" className="hover:text-[#e491c9] py-1 text-sm transition-colors">📣 Digital Marketing</Link>
                  <Link to="/services/courses" className="hover:text-[#e491c9] py-1 text-sm transition-colors">🎓 Courses</Link>
                </div>
              )}
            </div>
            <Link to="/portfolio" className="hover:text-[#e491c9] py-2 border-b border-[#982598]/10 transition-colors">Portfolio</Link>
            <Link to="/contact" className="hover:text-[#e491c9] py-2 transition-colors">Contact Us</Link>
          </div>
        )}
      </AnimatePresence>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />

            {/* Services */}
            <Route path="/services" element={<ServicesLayout />}>
              <Route path="development" element={<PageTransition><Development /></PageTransition>} />
              <Route path="projects" element={<PageTransition><Projects /></PageTransition>} />
              <Route path="digital-marketing" element={<PageTransition><DigitalMarketing /></PageTransition>} />
              <Route path="courses" element={<CoursesLayout />}>
                <Route path="java" element={<PageTransition><Java /></PageTransition>} />
                <Route path="react" element={<PageTransition><ReactJS /></PageTransition>} />
                <Route path="mysql" element={<PageTransition><MySQL /></PageTransition>} />
                <Route path="uiux" element={<PageTransition><UIUX /></PageTransition>} />
                <Route path="digital-marketing" element={<PageTransition><DigitalMarketingCourse /></PageTransition>} />
                <Route path="data-analytics" element={<PageTransition><DataAnalytics /></PageTransition>} />
              </Route>
            </Route>
          </Routes>
        </AnimatePresence>

        {/* Footer */}
        <footer className="border-t border-[#982598]/40 bg-[#1c1f4f]/60 px-6 md:px-10 py-10 animate-fadeIn">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#e491c9] mb-3">ZentoMax Tech</h3>
              <p className="text-[#f1e9e9]/70 text-sm leading-relaxed">
                Delivering modern web solutions, scalable applications, and powerful digital experiences.
              </p>
            </div>
            <div>
              <h4 className="text-[#982598] font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-[#e491c9] transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-[#e491c9] transition-colors">About Us</Link></li>
                <li><Link to="/portfolio" className="hover:text-[#e491c9] transition-colors">Portfolio</Link></li>
                <li><Link to="/contact" className="hover:text-[#e491c9] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#982598] font-semibold mb-3">Connect</h4>
              <div className="flex gap-4 mb-4">
                <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-[#15173D] border border-[#982598]/40 flex items-center justify-center hover:border-[#e491c9] hover:text-[#e491c9] transition-all duration-300 hover:scale-110 text-sm">𝕏</a>
                <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-[#15173D] border border-[#982598]/40 flex items-center justify-center hover:border-[#e491c9] hover:text-[#e491c9] transition-all duration-300 hover:scale-110 text-xs">in</a>
                <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-[#15173D] border border-[#982598]/40 flex items-center justify-center hover:border-[#e491c9] hover:text-[#e491c9] transition-all duration-300 hover:scale-110 text-xs">📸</a>
                <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-full bg-[#15173D] border border-[#982598]/40 flex items-center justify-center hover:border-[#e491c9] hover:text-[#e491c9] transition-all duration-300 hover:scale-110 text-xs">⌥</a>
              </div>
              <p className="text-sm text-[#f1e9e9]/60">info@zentomaxtech.com</p>
            </div>
          </div>
          <div className="border-t border-[#982598]/20 mt-8 pt-4 text-center text-sm text-[#f1e9e9]/50">
            © 2026 ZentoMax Tech. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
