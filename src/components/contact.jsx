import Navbar from "./Navbar";

const Enquire = () => {
  return (

    <>
    <Navbar />
    <div className="p-6 max-w-xl mx-auto mt-28">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Need Help with Registration?
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        If you’re blocked from registering due to academic or financial reasons, use this form to contact support.
      </p>

      {/* Block Type Dropdown */}
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Block Type
      </label>
      <select className="w-full border border-gray-300 rounded-md p-2 mb-4">
        <option value="">-- Select Block Type --</option>
        <option value="financial">Financial Block</option>
        <option value="academic">Academic Block</option>
      </select>

      {/* Message Field */}
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Your Message
      </label>
      <textarea
        placeholder="Explain your issue..."
        rows={4}
        className="w-full border border-gray-300 rounded-md p-3 mb-4"
      />

      {/* Fake Submit Button */}
      <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-4 py-2 rounded-md w-full">
        Submit Enquiry
      </button>
    </div>
    </>
  );
};

export default Enquire;
