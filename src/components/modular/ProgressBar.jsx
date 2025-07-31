export default function ProgressBar({ progress }) {
  const getProgressPercent = (progress) => {
    switch (progress) {
      case "Submitted": return 25;
      case "Under Review": return 50;
      case "Pending": return 75;
      case "Cleared": return 100;
      default: return 0;
    }
  };

  const progressColor =
    progress === "Cleared"
      ? "bg-green-600"
      : progress === "Pending"
      ? "bg-yellow-500"
      : "bg-blue-600";

  return (
    <div className="mb-6">
      <p className="text-sm text-gray-600 mb-2">
        Progress: <span className="font-semibold">{progress}</span>
      </p>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className={`h-4 rounded-full ${progressColor}`}
          style={{ width: `${getProgressPercent(progress)}%` }}
        />
      </div>
    </div>
  );
}
