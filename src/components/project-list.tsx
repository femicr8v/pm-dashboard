import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { ProjectListProps } from "@/lib/types";

export function ProjectList({ title, subtitle, status }: ProjectListProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
      <Badge variant={status.variant ?? "secondary"}>{status.label}</Badge>
    </div>
  );
}
