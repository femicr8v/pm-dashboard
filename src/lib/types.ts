import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface NavigationItem {
  name: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}

export interface StatCard {
  label: string;
  value: number;
  icon: LucideIcon;
  className?: string;
}

export interface ProjectListProps {
  title: string;
  subtitle: string;
  status: {
    label: string;
    variant?: React.ComponentProps<typeof Badge>["variant"];
  };
}

export interface QuickAction {
  variant: "outline";
  icon: LucideIcon;
  label: string;
  href: string;
}
