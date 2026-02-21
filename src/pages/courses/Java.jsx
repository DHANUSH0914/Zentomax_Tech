import { useState } from 'react';

export default function Java() {
  const [expandedTopics, setExpandedTopics] = useState({});

  const curriculum = [
    {
      id: 1,
      title: "Introduction to Java",
      subtopics: [
        "History & Features of Java",
        "JDK, JRE, JVM",
        "Compilation process",
        "First Java Program",
        "Structure of Java program"
      ],
      practice: ["Print student details", "Command line arguments demo"]
    },
    {
      id: 2,
      title: "Data Types & Variables",
      subtopics: [
        "Primitive data types",
        "Non-primitive",
        "Type casting",
        "Variables & scope"
      ],
      practice: ["Area of circle", "Swap numbers"]
    },
    {
      id: 3,
      title: "Operators",
      subtopics: [
        "Arithmetic",
        "Relational",
        "Logical",
        "Assignment",
        "Ternary"
      ],
      practice: ["Largest of 3 numbers", "Simple calculator"]
    },
    {
      id: 4,
      title: "Conditional Statements",
      subtopics: ["if", "if-else", "nested if", "switch"],
      practice: ["Grade calculation", "Electricity bill"]
    },
    {
      id: 5,
      title: "Loops",
      subtopics: ["for", "while", "do-while", "break & continue"],
      practice: ["Factorial", "Prime number", "Pattern programs"]
    },
    {
      id: 6,
      title: "Classes & Objects",
      subtopics: [
        "Class syntax",
        "Object creation",
        "Methods",
        "Memory concept (stack & heap basic)"
      ],
      practice: ["Student class"]
    },
    {
      id: 7,
      title: "Constructors & this",
      subtopics: [
        "Constructor types",
        "this keyword",
        "Constructor overloading"
      ],
      practice: ["Bank account class"]
    },
    {
      id: 8,
      title: "Inheritance",
      subtopics: [
        "Types of inheritance",
        "super keyword",
        "Method overriding"
      ],
      practice: ["Vehicle example"]
    },
    {
      id: 9,
      title: "Polymorphism",
      subtopics: [
        "Method overloading",
        "Method overriding",
        "Dynamic method dispatch"
      ],
      practice: []
    },
    {
      id: 10,
      title: "Abstraction & Interface",
      subtopics: [
        "Abstract class",
        "Interface",
        "Difference between abstract & interface",
        "Encapsulation"
      ],
      practice: ["Create payment system using interface"]
    },
    {
      id: 11,
      title: "Packages & Access Modifiers",
      subtopics: [
        "Packages",
        "public, private, protected, default",
        "Import statement"
      ],
      practice: []
    },
    {
      id: 12,
      title: "Exception Handling",
      subtopics: [
        "Types of exceptions",
        "try-catch-finally",
        "throw & throws",
        "Custom exception"
      ],
      practice: ["ATM simulation"]
    },
    {
      id: 13,
      title: "String & Wrapper Classes",
      subtopics: [
        "String methods",
        "String vs StringBuilder vs StringBuffer",
        "Wrapper classes",
        "Autoboxing"
      ],
      practice: ["Reverse string", "Palindrome"]
    },
    {
      id: 14,
      title: "Arrays",
      subtopics: ["1D arrays", "2D arrays", "Array programs", "Sorting"],
      practice: ["Second largest", "Duplicate elements"]
    },
    {
      id: 15,
      title: "Collections Framework (Part 1)",
      subtopics: [
        "Collection hierarchy",
        "List interface",
        "ArrayList",
        "LinkedList"
      ],
      practice: ["Student list management"]
    },
    {
      id: 16,
      title: "Collections (Part 2)",
      subtopics: [
        "Set (HashSet, TreeSet)",
        "Map (HashMap, TreeMap)",
        "Iterator"
      ],
      practice: ["Employee management"]
    },
    {
      id: 17,
      title: "Comparable & Comparator",
      subtopics: ["Sorting objects", "Custom sorting"],
      practice: []
    },
    {
      id: 18,
      title: "Multithreading",
      subtopics: [
        "What is thread?",
        "Thread lifecycle",
        "Creating thread (2 ways)",
        "Synchronization basics"
      ],
      practice: ["Ticket booking simulation"]
    },
    {
      id: 19,
      title: "Java 8 Features",
      subtopics: [
        "Lambda expressions",
        "Functional interface",
        "Stream API basics",
        "forEach"
      ],
      practice: ["Filter employees using stream"]
    },
    {
      id: 20,
      title: "Final Mini Project + Revision",
      subtopics: [
        "Student Management",
        "Library Management",
        "Employee Payroll"
      ],
      practice: ["Add, Update, Delete, Search, Sort"]
    }
  ];

  const toggleTopic = (id) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="max-w-5xl mx-auto page-transition">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-[#e491c9] mb-4 animate-slideUp">Java Programming Course</h2>
        <p className="text-[#f1e9e9] text-lg mb-8 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          Master Java programming from basics to advanced concepts in 20 days. This comprehensive course covers 
          object-oriented programming, data structures, collections, multithreading, and real-world application development.
        </p>
        
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#1c1f4f] p-6 rounded-xl border-l-4 border-[#982598] card-hover animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <p className="text-[#e491c9] font-bold text-2xl">20</p>
            <p className="text-[#f1e9e9] text-sm">Days</p>
          </div>
          <div className="bg-[#1c1f4f] p-6 rounded-xl border-l-4 border-[#e491c9] card-hover animate-slideUp" style={{ animationDelay: '0.25s' }}>
            <p className="text-[#e491c9] font-bold text-2xl">4</p>
            <p className="text-[#f1e9e9] text-sm">Weeks</p>
          </div>
          <div className="bg-[#1c1f4f] p-6 rounded-xl border-l-4 border-[#982598] card-hover animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <p className="text-[#e491c9] font-bold text-2xl">Beginner</p>
            <p className="text-[#f1e9e9] text-sm">to Advanced</p>
          </div>
          <div className="bg-[#1c1f4f] p-6 rounded-xl border-l-4 border-[#e491c9] card-hover animate-slideUp" style={{ animationDelay: '0.35s' }}>
            <p className="text-[#e491c9] font-bold text-2xl">✓</p>
            <p className="text-[#f1e9e9] text-sm">Certificate</p>
          </div>
        </div>
      </div>

      {/* Topic-wise Content Distribution */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-[#e491c9] mb-8">📚 Topic-wise Content Distribution</h3>
        
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
                <h4 className="text-lg font-bold text-[#f1e9e9] flex-1">
                  {topic.title}
                </h4>
                <span className="text-[#e491c9] text-sm font-semibold">Day {topic.id}</span>
              </button>

              {/* Expanded Content */}
              {expandedTopics[topic.id] && (
                <div className="bg-[#15173D] p-6 ml-4 mt-2 rounded-lg space-y-4">
                  {/* Subtopics */}
                  <div>
                    <h5 className="text-[#e491c9] font-bold mb-3">Topics Covered:</h5>
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

      {/* Mini Projects */}
      <div className="mt-16 bg-gradient-to-r from-[#982598] to-[#e491c9] p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-white mb-6">🔹 Mini Project Ideas (Day 20)</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#15173D] p-6 rounded-lg">
            <h4 className="text-[#e491c9] font-bold mb-3">Student Management</h4>
            <p className="text-[#f1e9e9] text-sm mb-4">Collections-based system for managing student records</p>
            <ul className="text-[#f1e9e9] text-sm space-y-1">
              <li>✓ Add students</li>
              <li>✓ Update records</li>
              <li>✓ Delete entries</li>
              <li>✓ Search & Sort</li>
            </ul>
          </div>
          <div className="bg-[#15173D] p-6 rounded-lg">
            <h4 className="text-[#e491c9] font-bold mb-3">Library Management</h4>
            <p className="text-[#f1e9e9] text-sm mb-4">Complete library system with book tracking</p>
            <ul className="text-[#f1e9e9] text-sm space-y-1">
              <li>✓ Add books</li>
              <li>✓ Issue/Return</li>
              <li>✓ Member management</li>
              <li>✓ Search & Filter</li>
            </ul>
          </div>
          <div className="bg-[#15173D] p-6 rounded-lg">
            <h4 className="text-[#e491c9] font-bold mb-3">Employee Payroll</h4>
            <p className="text-[#f1e9e9] text-sm mb-4">Payroll system with salary calculations</p>
            <ul className="text-[#f1e9e9] text-sm space-y-1">
              <li>✓ Add employees</li>
              <li>✓ Calculate salary</li>
              <li>✓ Generate reports</li>
              <li>✓ Data persistence</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Enroll Button */}
      <button className="mt-12 w-full bg-[#982598] hover:bg-[#e491c9] hover:text-[#15173D] transition duration-300 px-8 py-4 rounded-xl font-bold text-lg">
        Enroll Now - Start Your Java Journey
      </button>
    </div>
  );
}
