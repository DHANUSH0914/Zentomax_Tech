import { useState } from 'react';

export default function MySQL() {
    const [expandedTopics, setExpandedTopics] = useState({});

    const curriculum = [
        {
            id: 1,
            title: "Module 1: SQL Fundamentals",
            subtopics: [
                "Introduction to Databases",
                "What is SQL?",
                "RDBMS Concepts",
                "DBMS vs RDBMS",
                "Database Tables & Schema",
                "Data Types in SQL",
                "CREATE Database & Table",
                "INSERT Data",
                "SELECT Statement",
                "WHERE Clause",
                "ORDER BY",
                "DISTINCT",
                "LIMIT / FETCH",
            ],
            practice: [
                "Create Student Table",
                "Insert Employee Records",
                "Filter Records using WHERE",
                "Sort Data using ORDER BY",
            ],
        },
        {
            id: 2,
            title: "Module 2: Intermediate SQL & Constraints",
            subtopics: [
                "Primary Key",
                "Foreign Key",
                "Unique & Not Null",
                "Default & Check Constraints",
                "UPDATE Statement",
                "DELETE Statement",
                "ALTER Table",
                "DROP & TRUNCATE",
                "Aggregate Functions (SUM, AVG, COUNT, MIN, MAX)",
                "GROUP BY",
                "HAVING Clause",
            ],
            practice: [
                "Employee Salary Calculation",
                "Group Employees by Department",
                "Find Highest & Lowest Salary",
                "Modify Table Structure",
            ],
        },
        {
            id: 3,
            title: "Module 3: Advanced SQL & Joins",
            subtopics: [
                "Types of Joins (INNER, LEFT, RIGHT, FULL)",
                "Self Join",
                "Subqueries",
                "Correlated Subqueries",
                "Views",
                "Indexes",
                "Constraints Review",
                "UNION & UNION ALL",
                "CASE Statement",
            ],
            practice: [
                "Department & Employee Join",
                "Find Second Highest Salary",
                "Create View for Reports",
                "Combine Tables using UNION",
            ],
        },
        {
            id: 4,
            title: "Module 4: Stored Procedures, Optimization & Project",
            subtopics: [
                "Stored Procedures",
                "Functions",
                "Triggers",
                "Transactions (COMMIT, ROLLBACK)",
                "ACID Properties",
                "Normalization (1NF, 2NF, 3NF)",
                "Performance Optimization Basics",
                "Real-time Query Scenarios",
                "Project Database Design",
            ],
            practice: [
                "Create Stored Procedure",
                "Build Trigger Example",
                "Bank Transaction Simulation",
                "Design & Implement Mini Database Project",
            ],
        },
    ];

    const gains = [
        "Strong SQL & Database Fundamentals",
        "Hands-On Query Writing Experience",
        "RDBMS Design & Normalization Skills",
        "Joins, Subqueries & Advanced SQL",
        "Stored Procedures, Triggers & Transactions",
        "Real-World Database Project Experience",
        "Interview Preparation & Query Practice",
    ];

    const toggleTopic = (id) => {
        setExpandedTopics((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="max-w-5xl mx-auto page-transition">
            {/* Header */}
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-[#e491c9] mb-4 animate-slideUp">
                    🗄️ MySQL Database Course
                </h2>
                <p className="text-[#f1e9e9]/80 text-lg mb-8 animate-slideUp leading-relaxed" style={{ animationDelay: '0.1s' }}>
                    A comprehensive, hands-on MySQL course covering everything from SQL fundamentals to advanced concepts
                    like stored procedures, triggers, transactions, and real-world database design. Build industry-ready
                    database skills through structured modules and practical exercises.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: 'Modules', value: '4' },
                        { label: 'Schedule', value: 'Mon – Fri' },
                        { label: 'Level', value: 'Beginner+' },
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
                    <span>📍 <span className="text-[#e491c9] font-semibold">Level:</span> Beginner to Advanced</span>
                    <span>🎯 <span className="text-[#e491c9] font-semibold">Mode:</span> Practical + Project-Based Learning</span>
                </div>
            </div>

            {/* Curriculum */}
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#e491c9] mb-8">📚 Course Modules</h3>

                <div className="space-y-4">
                    {curriculum.map((topic) => (
                        <div key={topic.id} className="border-l-4 border-[#982598]">
                            <button
                                onClick={() => toggleTopic(topic.id)}
                                className="w-full flex items-center gap-4 p-4 bg-[#1c1f4f] hover:bg-[#2a2d5f] transition rounded-lg text-left"
                            >
                                <div className="flex-shrink-0">
                                    {expandedTopics[topic.id] ? (
                                        <div className="w-6 h-6 rounded-full border-2 border-[#e491c9] flex items-center justify-center">
                                            <span className="text-[#e491c9] font-bold">−</span>
                                        </div>
                                    ) : (
                                        <div className="w-6 h-6 rounded-full border-2 border-[#982598] flex items-center justify-center">
                                            <span className="text-[#982598] font-bold">+</span>
                                        </div>
                                    )}
                                </div>
                                <h4 className="text-lg font-bold text-[#f1e9e9] flex-1">{topic.title}</h4>
                                <span className="text-[#e491c9] text-sm font-semibold">Module {topic.id}</span>
                            </button>

                            {expandedTopics[topic.id] && (
                                <div className="bg-[#15173D] p-6 ml-4 mt-2 rounded-lg space-y-5">
                                    {/* Topics */}
                                    <div>
                                        <h5 className="text-[#e491c9] font-bold mb-3">📌 Topics Covered:</h5>
                                        <ul className="space-y-2">
                                            {topic.subtopics.map((subtopic, idx) => (
                                                <li key={idx} className="text-[#f1e9e9] flex items-start gap-3">
                                                    <span className="text-[#982598] font-bold">•</span>
                                                    <span>{subtopic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Practice */}
                                    {topic.practice.length > 0 && (
                                        <div>
                                            <h5 className="text-[#e491c9] font-bold mb-3">💻 Practice Exercises:</h5>
                                            <ul className="space-y-2">
                                                {topic.practice.map((exercise, idx) => (
                                                    <li key={idx} className="text-[#f1e9e9] flex items-start gap-3">
                                                        <span className="text-[#e491c9]">→</span>
                                                        <span>{exercise}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Mini Project Section */}
            <div className="mt-12 bg-gradient-to-r from-[#982598] to-[#e491c9] p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">🔹 What Students Will Gain</h3>
                <div className="grid md:grid-cols-2 gap-3">
                    {gains.map((gain, idx) => (
                        <div key={idx} className="bg-[#15173D] px-5 py-3 rounded-lg flex items-center gap-3">
                            <span className="text-[#e491c9] font-bold">✔</span>
                            <span className="text-[#f1e9e9] text-sm">{gain}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enroll Button
            <button className="mt-12 w-full bg-[#982598] hover:bg-[#e491c9] hover:text-[#15173D] transition duration-300 px-8 py-4 rounded-xl font-bold text-lg">
                Enroll Now — Start Your MySQL Journey
            </button> */}
        </div>
    );
}
