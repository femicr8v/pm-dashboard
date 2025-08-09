import * as React from "react";

interface SettingRowProps {
  title: string;
  description?: string;
  right?: React.ReactNode;
}

export function SettingRow({ title, description, right }: SettingRowProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium">{title}</p>
        {description ? (
          <p className="text-xs text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {right}
    </div>
  );
}
