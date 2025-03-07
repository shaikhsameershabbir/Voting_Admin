import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

interface StatCardProps {
    title: string
    value: string
    change: string
    trend?: "up" | "down" | "neutral"
    timeframe?: string
    icon: React.ReactNode
}

export function StatCard({
    title,
    value,
    change,
    trend = "neutral",
    timeframe = "from last month",
    icon,
}: StatCardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <div className="flex items-center text-xs">
                    {trend === "up" && <TrendingUp className="mr-1 h-3 w-3 text-green-500" />}
                    {trend === "down" && <TrendingDown className="mr-1 h-3 w-3 text-red-500" />}
                    <span
                        className={trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-muted-foreground"}
                    >
                        {change}
                    </span>
                    <span className="ml-1 text-muted-foreground">{timeframe}</span>
                </div>
            </CardContent>
        </Card>
    )
}

