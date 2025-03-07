"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import { Eye, Pencil, Trash2 } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

interface Election {
    id: number
    name: string
    type: string
    date: string
    state: string
    status: string
}

interface VerticalElectionTableProps {
    data: Election[]
}

export function VerticalElectionTable({ data }: VerticalElectionTableProps) {
    const [currentPage, setCurrentPage] = useState(1)
    const [viewElection, setViewElection] = useState<Election | null>(null)
    const [editElection, setEditElection] = useState<Election | null>(null)
    const [deleteElection, setDeleteElection] = useState<Election | null>(null)

    const itemsPerPage = 3
    const totalPages = Math.ceil(data.length / itemsPerPage)

    const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    const getStatusBadgeVariant = (status: string) => {
        switch (status) {
            case "Completed":
                return "default"
            case "Upcoming":
                return "secondary"
            case "Scheduled":
                return "outline"
            default:
                return "outline"
        }
    }

    return (
        <div className="space-y-4 h-full">
            <div className="grid gap-4 md:grid-cols-1 h-[calc(100vh-300px)] overflow-y-auto">
                {paginatedData.map((election) => (
                    <Card key={election.id} className="overflow-hidden">
                        <CardHeader className="bg-muted/50 pb-2">
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-lg">{election.name}</CardTitle>
                                <div className="flex space-x-2">
                                    <Button variant="ghost" size="icon" onClick={() => setViewElection(election)}>
                                        <Eye className="h-4 w-4" />
                                        <span className="sr-only">View</span>
                                    </Button>
                                    <Button variant="ghost" size="icon" onClick={() => setEditElection(election)}>
                                        <Pencil className="h-4 w-4" />
                                        <span className="sr-only">Edit</span>
                                    </Button>
                                    <Button variant="ghost" size="icon" onClick={() => setDeleteElection(election)}>
                                        <Trash2 className="h-4 w-4" />
                                        <span className="sr-only">Delete</span>
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <div className="grid grid-cols-1 gap-2">
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-muted-foreground">Type:</span>
                                    <span>{election.type}</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-muted-foreground">Date:</span>
                                    <span>{new Date(election.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-muted-foreground">State:</span>
                                    <span>{election.state}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium text-muted-foreground">Status:</span>
                                    <Badge variant={getStatusBadgeVariant(election.status)}>{election.status}</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

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

            {/* View Election Dialog */}
            <Dialog open={!!viewElection} onOpenChange={() => setViewElection(null)}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Election Details</DialogTitle>
                        <DialogDescription>Detailed information about the election.</DialogDescription>
                    </DialogHeader>
                    {viewElection && (
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right font-medium">Name:</Label>
                                <div className="col-span-3">{viewElection.name}</div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right font-medium">Type:</Label>
                                <div className="col-span-3">{viewElection.type}</div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right font-medium">Date:</Label>
                                <div className="col-span-3">{new Date(viewElection.date).toLocaleDateString()}</div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right font-medium">State:</Label>
                                <div className="col-span-3">{viewElection.state}</div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right font-medium">Status:</Label>
                                <div className="col-span-3">
                                    <Badge variant={getStatusBadgeVariant(viewElection.status)}>{viewElection.status}</Badge>
                                </div>
                            </div>
                        </div>
                    )}
                    <DialogFooter>
                        <Button onClick={() => setViewElection(null)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Edit Election Dialog */}
            <Dialog open={!!editElection} onOpenChange={() => setEditElection(null)}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Election</DialogTitle>
                        <DialogDescription>Make changes to the election details.</DialogDescription>
                    </DialogHeader>
                    {editElection && (
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-election-name" className="text-right">
                                    Name
                                </Label>
                                <Input id="edit-election-name" className="col-span-3" defaultValue={editElection.name} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-type" className="text-right">
                                    Type
                                </Label>
                                <Input id="edit-type" className="col-span-3" defaultValue={editElection.type} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-date" className="text-right">
                                    Date
                                </Label>
                                <Input id="edit-date" type="date" className="col-span-3" defaultValue={editElection.date} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-election-state" className="text-right">
                                    State
                                </Label>
                                <Input id="edit-election-state" className="col-span-3" defaultValue={editElection.state} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-status" className="text-right">
                                    Status
                                </Label>
                                <Input id="edit-status" className="col-span-3" defaultValue={editElection.status} />
                            </div>
                        </div>
                    )}
                    <DialogFooter>
                        <Button type="submit">Save Changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Election Confirmation */}
            <AlertDialog open={!!deleteElection} onOpenChange={() => setDeleteElection(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the election
                            {deleteElection && <strong> "{deleteElection.name}"</strong>} and remove its data from the server.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-destructive text-destructive-foreground">Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

