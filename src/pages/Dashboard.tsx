import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Bell, Home, Map, MessageSquare, Shield, BookOpen, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const menuItems = [
    { icon: Home, label: "Overview", path: "#" },
    { icon: Bell, label: "Real-time Alerts", path: "#" },
    { icon: Map, label: "Interactive Map", path: "#" },
    { icon: MessageSquare, label: "Communication", path: "#" },
    { icon: Shield, label: "Resources", path: "#" },
    { icon: BookOpen, label: "Education", path: "#" },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gradient-to-br from-[#1a1f2c] via-[#2a2f3f] to-[#1a1f2c]">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-base">Disaster Guards</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton asChild>
                        <a href={item.path} className="flex items-center gap-2">
                          <item.icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">Welcome, Admin</h1>
                <p className="text-gray-400">Here's what's happening with Disaster Guards today.</p>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <RefreshCcw className="h-4 w-4" />
                Refresh Data
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="glass-morphism p-6 rounded-xl">
              <h3 className="text-gray-400 font-medium mb-2">Server Count</h3>
              <p className="text-3xl font-bold text-white">1</p>
            </div>
            <div className="glass-morphism p-6 rounded-xl">
              <h3 className="text-gray-400 font-medium mb-2">User Count</h3>
              <p className="text-3xl font-bold text-white">11</p>
            </div>
            <div className="glass-morphism p-6 rounded-xl">
              <h3 className="text-gray-400 font-medium mb-2">API Latency</h3>
              <p className="text-3xl font-bold text-white">224ms</p>
            </div>
            <div className="glass-morphism p-6 rounded-xl">
              <h3 className="text-gray-400 font-medium mb-2">Uptime</h3>
              <p className="text-3xl font-bold text-green-400">99.9%</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="glass-morphism p-6 rounded-xl lg:col-span-1">
              <h2 className="text-xl font-semibold mb-4 text-white">System Details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 mb-1">Username</p>
                  <p className="text-white">DisasterGuards#9601</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Client ID</p>
                  <p className="text-white">819497490729272319</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Joined</p>
                  <p className="text-white">March 11th, 2024</p>
                </div>
              </div>
            </div>

            <div className="glass-morphism p-6 rounded-xl lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4 text-white">Recent Updates</h2>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <p className="text-sm text-gray-400">2 hours ago</p>
                  <p className="mt-1 text-white">Weather alert: Heavy rainfall expected in the next 24 hours</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <p className="text-sm text-gray-400">5 hours ago</p>
                  <p className="mt-1 text-white">Resource update: Emergency supplies restocked</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <p className="text-sm text-gray-400">1 day ago</p>
                  <p className="mt-1 text-white">System update: Added new authentication features</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
