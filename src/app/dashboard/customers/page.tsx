"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download, Plus } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

// Sample customer data
const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", spent: "$1,245.89", lastOrder: "2025-03-01" },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        status: "Active",
        spent: "$3,432.11",
        lastOrder: "2025-03-03",
    },
    {
        id: 3,
        name: "Robert Johnson",
        email: "robert@example.com",
        status: "Inactive",
        spent: "$645.20",
        lastOrder: "2025-02-15",
    },
    {
        id: 4,
        name: "Emily Davis",
        email: "emily@example.com",
        status: "Active",
        spent: "$2,764.50",
        lastOrder: "2025-03-05",
    },
    {
        id: 5,
        name: "Michael Wilson",
        email: "michael@example.com",
        status: "Active",
        spent: "$1,876.32",
        lastOrder: "2025-03-02",
    },
    {
        id: 6,
        name: "Sarah Brown",
        email: "sarah@example.com",
        status: "Pending",
        spent: "$432.10",
        lastOrder: "2025-03-04",
    },
    {
        id: 7,
        name: "David Miller",
        email: "david@example.com",
        status: "Active",
        spent: "$3,587.99",
        lastOrder: "2025-02-28",
    },
    {
        id: 8,
        name: "Lisa Anderson",
        email: "lisa@example.com",
        status: "Inactive",
        spent: "$876.45",
        lastOrder: "2025-02-10",
    },
    {
        id: 9,
        name: "James Taylor",
        email: "james@example.com",
        status: "Active",
        spent: "$1,543.67",
        lastOrder: "2025-03-06",
    },
    {
        id: 10,
        name: "Jennifer Thomas",
        email: "jennifer@example.com",
        status: "Pending",
        spent: "$965.23",
        lastOrder: "2025-03-01",
    },
]

export default function CustomersPage() {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")

    const itemsPerPage = 5
    const filteredCustomers = customers.filter(
        (customer) =>
            customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            customer.email.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage)

    const paginatedCustomers = filteredCustomers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    return (
        <div className="w-full space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
                <p className="text-muted-foreground">Manage your customer relationships and view customer data.</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input
                        placeholder="Search customers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full"
                    />
                    <Button type="submit" size="icon" variant="ghost">
                        <Search className="h-4 w-4" />
                    </Button>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                    <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                    </Button>
                    <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                    </Button>
                    <Button size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Customer
                    </Button>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Customer List</CardTitle>
                    <CardDescription>View and manage all your customers in one place.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Total Spent</TableHead>
                                <TableHead>Last Order</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paginatedCustomers.map((customer) => (
                                <TableRow key={customer.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-9 w-9">
                                                <AvatarImage
                                                    src={`/placeholder.svg?height=36&width=36&text=${customer.name.charAt(0)}`}
                                                    alt={customer.name}
                                                />
                                                <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium">{customer.name}</p>
                                                <p className="text-sm text-muted-foreground">{customer.email}</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                customer.status === "Active"
                                                    ? "default"
                                                    : customer.status === "Inactive"
                                                        ? "secondary"
                                                        : "outline"
                                            }
                                        >
                                            {customer.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{customer.spent}</TableCell>
                                    <TableCell>{new Date(customer.lastOrder).toLocaleDateString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                                />
                            </PaginationItem>

                            {Array.from({ length: totalPages }).map((_, index) => (
                                <PaginationItem key={index}>
                                    <PaginationLink onClick={() => setCurrentPage(index + 1)} isActive={currentPage === index + 1}>
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}

                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </CardFooter>
            </Card>
        </div>
    )
}

