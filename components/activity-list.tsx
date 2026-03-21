import { StatusIndicator } from "./status-indicator";
import { ArrowRight } from "lucide-react";

type ActivityItem = {
  id: string;
  name: string;
  environment: "Production" | "Preview" | "Development";
  status: "healthy" | "warning" | "error" | "inactive";
  branch: string;
  commit: string;
  timestamp: string;
  author: string;
};

const activities: ActivityItem[] = [
  {
    id: "8JfpicWAW",
    name: "api-service",
    environment: "Production",
    status: "healthy",
    branch: "main",
    commit: "feat: add caching layer",
    timestamp: "12m ago",
    author: "Alex Chen",
  },
  {
    id: "BCoTKPg4n",
    name: "web-app",
    environment: "Preview",
    status: "healthy",
    branch: "feature/auth",
    commit: "fix: resolve auth flow",
    timestamp: "38m ago",
    author: "Sarah Kim",
  },
  {
    id: "1i3VpKTef",
    name: "dashboard",
    environment: "Preview",
    status: "warning",
    branch: "ui-updates",
    commit: "update: metrics panel",
    timestamp: "1h ago",
    author: "Mike Johnson",
  },
  {
    id: "3moKhGDvs",
    name: "api-service",
    environment: "Production",
    status: "healthy",
    branch: "main",
    commit: "perf: optimize queries",
    timestamp: "2h ago",
    author: "Alex Chen",
  },
  {
    id: "EdKwQTYgv",
    name: "docs",
    environment: "Development",
    status: "inactive",
    branch: "docs-v2",
    commit: "docs: API reference",
    timestamp: "2h ago",
    author: "Jordan Lee",
  },
];

const environmentColors = {
  Production: "text-accent",
  Preview: "text-primary",
  Development: "text-muted-foreground",
};

export function ActivityList() {
  return (
    <div className="rounded-lg border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <h3 className="font-medium text-foreground">Recent Deployments</h3>
        <button className="flex items-center gap-1 text-sm text-primary hover:underline">
          View all <ArrowRight className="h-3 w-3" />
        </button>
      </div>
      <div className="divide-y divide-border">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between px-5 py-3 transition-colors hover:bg-muted/50"
          >
            <div className="flex items-center gap-4">
              <StatusIndicator status={activity.status} pulse={activity.status === "healthy"} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">{activity.name}</span>
                  <span className={`text-xs ${environmentColors[activity.environment]}`}>
                    {activity.environment}
                  </span>
                </div>
                <div className="mt-0.5 flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-mono text-xs">{activity.branch}</span>
                  <span>-</span>
                  <span className="truncate max-w-[200px]">{activity.commit}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
              <p className="text-xs text-muted-foreground">by {activity.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
