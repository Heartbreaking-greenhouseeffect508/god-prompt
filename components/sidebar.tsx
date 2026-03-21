"use client";

import { cn } from "@/lib/utils";
import {
  LayoutGrid,
  Activity,
  Database,
  Settings,
  Users,
  FileText,
  Shield,
  Zap,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

type NavItem = {
  label: string;
  icon: React.ElementType;
  href: string;
  badge?: string;
  active?: boolean;
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const navigation: NavSection[] = [
  {
    title: "",
    items: [
      { label: "Overview", icon: LayoutGrid, href: "#", active: true },
      { label: "Analytics", icon: Activity, href: "#", badge: "New" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Database", icon: Database, href: "#" },
      { label: "Functions", icon: Zap, href: "#" },
      { label: "Storage", icon: FileText, href: "#" },
    ],
  },
  {
    title: "Management",
    items: [
      { label: "Users", icon: Users, href: "#" },
      { label: "Security", icon: Shield, href: "#" },
      { label: "Settings", icon: Settings, href: "#" },
    ],
  },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "flex h-screen flex-col border-r border-border bg-card transition-all duration-200",
        collapsed ? "w-16" : "w-56"
      )}
    >
      <div className="flex h-14 items-center gap-2 border-b border-border px-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
          <span className="text-sm font-bold text-primary-foreground">D</span>
        </div>
        {!collapsed && (
          <span className="font-semibold text-foreground">Dashboard</span>
        )}
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-2">
        {navigation.map((section, idx) => (
          <div key={idx} className="mb-4">
            {section.title && !collapsed && (
              <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {section.title}
              </p>
            )}
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                      item.active
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    {!collapsed && (
                      <>
                        <span className="flex-1">{item.label}</span>
                        {item.badge && (
                          <span className="rounded bg-primary/20 px-1.5 py-0.5 text-xs font-medium text-primary">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-border p-2">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex w-full items-center justify-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              collapsed ? "rotate-90" : "-rotate-90"
            )}
          />
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </aside>
  );
}
