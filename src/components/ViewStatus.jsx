import React from "react";
import Navbar from "./Navbar";
import EnquireBtn from "./Enquire";
import StatusCard from "./modular/StatusCard";
import ProgressBar from "./modular/ProgressBar";
import EnquiryStatus from "./modular/EnquireyStatus";
import img from "../assets/tut.jpg"


export default function ViewStatus() {
  const studentData = {
    studentNumber: "222417961",
    status: "Blocked",
    blockType: "Financial",
    documentsSubmitted: true,
    documentName: "AOD Document",
    progress: "Under Review",
    enquiry: "Your enquiry is being processed and will be answered within 48 hours.",
  };

  return (
    <div
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="rounded-xl min-h-screen"
          >
      <Navbar />
      
      <div className="bg-white/5 py-10 px-4 mt-4">
        <div className="max-w-3xl mx-auto bg-white/60 shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-yellow-700 mb-6 text-center">
            Status Check
          </h1>
        </div>
      </div>      
      <div className="min-h-screen px-4 py-6 bg-white/5">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 my-28">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Registration Status
          </h1>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <StatusCard label="Student Number" value={studentData.studentNumber} />
            <StatusCard label="Block Type" value={studentData.blockType} valueClassName="text-red-600" />
            <StatusCard label="Status" value={studentData.status} valueClassName="text-red-500" />
            <StatusCard label="Document" value={studentData.documentName} />
          </div>

          <ProgressBar progress={studentData.progress} />

          <div className="text-sm text-gray-700 mt-4">
            <p>
              For financial blocks, please ensure you've submitted your AOD or proof of
              payment. Academic blocks may require appeal letters or additional documentation.
            </p>
          </div>

          <EnquiryStatus enquiry={studentData.enquiry} />
           
          <EnquireBtn />
        </div>
      </div>
      </div>
  );
}
