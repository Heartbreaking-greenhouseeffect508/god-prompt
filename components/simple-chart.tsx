"use client";

import { cn } from "@/lib/utils";

type DataPoint = {
  value: number;
  label: string;
};

type SimpleChartProps = {
  title: string;
  data: DataPoint[];
  color?: "primary" | "accent" | "warning";
  suffix?: string;
};

const colorMap = {
  primary: "bg-primary",
  accent: "bg-accent",
  warning: "bg-warning",
};

export function SimpleChart({
  title,
  data,
  color = "primary",
  suffix = "",
}: SimpleChartProps) {
  const maxValue = Math.max(1, ...data.map((d) => d.value));
  const currentValue = data[data.length - 1]?.value ?? 0;

  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="mt-1 text-xl font-semibold text-foreground">
            {currentValue.toLocaleString()}
            {suffix}
          </p>
        </div>
        <div className="flex gap-2">
          <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            12h
          </span>
        </div>
      </div>
      <div className="flex h-20 items-end gap-1">
        {data.map((point, idx) => (
          <div
            key={idx}
            className="group relative flex-1"
          >
            <div
              className={cn(
                "w-full rounded-t transition-all hover:opacity-80",
                colorMap[color]
              )}
              style={{
                height: `${(point.value / maxValue) * 100}%`,
                minHeight: "4px",
              }}
            />
            <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-foreground px-1.5 py-0.5 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
              {point.value}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
        <span>12h ago</span>
        <span>Now</span>
      </div>
    </div>
  );
}
