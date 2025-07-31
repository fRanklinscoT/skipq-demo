import React from "react"
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function EnquireBtn(){
    const navigate = useNavigate();

    return(
        <>
            <button
                className="flex flex-row fixed bottom-6 right-6 z-50 align-middle bg-yellow-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-yellow-700 transition-all"
                onClick={() => navigate("/contact")}
                >
                  <FaInfoCircle className="flex justify-center-safe mt-1"/><p className="flex justify-center ml-1.5">Need Help?</p>
            </button>
        </>
    );
}

