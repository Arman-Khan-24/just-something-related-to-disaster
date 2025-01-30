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
import { useState } from "react";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const menuItems = [
    { icon: Home, label: "Overview", id: "overview" },
    { icon: Bell, label: "Real-time Alerts", id: "alerts" },
    { icon: Map, label: "Interactive Map", id: "map" },
    { icon: MessageSquare, label: "Communication", id: "communication" },
    { icon: Shield, label: "Resources", id: "resources" },
    { icon: BookOpen, label: "Education", id: "education" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-morphism p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-gray-400 font-medium mb-2">Server Count</h3>
                <p className="text-3xl font-bold text-white">1</p>
              </div>
              <div className="glass-morphism p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-gray-400 font-medium mb-2">User Count</h3>
                <p className="text-3xl font-bold text-white">11</p>
              </div>
              <div className="glass-morphism p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-gray-400 font-medium mb-2">API Latency</h3>
                <p className="text-3xl font-bold text-white">224ms</p>
              </div>
              <div className="glass-morphism p-6 rounded-xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-gray-400 font-medium mb-2">Uptime</h3>
                <p className="text-3xl font-bold text-green-400">99.9%</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="glass-morphism p-8 rounded-xl lg:col-span-1 transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-xl font-semibold mb-6 text-white">System Details</h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 mb-2">Username</p>
                    <p className="text-white text-lg">DisasterGuards#9601</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2">Client ID</p>
                    <p className="text-white text-lg">819497490729272319</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2">Joined</p>
                    <p className="text-white text-lg">March 11th, 2024</p>
                  </div>
                </div>
              </div>

              <div className="glass-morphism p-8 rounded-xl lg:col-span-2">
                <h2 className="text-xl font-semibold mb-6 text-white">Recent Updates</h2>
                <div className="space-y-6">
                  <div className="p-5 bg-[#102343]/30 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                    <p className="text-sm text-gray-400 mb-2">2 hours ago</p>
                    <p className="text-white text-lg">Weather alert: Heavy rainfall expected in the next 24 hours</p>
                  </div>
                  <div className="p-5 bg-[#102343]/30 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                    <p className="text-sm text-gray-400 mb-2">5 hours ago</p>
                    <p className="text-white text-lg">Resource update: Emergency supplies restocked</p>
                  </div>
                  <div className="p-5 bg-[#102343]/30 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                    <p className="text-sm text-gray-400 mb-2">1 day ago</p>
                    <p className="text-white text-lg">System update: Added new authentication features</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "alerts":
        return (
          <div className="space-y-6">
            <div className="glass-morphism p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4 text-white">Active Alerts</h2>
              <div className="space-y-4">
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="text-red-400 font-medium">Severe Weather Warning</h3>
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-sm">High Priority</span>
                  </div>
                  <p className="mt-2 text-gray-300">Heavy rainfall and strong winds expected in coastal areas</p>
                  <p className="mt-1 text-sm text-gray-400">Issued: 2 hours ago</p>
                </div>
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="text-yellow-400 font-medium">Flood Watch</h3>
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-sm">Medium Priority</span>
                  </div>
                  <p className="mt-2 text-gray-300">Potential flooding in low-lying areas</p>
                  <p className="mt-1 text-sm text-gray-400">Issued: 4 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        );

      case "map":
        return (
          <div className="glass-morphism p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4 text-white">Interactive Map</h2>
            <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Map integration coming soon</p>
            </div>
          </div>
        );

      case "communication":
        return (
          <div className="space-y-6">
            <div className="glass-morphism p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4 text-white">Communication Center</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-3">Emergency Contacts</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 bg-white/5 rounded">
                      <div className="h-8 w-8 bg-blue-500/20 text-blue-400 rounded flex items-center justify-center">
                        <Shield className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-white">Emergency Response</p>
                        <p className="text-sm text-gray-400">+1 (555) 000-0000</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-white/5 rounded">
                      <div className="h-8 w-8 bg-green-500/20 text-green-400 rounded flex items-center justify-center">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-white">Support Center</p>
                        <p className="text-sm text-gray-400">support@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-3">Recent Messages</h3>
                  <div className="space-y-3">
                    <div className="p-2 bg-white/5 rounded">
                      <p className="text-sm text-gray-400">Team Alpha</p>
                      <p className="text-white">Status update required for Zone 3</p>
                    </div>
                    <div className="p-2 bg-white/5 rounded">
                      <p className="text-sm text-gray-400">Command Center</p>
                      <p className="text-white">New protocol guidelines available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "resources":
        return (
          <div className="space-y-6">
            <div className="glass-morphism p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4 text-white">Available Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">Emergency Supplies</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">First Aid Kits</span>
                      <span className="text-green-400">45 units</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Water Supplies</span>
                      <span className="text-yellow-400">28 units</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Emergency Food</span>
                      <span className="text-green-400">100 units</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">Equipment</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Generators</span>
                      <span className="text-green-400">12 units</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Vehicles</span>
                      <span className="text-green-400">8 units</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Communication Devices</span>
                      <span className="text-yellow-400">15 units</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">Personnel</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Emergency Response</span>
                      <span className="text-green-400">24 active</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Medical Staff</span>
                      <span className="text-yellow-400">12 active</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Volunteers</span>
                      <span className="text-green-400">45 active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "education":
        return (
          <div className="space-y-6">
            <div className="glass-morphism p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4 text-white">Educational Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="h-40 bg-blue-500/10 rounded-lg mb-4 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Emergency Preparedness</h3>
                  <p className="text-gray-400 text-sm">Learn the basics of preparing for various types of emergencies</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="h-40 bg-green-500/10 rounded-lg mb-4 flex items-center justify-center">
                    <Shield className="h-12 w-12 text-green-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Safety Protocols</h3>
                  <p className="text-gray-400 text-sm">Comprehensive guide to safety procedures and protocols</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="h-40 bg-purple-500/10 rounded-lg mb-4 flex items-center justify-center">
                    <MessageSquare className="h-12 w-12 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Communication Guidelines</h3>
                  <p className="text-gray-400 text-sm">Learn effective communication during emergency situations</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#121828]">
        <Sidebar className="border-r border-[#102343]/30">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-base text-white/90">Disaster Guards</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        asChild
                        isActive={activeSection === item.id}
                        onClick={() => setActiveSection(item.id)}
                      >
                        <button className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg transition-colors duration-200 hover:bg-[#102343]/50">
                          <item.icon className="h-5 w-5" />
                          <span className="text-sm">{item.label}</span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 p-8 overflow-auto">
          <div className="mb-8 max-w-[2000px] mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">Welcome, Admin</h1>
                <p className="text-gray-400">Here's what's happening with Disaster Guards today.</p>
              </div>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 bg-[#102343]/30 border-[#102343] text-white hover:bg-[#102343]/50"
              >
                <RefreshCcw className="h-4 w-4" />
                Refresh Data
              </Button>
            </div>
            {renderContent()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
