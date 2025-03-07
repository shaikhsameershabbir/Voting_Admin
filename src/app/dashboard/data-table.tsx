import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const data = [
    { page: "/home", visits: 4320, percentage: "32%" },
    { page: "/products", visits: 2800, percentage: "21%" },
    { page: "/blog", visits: 1950, percentage: "15%" },
    { page: "/about", visits: 1600, percentage: "12%" },
    { page: "/contact", visits: 980, percentage: "7%" },
]

export function DataTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Page</TableHead>
                    <TableHead className="text-right">Visits</TableHead>
                    <TableHead className="text-right">%</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.page}>
                        <TableCell className="font-medium">{item.page}</TableCell>
                        <TableCell className="text-right">{item.visits.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{item.percentage}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

