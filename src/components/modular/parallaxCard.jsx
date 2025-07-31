// components/ParallaxCard.tsx
import Atropos from 'atropos/react';
import 'atropos/css';

export default function ParallaxCard() {
  return (
    <Atropos
      className="my-atropos w-full max-w-sm mx-auto"
      activeOffset={40}
      shadow={false}
    >
      <div className="bg-yellow-600 text-white p-6 rounded-xl flex flex-col items-center space-y-4">
        <h2
          data-atropos-offset="5"
          className="text-2xl font-bold tracking-tight"
        >
          AstroposJS + Tailwind
        </h2>
        <p data-atropos-offset="3" className="text-sm opacity-90">
          Fully responsive 3D hover tilt.
        </p>
        <button
          data-atropos-offset="8"
          className="bg-white text-yellow-600 font-semibold px-4 py-2 rounded hover:bg-yellow-100 transition"
        >
          Try it
        </button>
      </div>
    </Atropos>
  );
}
