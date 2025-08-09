import {
  LayoutDashboard,
  Settings,
  Users,
  FolderKanban,
  Calendar,
  BarChart3,
} from "lucide-react";

import { NavigationItem } from "./types";

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
