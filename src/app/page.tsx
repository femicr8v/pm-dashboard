import {
  Users,
  FolderKanban,
  Calendar,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/components/dashboard-layout";

export default function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
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
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Active Projects
                </p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <FolderKanban className="h-8 w-8 text-muted-foreground" />
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Team Members
                </p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <Users className="h-8 w-8 text-muted-foreground" />
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Tasks Completed
                </p>
                <p className="text-2xl font-bold">47</p>
              </div>
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Overdue Tasks
                </p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
          </div>
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Recent Projects */}
          <div className="rounded-lg border bg-card">
            <div className="p-6 pb-4">
              <h3 className="text-lg font-semibold">Recent Projects</h3>
            </div>
            <div className="space-y-4 p-6 pt-0">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Website Redesign</p>
                  <p className="text-xs text-muted-foreground">Due in 5 days</p>
                </div>
                <Badge variant="secondary">In Progress</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Mobile App Launch</p>
                  <p className="text-xs text-muted-foreground">
                    Due in 12 days
                  </p>
                </div>
                <Badge variant="outline">Planning</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">API Integration</p>
                  <p className="text-xs text-muted-foreground">Due in 2 days</p>
                </div>
                <Badge variant="destructive">Urgent</Badge>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-lg border bg-card">
            <div className="p-6 pb-4">
              <h3 className="text-lg font-semibold">Quick Actions</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 p-6 pt-0">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <FolderKanban className="h-6 w-6" />
                <span className="text-sm">New Project</span>
              </Button>

              <Button variant="outline" className="h-20 flex-col gap-2">
                <Users className="h-6 w-6" />
                <span className="text-sm">Invite Team</span>
              </Button>

              <Button variant="outline" className="h-20 flex-col gap-2">
                <Calendar className="h-6 w-6" />
                <span className="text-sm">Schedule Meeting</span>
              </Button>

              <Button variant="outline" className="h-20 flex-col gap-2">
                <TrendingUp className="h-6 w-6" />
                <span className="text-sm">View Reports</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
