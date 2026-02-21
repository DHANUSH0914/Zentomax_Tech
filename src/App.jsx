import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
import UIUX from './pages/courses/UIUX';
import DigitalMarketingCourse from './pages/courses/DigitalMarketingCourse';
import DataAnalytics from './pages/courses/DataAnalytics';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const location = useLocation();
  const isServicesPage = location.pathname.startsWith('/services') && !location.pathname.includes('/courses');
  const isCoursesPage = location.pathname.startsWith('/services/courses');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="h-screen bg-[#15173D] text-[#f1e9e9] flex flex-col overflow-hidden">
      <CustomCursor />
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 z-40 bg-[#15173D] backdrop-blur-sm bg-opacity-95 shadow-lg shadow-[#982598]/20 animate-slideDown flex-shrink-0">
        <Link to="/" className="text-2xl font-bold text-[#e491c9] hover:text-[#e491c9] transition-all duration-300 hover:scale-110">
          ZentoMax Tech
        </Link>

        <ul className="flex gap-8 text-[#f1e9e9] font-medium">
          <li>
            <Link to="/" className="hover:text-[#e491c9] transition-all duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e491c9] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#e491c9] transition-all duration-300 relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e491c9] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li className="relative group">
            <span className="hover:text-[#e491c9] cursor-pointer transition-all duration-300 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e491c9] group-hover:w-full transition-all duration-300"></span>
            </span>
            <div className="absolute left-0 mt-0 w-48 bg-[#1c1f4f] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform group-hover:translate-y-2">
              <Link to="/services/development" className="block px-4 py-2 hover:text-[#e491c9] hover:bg-[#15173D] rounded-t-lg transition-all duration-200 hover:translate-x-1">Web Development</Link>
              <Link to="/services/projects" className="block px-4 py-2 hover:text-[#e491c9] hover:bg-[#15173D] transition-all duration-200 hover:translate-x-1">Projects</Link>
              <Link to="/services/digital-marketing" className="block px-4 py-2 hover:text-[#e491c9] hover:bg-[#15173D] transition-all duration-200 hover:translate-x-1">Digital Marketing</Link>
              <Link to="/services/courses" className="block px-4 py-2 hover:text-[#e491c9] hover:bg-[#15173D] rounded-b-lg transition-all duration-200 hover:translate-x-1">Courses</Link>
            </div>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-[#e491c9] transition-all duration-300 relative group">
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e491c9] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#e491c9] transition-all duration-300 relative group">
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e491c9] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content Area - Scrollable */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        {/* Services Header */}
        {isServicesPage && (
          <div className="px-10 py-8 animate-fadeIn">
            <h1 className="text-4xl font-bold text-[#e491c9] text-center animate-slideUp">Our Services</h1>
          </div>
        )}

        {/* Courses Header */}
        {isCoursesPage && location.pathname === '/services/courses' && (
          <div className="px-10 py-8 animate-fadeIn">
            <h1 className="text-4xl font-bold text-[#e491c9] text-center animate-slideUp">Our Courses</h1>
          </div>
        )}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<ServicesLayout />}>
            <Route path="development" element={<Development />} />
            <Route path="projects" element={<Projects />} />
            <Route path="digital-marketing" element={<DigitalMarketing />} />
            <Route path="courses" element={<CoursesLayout />}>
              <Route path="java" element={<Java />} />
              <Route path="uiux" element={<UIUX />} />
              <Route path="digital-marketing" element={<DigitalMarketingCourse />} />
              <Route path="data-analytics" element={<DataAnalytics />} />
            </Route>
          </Route>
        </Routes>

        {/* Footer */}
        <footer className="text-center py-6 border-t border-[#982598] animate-fadeIn">
          <p className="text-[#e491c9]">
            © 2026 ZentoMax Tech. All rights reserved.
          </p>
        </footer>
      </div>

    </div>
  )
}

export default App
