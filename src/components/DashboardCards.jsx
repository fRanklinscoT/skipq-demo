import Atropos from 'atropos/react';
import 'atropos/css';

export default function DashboardCard({ title, description, href }) {
  const Wrapper = href ? 'a' : 'div';
  
  return (
    <Atropos
      className="my-atropos w-full mx-auto"
      activeOffset={40}
      shadow={false}
    >
    <Wrapper
      href={href}
      className={`block bg-gradient-to-br from-amber-500 via-yellow-600 to-amber-700 dark:bg-gray-800 rounded-lg shadow-stone-600 dark:shadow-stone-800 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
        href ? 'cursor-pointer' : ''
      }`}
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2" data-atropos-offset="5">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4" data-atropos-offset="3">{description}</p>
    </Wrapper>
    </Atropos>
  );
}