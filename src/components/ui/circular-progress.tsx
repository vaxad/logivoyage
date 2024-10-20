import { cn } from "@/lib/utils";

export default function CircularProgress({
  progress,
  endColor = "#3b82f6",
  startColor = "#6366f1",
  color,
  className,
}: {
  progress: number;
  startColor?: string;
  endColor?: string;
  color?: string;
  className?: string;
}) {
  const progressValue =
    Number(progress) < 1
      ? Number(progress)
      : progress < 100
        ? Number(progress) / 100
        : 1;
  return (
    <div className="flex items-center justify-center h-full">
      <div className={cn("relative w-[200px] h-[200px]", className)}>
        <svg
          className="absolute top-0 left-0 w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="url(#progress-gradient)"
            strokeWidth="8"
            strokeDasharray="251.2"
            strokeDashoffset={251.2 * (1 - progressValue)}
          />
          <defs>
            <linearGradient
              id="progress-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={color || startColor} />
              <stop offset="100%" stopColor={color || endColor} />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[8px] font-bold text-foreground">
          {progressValue * 100}%
        </div>
      </div>
    </div>
  );
}
