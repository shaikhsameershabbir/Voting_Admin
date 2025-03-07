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

interface Assembly {
    id: number
    name: string
    state: string
    district: string
    constituency: string
    year: number
}

interface VerticalAssemblyTableProps {
    data: Assembly[]
}

export function VerticalAssemblyTable({ data }: VerticalAssemblyTableProps) {
    const [currentPage, setCurrentPage] = useState(1)
    const [viewAssembly, setViewAssembly] = useState<Assembly | null>(null)
    const [editAssembly, setEditAssembly] = useState<Assembly | null>(null)
    const [deleteAssembly, setDeleteAssembly] = useState<Assembly | null>(null)

    const itemsPerPage = 3
    const totalPages = Math.ceil(data.length / itemsPerPage)

    const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    return (
        <div className="space-y-4 h-full">
            <div className="grid gap-4 md:grid-cols-1 h-[calc(100vh-300px)] overflow-y-auto">
                {paginatedData.map((assembly) => (
                    <Card key={assembly.id} className="overflow-hidden">
                        <CardHeader className="bg-muted/50 pb-2">
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-lg">{assembly.name}</CardTitle>
                                <div className="flex space-x-2">
                                    <Button variant="ghost" size="icon" onClick={() => setViewAssembly(assembly)}>
                                        <Eye className="h-4 w-4" />
                                        <span className="sr-only">View</span>
                                    </Button>
                                    <Button variant="ghost" size="icon" onClick={() => setEditAssembly(assembly)}>
                                        <Pencil className="h-4 w-4" />
                                        <span className="sr-only">Edit</span>
                                    </Button>
                                    <Button variant="ghost" size="icon" onClick={() => setDeleteAssembly(assembly)}>
                                        <Trash2 className="h-4 w-4" />
                                        <span className="sr-only">Delete</span>
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <div className="grid grid-cols-1 gap-2">
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-muted-foreground">State:</span>
                                    <span>{assembly.state}</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-muted-foreground">District:</span>
                                    <span>{assembly.district}</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-muted-foreground">Constituency:</span>
                                    <span>{assembly.constituency}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium text-muted-foreground">Year:</span>
                                    <Badge variant="outline">{assembly.year}</Badge>
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

            {/* View Assembly Dialog */}
            <Dialog open={!!viewAssembly} onOpenChange={() => setViewAssembly(null)}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Assembly Details</DialogTitle>
                        <DialogDescription>Detailed information about the assembly.</DialogDescription>
                    </DialogHeader>
                    {viewAssembly && (
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right font-medium">Name:</Label>
                                <div className="col-span-3">{viewAssembly.name}</div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right font-medium">State:</Label>
                                <div className="col-span-3">{viewAssembly.state}</div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right font-medium">District:</Label>
                                <div className="col-span-3">{viewAssembly.district}</div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right font-medium">Constituency:</Label>
                                <div className="col-span-3">{viewAssembly.constituency}</div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right font-medium">Year:</Label>
                                <div className="col-span-3">{viewAssembly.year}</div>
                            </div>
                        </div>
                    )}
                    <DialogFooter>
                        <Button onClick={() => setViewAssembly(null)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Edit Assembly Dialog */}
            <Dialog open={!!editAssembly} onOpenChange={() => setEditAssembly(null)}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Assembly</DialogTitle>
                        <DialogDescription>Make changes to the assembly details.</DialogDescription>
                    </DialogHeader>
                    {editAssembly && (
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-name" className="text-right">
                                    Name
                                </Label>
                                <Input id="edit-name" className="col-span-3" defaultValue={editAssembly.name} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-state" className="text-right">
                                    State
                                </Label>
                                <Input id="edit-state" className="col-span-3" defaultValue={editAssembly.state} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-district" className="text-right">
                                    District
                                </Label>
                                <Input id="edit-district" className="col-span-3" defaultValue={editAssembly.district} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-constituency" className="text-right">
                                    Constituency
                                </Label>
                                <Input id="edit-constituency" className="col-span-3" defaultValue={editAssembly.constituency} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-year" className="text-right">
                                    Year
                                </Label>
                                <Input id="edit-year" type="number" className="col-span-3" defaultValue={editAssembly.year} />
                            </div>
                        </div>
                    )}
                    <DialogFooter>
                        <Button type="submit">Save Changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Assembly Confirmation */}
            <AlertDialog open={!!deleteAssembly} onOpenChange={() => setDeleteAssembly(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the assembly
                            {deleteAssembly && <strong> "{deleteAssembly.name}"</strong>} and remove its data from the server.
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

