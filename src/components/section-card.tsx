import * as React from "react";

interface SectionCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

export function SectionCard({ title, icon, children, className, bodyClassName }: SectionCardProps) {
  return (
    <div className={`rounded-lg border bg-card ${className ?? ""}`}>
      <div className="p-6 pb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          {icon}
          {title}
        </h3>
      </div>
      <div className={`p-6 pt-0 ${bodyClassName ?? ""}`}>{children}</div>
    </div>
  );
}
