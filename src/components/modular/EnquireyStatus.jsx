export default function EnquiryStatus({ enquiry }) {
  return (
    <div className="bg-yellow-50 p-4 rounded shadow mt-6 text-sm text-yellow-700">
      <h3 className="font-semibold mb-2">Enquiry Status</h3>
      <p>{enquiry ? enquiry : "No enquiries at this time."}</p>
      <p>Also find document status <a href="/documents" className="bg-yellow-300 p-0.5 rounded-sm hover:bg-yellow-400 shadow-md">here</a></p>
    </div>
  );
}
