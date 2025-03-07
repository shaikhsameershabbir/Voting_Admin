"use client"

import { Home, LayoutDashboard, Settings, Users, FileText, Bell, LogOut, BarChart3, UserCircle } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/context/auth-context"

export function DashboardSidebar() {
    const pathname = usePathname()
    const router = useRouter()
    const { logout, user } = useAuth()

    // Navigation items with path and active state
    const navItems = [
        { path: "/dashboard", label: "Dashboard", icon: Home },
        { path: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
        { path: "/dashboard/customers", label: "Customers", icon: UserCircle },
        { path: "/assembly", label: "Assembly", icon: Users },
        { path: "/dashboard/reports", label: "Reports", icon: FileText },
        { path: "/dashboard/notifications", label: "Notifications", icon: Bell },
        { path: "/dashboard/settings", label: "Settings", icon: Settings },
    ]

    return (
        <Sidebar aria-label="Dashboard Navigation">
            <SidebarHeader className="py-4">
                <div className="flex items-center px-2">
                    <div className="flex items-center gap-2">
                        <LayoutDashboard className="h-6 w-6" />
                        <span className="text-lg font-bold">Admin Panel</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarSeparator />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu aria-label="Main Menu">
                            {navItems.map((item) => (
                                <SidebarMenuItem key={item.path}>
                                    <SidebarMenuButton
                                        isActive={pathname === item.path}
                                        tooltip={item.label}
                                        onClick={() => router.push(item.path)}
                                    >
                                        <item.icon />
                                        <span>{item.label}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarSeparator />
            <SidebarFooter>
                <SidebarMenu aria-label="User Menu">
                    <SidebarMenuItem>
                        <SidebarMenuButton className="flex items-center gap-3">
                            <Avatar className="h-6 w-6">
                                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                                <AvatarFallback>A</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col items-start">
                                <span className="text-sm font-medium">{user?.name || "User"}</span>
                                <span className="text-xs text-muted-foreground">{user?.email || "user@example.com"}</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={logout}>
                            <LogOut />
                            <span>Log Out</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

