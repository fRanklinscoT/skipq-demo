export default function EnquiryStatus({ enquiry }) {
  return (
    <div className="bg-yellow-50 p-4 rounded shadow mt-6 text-sm text-yellow-700">
      <h3 className="font-semibold mb-2">Enquiry Status</h3>
      <p>{enquiry ? enquiry : "No enquiries at this time."}</p>
    </div>
  );
}
