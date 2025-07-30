export default function DashboardCard({ title, description, href }) {
  const Wrapper = href ? 'a' : 'div';
  
  return (
    <Wrapper
      href={href}
      className={`block bg-white dark:bg-gray-800 rounded-lg shadow-stone-600 dark:shadow-stone-800 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
        href ? 'cursor-pointer' : ''
      }`}
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    </Wrapper>
  );
}