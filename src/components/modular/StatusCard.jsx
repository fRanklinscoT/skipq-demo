import Atropos from 'atropos/react';
import 'atropos/css';

export default function StatusCard({ label, value, valueClassName }) {
  return (
    <Atropos
        className="my-atropos w-full mx-auto max-w-sm"
        activeOffset={40}
        shadow={false}
    >
    <div >
      <p className="text-gray-500 text-sm" data-atropos-offset="5" >{label}</p>
      <p className={`font-medium ${valueClassName || ''}`} data-atropos-offset="3">{value}</p>
    </div>
    </Atropos>
  );
}
