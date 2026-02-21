import { Outlet, useLocation, Link } from 'react-router-dom';

export default function CoursesLayout() {
  const location = useLocation();
  const isCoursesPage = location.pathname === '/services/courses';

  const courses = [
    {
      id: 1,
      title: "Java Programming",
      description: "Master Java programming from basics to advanced concepts",
      path: "/services/courses/java"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Learn to create beautiful, user-centered digital experiences",
      path: "/services/courses/uiux"
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Master the art and science of digital marketing",
      path: "/services/courses/digital-marketing"
    },
    {
      id: 4,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights",
      path: "/services/courses/data-analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-[#15173D] text-[#f1e9e9]">
      <div className="px-10 py-20">
        {isCoursesPage ? (
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course) => (
                <Link key={course.id} to={course.path} className="block">
                  <div className="bg-[#1c1f4f] p-8 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer h-full">
                    <h3 className="text-2xl font-bold text-[#e491c9] mb-3">{course.title}</h3>
                    <p className="text-[#f1e9e9]">{course.description}</p>
                    <button className="mt-6 bg-[#982598] hover:bg-[#e491c9] hover:text-[#15173D] transition duration-300 px-6 py-2 rounded-lg font-semibold">
                      View Course
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}
