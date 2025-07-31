export default function StatusCard({ label, value, valueClassName }) {
  return (
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className={`font-medium ${valueClassName || ''}`}>{value}</p>
    </div>
  );
}
