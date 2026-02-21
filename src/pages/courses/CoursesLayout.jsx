import { Outlet, useLocation, Link } from 'react-router-dom';

export default function CoursesLayout() {
  const location = useLocation();
  const isCoursesPage = location.pathname === '/services/courses';

  const courses = [
    { id: 1, icon: '☕', title: 'Java Programming', description: 'Master Java programming from basics to advanced concepts including OOP, data structures, and frameworks.', path: '/services/courses/java', badge: 'Popular' },
    { id: 2, icon: '🎨', title: 'UI/UX Design', description: 'Learn to create beautiful, user-centered digital experiences with industry tools and methodologies.', path: '/services/courses/uiux', badge: 'Trending' },
    { id: 3, icon: '📣', title: 'Digital Marketing', description: 'Master the art and science of digital marketing — SEO, social media, PPC, and analytics.', path: '/services/courses/digital-marketing', badge: '' },
    { id: 4, icon: '📊', title: 'Data Analytics', description: 'Transform raw data into actionable insights with Python, SQL, and modern BI tools.', path: '/services/courses/data-analytics', badge: 'New' },
  ];

  return (
    <div className="min-h-screen bg-[#15173D] text-[#f1e9e9] page-transition">
      {isCoursesPage ? (
        <div className="px-6 md:px-10 py-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#982598] mb-3 animate-slideUp">Our Courses</h2>
          <p className="text-[#f1e9e9]/60 mb-10 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            Hands-on, industry-focused training to power your career
          </p>
          <div className="grid md:grid-cols-2 gap-7">
            {courses.map((course, idx) => (
              <Link key={course.id} to={course.path} className="block group">
                <div
                  className="bg-[#1c1f4f] p-8 rounded-2xl card-hover border border-[#982598]/10 group-hover:border-[#982598]/50 h-full animate-stagger-1 relative overflow-hidden"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  {course.badge && (
                    <span className="absolute top-4 right-4 bg-[#982598] text-white text-xs px-2 py-1 rounded-full font-semibold">
                      {course.badge}
                    </span>
                  )}
                  <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${idx * 0.5}s` }}>{course.icon}</div>
                  <h3 className="text-2xl font-bold text-[#e491c9] mb-3 group-hover:text-white transition-colors">{course.title}</h3>
                  <p className="text-[#f1e9e9]/70 mb-6 leading-relaxed">{course.description}</p>
                  <div className="flex items-center gap-2 text-[#982598] font-semibold text-sm group-hover:text-[#e491c9] transition-colors">
                    View Course <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="px-6 md:px-10 py-10 max-w-7xl mx-auto">
          <Outlet />
        </div>
      )}
    </div>
  );
}
