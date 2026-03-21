import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight, type LucideIcon } from "lucide-react";

type MetricCardProps = {
  title: string;
  value: string;
  change?: number;
  icon?: LucideIcon;
  subtitle?: string;
};

export function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  subtitle,
}: MetricCardProps) {
  const hasChange = change !== undefined;
  const isPositive = change > 0;
  const isNegative = change < 0;

  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="mt-2 text-2xl font-semibold text-foreground">{value}</p>
          {(hasChange || subtitle) && (
            <div className="mt-2 flex items-center gap-2">
              {hasChange && (
                <span
                  className={cn(
                    "flex items-center text-sm font-medium",
                    isPositive && "text-accent",
                    isNegative && "text-destructive",
                    !isPositive && !isNegative && "text-muted-foreground"
                  )}
                >
                  {isPositive && <ArrowUpRight className="h-3 w-3" />}
                  {isNegative && <ArrowDownRight className="h-3 w-3" />}
                  {Math.abs(change)}%
                </span>
              )}
              {subtitle && (
                <span className="text-sm text-muted-foreground">{subtitle}</span>
              )}
            </div>
          )}
        </div>
        {Icon && (
          <div className="rounded-md bg-muted p-2">
            <Icon className="h-4 w-4 text-muted-foreground" />
          </div>
        )}
      </div>
    </div>
  );
}
