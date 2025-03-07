"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AreaChart } from "@/app/dashboard/area-chart"
import { PieChart } from "@/app/dashboard/pie-chart"
import { DataTable } from "@/app/dashboard/data-table"

export default function AnalyticsPage() {
    return (
        <div className="w-full space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
                <p className="text-muted-foreground">Detailed analytics and performance metrics for your business.</p>
            </div>

            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="traffic">Traffic</TabsTrigger>
                    <TabsTrigger value="conversion">Conversion</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4 pt-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle>Total Visitors</CardTitle>
                                <CardDescription>Monthly visitor count</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">124,892</div>
                                <p className="text-xs text-muted-foreground">+12.3% from last month</p>
                                <div className="mt-4 h-[200px]">
                                    <AreaChart />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle>Bounce Rate</CardTitle>
                                <CardDescription>Average bounce rate</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">42.8%</div>
                                <p className="text-xs text-muted-foreground">-3.4% from last month</p>
                                <div className="mt-4 h-[200px]">
                                    <AreaChart />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle>Average Session</CardTitle>
                                <CardDescription>Time spent per session</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">3m 42s</div>
                                <p className="text-xs text-muted-foreground">+0.6% from last month</p>
                                <div className="mt-4 h-[200px]">
                                    <AreaChart />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <Card className="col-span-1">
                            <CardHeader>
                                <CardTitle>Traffic Sources</CardTitle>
                                <CardDescription>Where your visitors are coming from</CardDescription>
                            </CardHeader>
                            <CardContent className="h-[300px]">
                                <PieChart />
                            </CardContent>
                        </Card>

                        <Card className="col-span-1">
                            <CardHeader>
                                <CardTitle>Top Pages</CardTitle>
                                <CardDescription>Most visited pages on your site</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <DataTable />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="traffic" className="space-y-4 pt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Traffic Analysis</CardTitle>
                            <CardDescription>Detailed breakdown of your site traffic</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[400px]">
                                <AreaChart />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="conversion" className="space-y-4 pt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Conversion Rates</CardTitle>
                            <CardDescription>Conversion metrics and funnel analysis</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[400px]">
                                <AreaChart />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

