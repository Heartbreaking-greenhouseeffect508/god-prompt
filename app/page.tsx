import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { MetricCard } from "@/components/metric-card";
import { ActivityList } from "@/components/activity-list";
import { SystemStatus } from "@/components/system-status";
import { SimpleChart } from "@/components/simple-chart";
import { Activity, Users, Zap, Database } from "lucide-react";

const requestData = [
  { value: 1200, label: "1" },
  { value: 1800, label: "2" },
  { value: 1500, label: "3" },
  { value: 2200, label: "4" },
  { value: 1900, label: "5" },
  { value: 2100, label: "6" },
  { value: 2400, label: "7" },
  { value: 2000, label: "8" },
  { value: 1700, label: "9" },
  { value: 1900, label: "10" },
  { value: 2300, label: "11" },
  { value: 2800, label: "12" },
];

const bandwidthData = [
  { value: 45, label: "1" },
  { value: 52, label: "2" },
  { value: 48, label: "3" },
  { value: 61, label: "4" },
  { value: 55, label: "5" },
  { value: 67, label: "6" },
  { value: 72, label: "7" },
  { value: 68, label: "8" },
  { value: 59, label: "9" },
  { value: 64, label: "10" },
  { value: 71, label: "11" },
  { value: 78, label: "12" },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-background p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Metrics Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Total Requests"
                value="289K"
                change={12.5}
                icon={Activity}
                subtitle="vs last period"
              />
              <MetricCard
                title="Active Users"
                value="14,239"
                change={8.2}
                icon={Users}
                subtitle="vs last period"
              />
              <MetricCard
                title="Function Invocations"
                value="1.2M"
                change={-2.4}
                icon={Zap}
                subtitle="vs last period"
              />
              <MetricCard
                title="Data Transfer"
                value="102 GB"
                change={15.3}
                icon={Database}
                subtitle="vs last period"
              />
            </div>

            {/* Charts Row */}
            <div className="grid gap-4 lg:grid-cols-2">
              <SimpleChart
                title="Requests"
                data={requestData}
                color="primary"
              />
              <SimpleChart
                title="Bandwidth"
                data={bandwidthData}
                color="accent"
                suffix=" GB"
              />
            </div>

            {/* Activity and Status */}
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <ActivityList />
              </div>
              <div>
                <SystemStatus />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
