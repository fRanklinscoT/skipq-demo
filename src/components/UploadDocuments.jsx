import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import EnquireBtn from "./Enquire";

export default function UploadDocuments() {
  
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return alert("Please select a file.");
    console.log("Uploading:", file);
  };

  return (
    <>
     
      
      <Navbar />
      <div className="bg-white py-10 px-4 mt-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-yellow-700 mb-6 text-center">
          upload Documentation
        </h1>
      </div>
    </div>
      {/* Table Section */}
      <div className="w-full px-4 flex justify-center mt-20">
        <div className="overflow-x-auto rounded-lg shadow-md w-full max-w-5xl">
          <table className="w-full border-collapse text-sm text-left">
            <thead className="bg-yellow-600 text-white">
              <tr>
                <th className="px-4 py-3">Student Number</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Documents</th>
                <th className="px-4 py-3">Block Type</th>
                <th className="px-4 py-3">Progress</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  student: "222417961",
                  status: "Blocked",
                  doc: "AOD document",
                  type: "Financial",
                  progress: "Received",
                },
                {
                  student: "222691133",
                  status: "Blocked",
                  doc: "Exclusion Letter",
                  type: "Exclusion",
                  progress: "Pending",
                },
                {
                  student: "221830105",
                  status: "Blocked",
                  doc: "Exclusion Letter",
                  type: "Exclusion",
                  progress: "Recieved", 
                },
                {
                  student: "220906779",
                  status: "Blocked",
                  doc: "AOD document",
                  type: "Financial",
                  progress: "pending",
                },
              ].map((row, i) => (
                <tr key={i} className="even:bg-gray-100 odd:bg-white border-b dark:bg-gray-800 dark:text-white">
                  <td className="px-4 py-3">{row.student}</td>
                  <td className="px-4 py-3">{row.status}</td>
                  <td className="px-4 py-3">{row.doc}</td>
                  <td className="px-4 py-3">{row.type}</td>
                  <td className="px-4 py-3">{row.progress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Section */}
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-10 mt-[-100px]">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Upload Document</h2>

          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-yellow-100 file:text-yellow-700
                      hover:file:bg-yellow-200 mb-4"
          />

          {file && (
            <p className="text-sm text-gray-700 mb-4">
              Selected: <strong>{file.name}</strong>
            </p>
          )}

          <button
            onClick={handleUpload}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-md transition"
          >
            Upload
          </button>
          <EnquireBtn />
        </div>
      </div>
    </>
  );
}
