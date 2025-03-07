"use client"

import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, CreditCard, DollarSign, Users, AlertCircle } from "lucide-react"
import { BarChart } from "@/app/dashboard/bar-chart"
import { LineChart } from "@/app/dashboard/line-chart"
import { RecentActivityList } from "@/app/dashboard/recent-activity"
import { StatCard } from "@/app/dashboard/stat-card"

export default function Dashboard() {
    // Check if user is authenticated
    useEffect(() => {
        // Check for auth cookie
        const isAuthenticated = document.cookie.split(";").some((item) => item.trim().startsWith("auth="))

        if (!isAuthenticated) {
            window.location.href = "/"
        }
    }, [])

    return (
        <div className="w-full space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
                <p className="text-muted-foreground">Welcome to your dashboard! Here's an overview of your key metrics.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Total Revenue"
                    value="$45,231.89"
                    change="+20.1%"
                    trend="up"
                    icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
                />
                <StatCard
                    title="Subscriptions"
                    value="+2,350"
                    change="+180.1%"
                    trend="up"
                    icon={<Users className="h-4 w-4 text-muted-foreground" />}
                />
                <StatCard
                    title="Sales"
                    value="+12,234"
                    change="+19%"
                    trend="up"
                    icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
                />
                <StatCard
                    title="Active Now"
                    value="+573"
                    change="+201"
                    timeframe="since last hour"
                    icon={<Activity className="h-4 w-4 text-muted-foreground" />}
                />
            </div>

            {/* Charts */}
            <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Revenue Overview</CardTitle>
                        <CardDescription>Monthly revenue for the current year</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <BarChart />
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>User Growth</CardTitle>
                        <CardDescription>New user acquisition trend</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <LineChart />
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity and Alerts */}
            <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Your recent activity and performance metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RecentActivityList />
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>System Alerts</CardTitle>
                        <CardDescription>Important notifications and alerts</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 rounded-md border p-4">
                                <AlertCircle className="mt-0.5 h-5 w-5 text-amber-500" />
                                <div>
                                    <p className="font-medium">System Maintenance</p>
                                    <p className="text-sm text-muted-foreground">
                                        Scheduled maintenance on March 15, 2025 from 2-4 AM UTC
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 rounded-md border p-4">
                                <AlertCircle className="mt-0.5 h-5 w-5 text-red-500" />
                                <div>
                                    <p className="font-medium">Security Update Required</p>
                                    <p className="text-sm text-muted-foreground">Please update your password within the next 7 days</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 rounded-md border p-4">
                                <AlertCircle className="mt-0.5 h-5 w-5 text-green-500" />
                                <div>
                                    <p className="font-medium">New Feature Available</p>
                                    <p className="text-sm text-muted-foreground">
                                        Check out our new reporting tools in the analytics section
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

