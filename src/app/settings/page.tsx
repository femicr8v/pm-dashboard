import {
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  CreditCard,
  Users,
  Settings as SettingsIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionCard } from "@/components/section-card";
import { SettingRow } from "@/components/setting-row";

export default function Settings() {
  return (
    <div className="space-y-6">
      {/* Profile Section */}
      <SectionCard title="Profile Settings" icon={<User className="h-5 w-5" />}>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/avatars/user.jpg" alt="User" />
            <AvatarFallback>PM</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <div>
              <h4 className="text-sm font-medium">Project Manager</h4>
              <p className="text-sm text-muted-foreground">pm@company.com</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm">Change Avatar</Button>
              <Button size="sm" variant="outline">
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Settings Categories */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Notifications */}
        <SectionCard title="Notifications" icon={<Bell className="h-5 w-5" />} bodyClassName="pt-0">
          <div className="space-y-4">
            <SettingRow
              title="Email Notifications"
              description="Receive updates via email"
              right={<Badge variant="secondary">Enabled</Badge>}
            />
            <SettingRow
              title="Push Notifications"
              description="Browser notifications"
              right={<Badge variant="outline">Disabled</Badge>}
            />
            <SettingRow
              title="Task Reminders"
              description="Deadline reminders"
              right={<Badge variant="secondary">Enabled</Badge>}
            />
            <Button size="sm" className="w-full">
              Configure Notifications
            </Button>
          </div>
        </SectionCard>

        {/* Security */}
        <SectionCard title="Security" icon={<Shield className="h-5 w-5" />} bodyClassName="pt-0">
          <div className="space-y-4">
            <SettingRow
              title="Two-Factor Authentication"
              description="Extra security for your account"
              right={<Badge variant="destructive">Disabled</Badge>}
            />
            <SettingRow
              title="Password"
              description="Last changed 3 months ago"
              right={<Button size="sm" variant="outline">Change</Button>}
            />
            <SettingRow
              title="Active Sessions"
              description="2 active sessions"
              right={<Button size="sm" variant="outline">Manage</Button>}
            />
          </div>
        </SectionCard>

        {/* Appearance */}
        <SectionCard title="Appearance" icon={<Palette className="h-5 w-5" />} bodyClassName="pt-0">
          <div className="space-y-4">
            <SettingRow
              title="Theme"
              description="Choose your preferred theme"
              right={<Badge variant="secondary">System</Badge>}
            />
            <SettingRow
              title="Language"
              description="Interface language"
              right={<Badge variant="outline">English</Badge>}
            />
            <Button size="sm" className="w-full">
              Customize Appearance
            </Button>
          </div>
        </SectionCard>

        {/* Team & Billing */}
        <SectionCard title="Team & Billing" icon={<CreditCard className="h-5 w-5" />} bodyClassName="pt-0">
          <div className="space-y-4">
            <SettingRow
              title="Current Plan"
              description="Professional Plan"
              right={<Badge variant="secondary">Active</Badge>}
            />
            <SettingRow
              title="Team Members"
              description="8 of 10 seats used"
              right={<Button size="sm" variant="outline">Manage</Button>}
            />
            <SettingRow
              title="Billing"
              description="Next payment: Jan 15, 2025"
              right={<Button size="sm" variant="outline">View</Button>}
            />
          </div>
        </SectionCard>
      </div>

      {/* Advanced Settings */}
      <SectionCard title="Advanced Settings" icon={<SettingsIcon className="h-5 w-5" />} bodyClassName="pt-0">
        <div className="grid gap-4 md:grid-cols-3">
          <Button variant="outline" className="h-16 flex-col gap-2">
            <Globe className="h-5 w-5" />
            <span className="text-sm">API Keys</span>
          </Button>

          <Button variant="outline" className="h-16 flex-col gap-2">
            <Users className="h-5 w-5" />
            <span className="text-sm">Integrations</span>
          </Button>

          <Button variant="outline" className="h-16 flex-col gap-2">
            <Shield className="h-5 w-5" />
            <span className="text-sm">Data Export</span>
          </Button>
        </div>
      </SectionCard>

      {/* Save Changes */}
      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
