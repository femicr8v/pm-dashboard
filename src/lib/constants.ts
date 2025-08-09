import {
  LayoutDashboard,
  Settings,
  Users,
  FolderKanban,
  Calendar,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

import {
  NavigationItem,
  ProjectListProps,
  QuickAction,
  StatCard,
} from "./types";

export const navigation_items: NavigationItem[] = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: FolderKanban,
    badge: "3",
  },
  {
    name: "Team",
    href: "/team",
    icon: Users,
  },
  {
    name: "Calendar",
    href: "/calendar",
    icon: Calendar,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export const stat_cards: StatCard[] = [
  {
    label: "Active Projects",
    value: 12,
    icon: FolderKanban,
    className: "h-8 w-8 text-muted-foreground",
  },
  {
    label: "Team Members",
    value: 8,
    icon: Users,
    className: "h-8 w-8 text-muted-foreground",
  },
  {
    label: "Tasks Completed",
    value: 47,
    icon: CheckCircle2,
    className: "h-8 w-8 text-green-600",
  },
  {
    label: "Overdue Tasks",
    value: 3,
    icon: AlertCircle,
    className: "h-8 w-8 text-red-600",
  },
];

export const project_list: ProjectListProps[] = [
  {
    title: "Website Redesign",
    subtitle: "Due in 5 days",
    status: { label: "In Progress", variant: "secondary" },
  },
  {
    title: "Mobile App Launch",
    subtitle: "Due in 12 days",
    status: { label: "Planning", variant: "warning" },
  },
  {
    title: "API Integration",
    subtitle: "Due in 2 days",
    status: { label: "Urgent", variant: "destructive" },
  },
];

export const quick_actions: QuickAction[] = [
  {
    variant: "outline",
    icon: FolderKanban,
    label: "New Project",
    href: "/projects/new",
  },
  {
    variant: "outline",
    icon: Users,
    label: "Invite Team",
    href: "/team/invite",
  },
  {
    variant: "outline",
    icon: Calendar,
    label: "Schedule Meeting",
    href: "/calendar",
  },
  {
    variant: "outline",
    icon: TrendingUp,
    label: "View Reports",
    href: "/reports",
  },
];
