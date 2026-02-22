import { useState } from 'react';

export default function ReactJS() {
    const [expandedModules, setExpandedModules] = useState({});

    const modules = [
        {
            id: 1,
            week: 'Week 1',
            title: 'React Fundamentals',
            emoji: '📦',
            topics: [
                'Introduction to React & SPA Architecture',
                'Virtual DOM & How React Works',
                'Project Setup using Vite',
                'JSX & Functional Components',
                'Props & Component Reusability',
                'useState Hook',
                'Event Handling',
                'Conditional Rendering',
                'Rendering Lists & Keys',
                'Form Handling & Basic Validation',
            ],
            practice: ['Counter Application', 'Dynamic Form Handling', 'Todo Application'],
            outcome: 'Students will understand core React concepts and build interactive UI applications independently.',
        },
        {
            id: 2,
            week: 'Week 2',
            title: 'Hooks & Routing',
            emoji: '📦',
            topics: [
                'useEffect Hook & Side Effects',
                'API Integration using Fetch',
                'Loading & Error Handling',
                'useRef & useMemo',
                'Performance Optimization Basics',
                'React Router Setup',
                'Multi-Page Navigation',
                'Dynamic Routing (useParams)',
                'Programmatic Navigation (useNavigate)',
                'Component Communication & Lifting State',
            ],
            practice: ['API Data Fetching Project', 'Multi-Page Website', 'User Dashboard with Routing'],
            outcome: 'Students will build dynamic multi-page applications with real-time API data integration.',
        },
        {
            id: 3,
            week: 'Week 3',
            title: 'Advanced React Concepts',
            emoji: '📦',
            topics: [
                'Context API (Global State Management)',
                'Creating & Using Custom Hooks',
                'Advanced Form Handling',
                'Form Validation Techniques',
                'React.memo',
                'useCallback',
                'Code Splitting & Lazy Loading',
                'Introduction to Redux (Concept Overview)',
            ],
            practice: ['Theme Switcher (Dark/Light Mode)', 'Custom useFetch Hook', 'Optimized Component Rendering'],
            outcome: 'Students will understand scalable React architecture and performance optimization techniques used in real-world applications.',
        },
        {
            id: 4,
            week: 'Week 4',
            title: 'Capstone Project & Deployment',
            emoji: '📦',
            topics: [
                'Project Planning & Architecture',
                'Component Structure Design',
                'State Management Strategy',
                'Responsive UI Development',
                'Search, Filter & Pagination',
                'Git & GitHub Workflow',
                'Deployment using Vercel / Netlify',
                'React Interview Preparation',
            ],
            practice: [
                'Build & Deploy a Production-Ready React Application',
                'Example: E-Commerce UI / Student Dashboard / Job Portal / Business Website',
            ],
            outcome: 'Students will complete the course with a portfolio-ready project and confidence to attend React developer interviews.',
        },
    ];

    const gains = [
        'Strong React Fundamentals',
        'Real-Time Project Experience',
        'API Integration Skills',
        'Routing & State Management Knowledge',
        'Performance Optimization Understanding',
        'Deployment & Git Workflow Knowledge',
        'Interview Preparation Support',
    ];

    const toggleModule = (id) => {
        setExpandedModules((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="max-w-5xl mx-auto page-transition">
            {/* Header */}
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-[#e491c9] mb-4 animate-slideUp">
                    🚀 React JS Professional Course
                </h2>
                <p className="text-[#f1e9e9]/80 text-lg mb-8 animate-slideUp leading-relaxed" style={{ animationDelay: '0.1s' }}>
                    This 4-week intensive React JS program is designed to build strong frontend development skills through
                    structured modules, real-time projects, and industry-level best practices. Students will gain hands-on
                    experience in building, optimizing, and deploying modern React applications.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: 'Duration', value: '4 Weeks' },
                        { label: 'Schedule', value: 'Mon – Fri' },
                        { label: 'Session', value: '1–1.5 Hrs' },
                        { label: 'Certificate', value: '✓' },
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className={`bg-[#1c1f4f] p-6 rounded-xl border-l-4 ${idx % 2 === 0 ? 'border-[#982598]' : 'border-[#e491c9]'} card-hover animate-slideUp`}
                            style={{ animationDelay: `${0.2 + idx * 0.05}s` }}
                        >
                            <p className="text-[#e491c9] font-bold text-xl">{stat.value}</p>
                            <p className="text-[#f1e9e9]/70 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-[#1c1f4f]/50 border border-[#982598]/20 rounded-xl p-4 flex flex-wrap gap-4 text-sm text-[#f1e9e9]/70">
                    <span>📍 <span className="text-[#e491c9] font-semibold">Level:</span> Beginner to Intermediate</span>
                    <span>🎯 <span className="text-[#e491c9] font-semibold">Mode:</span> Practical + Project-Based Learning</span>
                </div>
            </div>

            {/* Modules */}
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#e491c9] mb-8">� Course Modules</h3>

                <div className="space-y-4">
                    {modules.map((mod) => (
                        <div key={mod.id} className="border-l-4 border-[#982598]">
                            <button
                                onClick={() => toggleModule(mod.id)}
                                className="w-full flex items-center gap-4 p-4 bg-[#1c1f4f] hover:bg-[#2a2d5f] transition rounded-lg text-left"
                            >
                                <div className="flex-shrink-0">
                                    {expandedModules[mod.id] ? (
                                        <div className="w-6 h-6 rounded-full border-2 border-[#e491c9] flex items-center justify-center">
                                            <span className="text-[#e491c9] font-bold">−</span>
                                        </div>
                                    ) : (
                                        <div className="w-6 h-6 rounded-full border-2 border-[#982598] flex items-center justify-center">
                                            <span className="text-[#982598] font-bold">+</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-[#f1e9e9]">
                                        {mod.emoji} Module {mod.id}: {mod.title}
                                    </h4>
                                </div>
                                <span className="text-[#e491c9] text-sm font-semibold">{mod.week}</span>
                            </button>

                            {expandedModules[mod.id] && (
                                <div className="bg-[#15173D] p-6 ml-4 mt-2 rounded-lg space-y-5">
                                    {/* Topics */}
                                    <div>
                                        <h5 className="text-[#e491c9] font-bold mb-3">📌 Topics Covered:</h5>
                                        <ul className="space-y-2">
                                            {mod.topics.map((topic, idx) => (
                                                <li key={idx} className="text-[#f1e9e9] flex items-start gap-3">
                                                    <span className="text-[#982598] font-bold">•</span>
                                                    <span>{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Practice */}
                                    <div>
                                        <h5 className="text-[#e491c9] font-bold mb-3">� Practical Work:</h5>
                                        <ul className="space-y-2">
                                            {mod.practice.map((item, idx) => (
                                                <li key={idx} className="text-[#f1e9e9] flex items-start gap-3">
                                                    <span className="text-[#e491c9]">→</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Outcome */}
                                    <div className="bg-[#982598]/10 border border-[#982598]/30 rounded-lg p-4">
                                        <h5 className="text-[#e491c9] font-bold mb-1">🎯 Outcome:</h5>
                                        <p className="text-[#f1e9e9]/70 text-sm leading-relaxed">{mod.outcome}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* What Students Will Gain */}
            <div className="mt-12 bg-gradient-to-r from-[#982598] to-[#e491c9] p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">🎓 What Students Will Gain</h3>
                <div className="grid md:grid-cols-2 gap-3">
                    {gains.map((gain, idx) => (
                        <div key={idx} className="bg-[#15173D] px-5 py-3 rounded-lg flex items-center gap-3">
                            <span className="text-[#e491c9] font-bold">✔</span>
                            <span className="text-[#f1e9e9] text-sm">{gain}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enroll Button */}
            <button className="mt-12 w-full bg-[#982598] hover:bg-[#e491c9] hover:text-[#15173D] transition duration-300 px-8 py-4 rounded-xl font-bold text-lg">
                Enroll Now — Start Your React Journey
            </button>
        </div>
    );
}
