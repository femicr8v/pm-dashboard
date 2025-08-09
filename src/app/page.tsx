import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/stat-card";
import { SectionCard } from "@/components/section-card";
import { ProjectList } from "@/components/project-list";
import { project_list, quick_actions, stat_cards } from "@/lib/constants";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
        <p className="text-muted-foreground">
          Here's what's happening with your projects today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stat_cards.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.value}
            icon={<item.icon className={item.className} />}
          />
        ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Projects */}
        <SectionCard title="Recent Projects" bodyClassName="space-y-4">
          {project_list.map((item) => (
            <ProjectList
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              status={item.status}
            />
          ))}
        </SectionCard>

        {/* Quick Actions */}
        <SectionCard title="Quick Actions" bodyClassName="pt-0">
          <div className="grid grid-cols-2 gap-3">
            {quick_actions.map((item) => (
              <Button
                key={item.label}
                variant={item.variant}
                className="h-20 flex-col gap-2"
              >
                <item.icon className="size-6" />
                <span className="text-sm">{item.label}</span>
              </Button>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
