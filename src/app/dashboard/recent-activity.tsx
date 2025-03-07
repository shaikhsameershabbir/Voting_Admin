import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
    {
        id: 1,
        user: { name: "John Doe", avatar: "J" },
        action: "completed a purchase",
        amount: "$250.00",
        time: "2 minutes ago",
    },
    {
        id: 2,
        user: { name: "Jane Smith", avatar: "J" },
        action: "subscribed to Premium plan",
        amount: "$19.99/mo",
        time: "1 hour ago",
    },
    {
        id: 3,
        user: { name: "Robert Johnson", avatar: "R" },
        action: "requested a refund",
        amount: "$75.00",
        time: "3 hours ago",
    },
    {
        id: 4,
        user: { name: "Emily Davis", avatar: "E" },
        action: "completed a purchase",
        amount: "$120.50",
        time: "5 hours ago",
    },
    {
        id: 5,
        user: { name: "Michael Wilson", avatar: "M" },
        action: "upgraded to Business plan",
        amount: "$49.99/mo",
        time: "1 day ago",
    },
]

export function RecentActivityList() {
    return (
        <div className="space-y-4">
            {activities.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                    <Avatar className="h-9 w-9">
                        <AvatarImage
                            src={`/placeholder.svg?height=36&width=36&text=${activity.user.avatar}`}
                            alt={activity.user.name}
                        />
                        <AvatarFallback>{activity.user.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">
                            <span className="font-semibold">{activity.user.name}</span> {activity.action}
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <div className="text-sm font-medium">{activity.amount}</div>
                </div>
            ))}
        </div>
    )
}

