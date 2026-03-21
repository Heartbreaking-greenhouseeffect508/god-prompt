import { StatusIndicator } from "./status-indicator";

type SystemService = {
  name: string;
  status: "healthy" | "warning" | "error" | "inactive";
  uptime: string;
  latency: string;
};

const services: SystemService[] = [
  { name: "API Gateway", status: "healthy", uptime: "99.99%", latency: "24ms" },
  { name: "Database", status: "healthy", uptime: "99.98%", latency: "12ms" },
  { name: "Cache", status: "healthy", uptime: "100%", latency: "2ms" },
  { name: "CDN", status: "healthy", uptime: "99.99%", latency: "8ms" },
  { name: "Functions", status: "warning", uptime: "99.95%", latency: "156ms" },
  { name: "Storage", status: "healthy", uptime: "99.99%", latency: "45ms" },
];

export function SystemStatus() {
  const healthyCount = services.filter((s) => s.status === "healthy").length;

  return (
    <div className="rounded-lg border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <h3 className="font-medium text-foreground">System Status</h3>
        <div className="flex items-center gap-2">
          <StatusIndicator status="healthy" />
          <span className="text-sm text-muted-foreground">
            {healthyCount}/{services.length} Operational
          </span>
        </div>
      </div>
      <div className="grid gap-3 p-5">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex items-center justify-between rounded-md bg-muted/50 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <StatusIndicator status={service.status} />
              <span className="text-sm font-medium text-foreground">{service.name}</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{service.uptime}</span>
              <span className="font-mono text-xs">{service.latency}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
