import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe,
  CreditCard,
  Users,
  Settings as SettingsIcon
} from "lucide-react"

export default function Settings() {
  return (
    <DashboardLayout title="Settings">
      <div className="space-y-6">
        {/* Profile Section */}
        <div className="rounded-lg border bg-card">
          <div className="p-6 pb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Settings
            </h3>
          </div>
          <div className="p-6 pt-0">
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
                  <Button size="sm" variant="outline">Edit Profile</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Categories */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Notifications */}
          <div className="rounded-lg border bg-card">
            <div className="p-6 pb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </h3>
            </div>
            <div className="space-y-4 p-6 pt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Email Notifications</p>
                  <p className="text-xs text-muted-foreground">Receive updates via email</p>
                </div>
                <Badge variant="secondary">Enabled</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Push Notifications</p>
                  <p className="text-xs text-muted-foreground">Browser notifications</p>
                </div>
                <Badge variant="outline">Disabled</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Task Reminders</p>
                  <p className="text-xs text-muted-foreground">Deadline reminders</p>
                </div>
                <Badge variant="secondary">Enabled</Badge>
              </div>
              
              <Button size="sm" className="w-full">
                Configure Notifications
              </Button>
            </div>
          </div>

          {/* Security */}
          <div className="rounded-lg border bg-card">
            <div className="p-6 pb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security
              </h3>
            </div>
            <div className="space-y-4 p-6 pt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Two-Factor Authentication</p>
                  <p className="text-xs text-muted-foreground">Extra security for your account</p>
                </div>
                <Badge variant="destructive">Disabled</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Password</p>
                  <p className="text-xs text-muted-foreground">Last changed 3 months ago</p>
                </div>
                <Button size="sm" variant="outline">Change</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Active Sessions</p>
                  <p className="text-xs text-muted-foreground">2 active sessions</p>
                </div>
                <Button size="sm" variant="outline">Manage</Button>
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div className="rounded-lg border bg-card">
            <div className="p-6 pb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Appearance
              </h3>
            </div>
            <div className="space-y-4 p-6 pt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Theme</p>
                  <p className="text-xs text-muted-foreground">Choose your preferred theme</p>
                </div>
                <Badge variant="secondary">System</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Language</p>
                  <p className="text-xs text-muted-foreground">Interface language</p>
                </div>
                <Badge variant="outline">English</Badge>
              </div>
              
              <Button size="sm" className="w-full">
                Customize Appearance
              </Button>
            </div>
          </div>

          {/* Team & Billing */}
          <div className="rounded-lg border bg-card">
            <div className="p-6 pb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Team & Billing
              </h3>
            </div>
            <div className="space-y-4 p-6 pt-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Current Plan</p>
                  <p className="text-xs text-muted-foreground">Professional Plan</p>
                </div>
                <Badge variant="secondary">Active</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Team Members</p>
                  <p className="text-xs text-muted-foreground">8 of 10 seats used</p>
                </div>
                <Button size="sm" variant="outline">Manage</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Billing</p>
                  <p className="text-xs text-muted-foreground">Next payment: Jan 15, 2025</p>
                </div>
                <Button size="sm" variant="outline">View</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Settings */}
        <div className="rounded-lg border bg-card">
          <div className="p-6 pb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <SettingsIcon className="h-5 w-5" />
              Advanced Settings
            </h3>
          </div>
          <div className="p-6 pt-0">
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
          </div>
        </div>

        {/* Save Changes */}
        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
