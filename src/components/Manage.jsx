import React, { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { BsCheckCircle } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";

export default function RegistrationPage() {
  const students = [
    {
      studentNumber: "22241961",
      name: "Blocked Student",
      course: "Diploma in Computer Science",
      year: "Second Year / Senior Student",
      isBlocked: true,
      blockReasons: [
        "Financial Block: Outstanding fees R12,500. NSFAS not detected.",
        "Academic Exclusion: You did not meet the minimum requirement in 2024.",
      ],
    },
    {
      studentNumber: "222691133",
      name: "Allowed Student",
      course: "Diploma in Computer Science",
      year: "Second Year / Senior Student",
      isBlocked: false,
      modules: [
        "COS201 - Operating Systems",
        "COS202 - Software Engineering",
        "COS203 - Databases",
        "COS204 - Networks",
      ],
    },
  ];

  const [selectedStudentIndex, setSelectedStudentIndex] = useState(null);
  const [selectedModules, setSelectedModules] = useState([]);

  const handleModuleToggle = (module) => {
    setSelectedModules((prev) =>
      prev.includes(module)
        ? prev.filter((m) => m !== module)
        : [...prev, module]
    );
  };

  const student = selectedStudentIndex !== null ? students[selectedStudentIndex] : null;

  return (
    <div className="min-h-screen w-full bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-yellow-600">
          Student Registration Portal
        </h1>

        {/* Student Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {students.map((s, index) => (
            <button
              key={s.studentNumber}
              onClick={() => {
                setSelectedStudentIndex(index);
                setSelectedModules([]); // Reset module selection
              }}
              className="w-full h-full p-6 bg-white border-2 border-yellow-200 rounded-xl shadow-md hover:shadow-lg hover:border-yellow-400 transition text-left"
            >
              <p className="text-gray-700">
                <span className="font-semibold">Name:</span> {s.name}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Course:</span> {s.course}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Year:</span> {s.year}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Student Number:</span>{" "}
                {s.studentNumber}
              </p>
            </button>
          ))}
        </div>

        {/* Registration Details */}
        {student && (
          <div
            id="dashboard"
            className="mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Registration Details
            </h2>

            {student.isBlocked ? (
              <div className="space-y-3">
                {student.blockReasons.map((reason, i) => (
                  <p key={i} className="flex items-center text-red-600">
                    <HiOutlineExclamationCircle className="mr-2 text-xl" />
                    {reason}
                  </p>
                ))}
                <button className="mt-4 bg-red-100 text-red-700 px-4 py-2 rounded cursor-not-allowed w-full text-center font-medium">
                  You are currently blocked from registration
                </button>
              </div>
            ) : (
              <div>
                <p className="mb-4 flex items-center text-green-600 font-medium">
                  <BsCheckCircle className="mr-2 text-xl" />
                  You are allowed to register. Select your modules below:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {student.modules.map((mod) => (
                    <label key={mod} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedModules.includes(mod)}
                        onChange={() => handleModuleToggle(mod)}
                        className="accent-yellow-600"
                      />
                      {mod}
                    </label>
                  ))}
                </div>

                <button
                  className="mt-6 flex items-center gap-2 bg-yellow-600 text-white px-5 py-2 rounded hover:bg-yellow-700 transition"
                  onClick={() => alert("PDF generation coming soon!")}
                >
                  <FaFileDownload />
                  Download Registration Summary (PDF)
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
