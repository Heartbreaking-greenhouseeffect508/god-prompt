import { cn } from "@/lib/utils";

type StatusIndicatorProps = {
  status: "healthy" | "warning" | "error" | "inactive";
  label?: string;
  pulse?: boolean;
};

const statusStyles = {
  healthy: "bg-accent",
  warning: "bg-warning",
  error: "bg-destructive",
  inactive: "bg-muted-foreground",
};

export function StatusIndicator({
  status,
  label,
  pulse = false,
}: StatusIndicatorProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-2.5 w-2.5">
        {pulse && status === "healthy" && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        )}
        <span
          className={cn("relative inline-flex h-2.5 w-2.5 rounded-full", statusStyles[status])}
        />
      </span>
      {label && <span className="text-sm text-foreground">{label}</span>}
    </div>
  );
}
