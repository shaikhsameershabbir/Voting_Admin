"use client"

import type React from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"
import { useAuth } from "@/context/auth-context"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { user, isLoading, logout } = useAuth()
    const router = useRouter()

    // Check if user is authenticated
    useEffect(() => {
        // Only redirect if we've finished loading and there's no user
        if (!isLoading && !user) {
            router.push("/")
        }
    }, [user, isLoading, router])

    // Show loading state while checking authentication
    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        )
    }

    // Don't render the dashboard if not authenticated
    if (!user) {
        return null
    }

    return (
        <SidebarProvider defaultOpen={true}>
            <div className="flex min-h-screen w-full">
                <DashboardSidebar />
                <SidebarInset className="flex w-full flex-col">
                    <header className="sticky top-0 z-10 flex h-14 w-full items-center gap-4 border-b bg-background px-4 sm:px-6">
                        <SidebarTrigger />
                        <div className="ml-auto flex items-center gap-2">
                            {/* <Button variant="ghost" size="icon" className="rounded-full">
                                <Bell className="h-5 w-5" />
                                <span className="sr-only">Notifications</span>
                            </Button> */}
                            <Avatar>
                                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                                <AvatarFallback>A</AvatarFallback>
                            </Avatar>
                        </div>
                    </header>
                    <main className="flex-1 w-full p-4 md:p-6">{children}</main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    )
}

