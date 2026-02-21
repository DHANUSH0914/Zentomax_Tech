import { Outlet, Link, useLocation } from 'react-router-dom';

export default function ServicesLayout() {
  const location = useLocation();
  const subLinks = [
    { to: '/services/development', label: '💻 Web Development' },
    { to: '/services/projects', label: '🚀 Projects' },
    { to: '/services/digital-marketing', label: '📣 Digital Marketing' },
    { to: '/services/courses', label: '🎓 Courses' },
  ];

  return (
    <div className="min-h-screen bg-[#15173D] text-[#f1e9e9]">
      {/* Sub-nav */}
      <div className="border-b border-[#982598]/20 bg-[#1c1f4f]/40 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex flex-wrap gap-2">
          {subLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                    ? 'bg-[#982598] text-white shadow-md shadow-[#982598]/40'
                    : 'hover:bg-[#982598]/20 hover:text-[#e491c9] text-[#f1e9e9]/70'
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="px-6 md:px-10 py-10 max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
