"use client"

import { useState } from "react"
import { VerticalAssemblyTable } from "@/components/vertical-assembly-table"
import { VerticalElectionTable } from "@/components/vertical-election-table"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Sample data for Assembly
const assemblyData = [
    { id: 1, name: "Assembly 1", state: "State A", district: "District 1", constituency: "Constituency A", year: 2022 },
    { id: 2, name: "Assembly 2", state: "State B", district: "District 2", constituency: "Constituency B", year: 2022 },
    { id: 3, name: "Assembly 3", state: "State C", district: "District 3", constituency: "Constituency C", year: 2021 },
    { id: 4, name: "Assembly 4", state: "State D", district: "District 4", constituency: "Constituency D", year: 2021 },
    { id: 5, name: "Assembly 5", state: "State E", district: "District 5", constituency: "Constituency E", year: 2020 },
    { id: 6, name: "Assembly 6", state: "State F", district: "District 6", constituency: "Constituency F", year: 2020 },
    { id: 7, name: "Assembly 7", state: "State G", district: "District 7", constituency: "Constituency G", year: 2019 },
    { id: 8, name: "Assembly 8", state: "State H", district: "District 8", constituency: "Constituency H", year: 2019 },
    { id: 9, name: "Assembly 9", state: "State I", district: "District 9", constituency: "Constituency I", year: 2018 },
    {
        id: 10,
        name: "Assembly 10",
        state: "State J",
        district: "District 10",
        constituency: "Constituency J",
        year: 2018,
    },
    {
        id: 11,
        name: "Assembly 11",
        state: "State K",
        district: "District 11",
        constituency: "Constituency K",
        year: 2017,
    },
    {
        id: 12,
        name: "Assembly 12",
        state: "State L",
        district: "District 12",
        constituency: "Constituency L",
        year: 2017,
    },
]

// Sample data for Election
const electionData = [
    { id: 1, name: "Election 1", type: "General", date: "2022-05-15", state: "State A", status: "Completed" },
    { id: 2, name: "Election 2", type: "By-election", date: "2022-06-20", state: "State B", status: "Completed" },
    { id: 3, name: "Election 3", type: "General", date: "2021-04-10", state: "State C", status: "Completed" },
    { id: 4, name: "Election 4", type: "Local", date: "2021-08-05", state: "State D", status: "Completed" },
    { id: 5, name: "Election 5", type: "General", date: "2020-03-12", state: "State E", status: "Completed" },
    { id: 6, name: "Election 6", type: "By-election", date: "2020-09-18", state: "State F", status: "Completed" },
    { id: 7, name: "Election 7", type: "General", date: "2023-11-25", state: "State G", status: "Upcoming" },
    { id: 8, name: "Election 8", type: "Local", date: "2023-12-10", state: "State H", status: "Upcoming" },
    { id: 9, name: "Election 9", type: "General", date: "2024-02-15", state: "State I", status: "Scheduled" },
    { id: 10, name: "Election 10", type: "By-election", date: "2024-03-20", state: "State J", status: "Scheduled" },
]

export default function AssemblyPage() {
    const [isAddAssemblyOpen, setIsAddAssemblyOpen] = useState(false)
    const [isAddElectionOpen, setIsAddElectionOpen] = useState(false)

    return (
        <div className="container mx-auto py-6 space-y-8">
            <h1 className="text-3xl font-bold">Assembly & Election Management</h1>

            {/* Main Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Assembly Section */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-semibold">Assembly Data</h2>
                        <Button onClick={() => setIsAddAssemblyOpen(true)}>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Assembly
                        </Button>
                    </div>
                    <VerticalAssemblyTable data={assemblyData} />
                </div>

                {/* Election Section */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-semibold">Election Data</h2>
                        <Button onClick={() => setIsAddElectionOpen(true)}>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Election
                        </Button>
                    </div>
                    <VerticalElectionTable data={electionData} />
                </div>
            </div>

            {/* Add Assembly Dialog */}
            <Dialog open={isAddAssemblyOpen} onOpenChange={setIsAddAssemblyOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Assembly</DialogTitle>
                        <DialogDescription>Enter the details for the new assembly.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="state" className="text-right">
                                State
                            </Label>
                            <Input id="state" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="district" className="text-right">
                                District
                            </Label>
                            <Input id="district" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="constituency" className="text-right">
                                Constituency
                            </Label>
                            <Input id="constituency" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="year" className="text-right">
                                Year
                            </Label>
                            <Input id="year" type="number" className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save Assembly</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Add Election Dialog */}
            <Dialog open={isAddElectionOpen} onOpenChange={setIsAddElectionOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Election</DialogTitle>
                        <DialogDescription>Enter the details for the new election.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="election-name" className="text-right">
                                Name
                            </Label>
                            <Input id="election-name" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="type" className="text-right">
                                Type
                            </Label>
                            <Input id="type" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="date" className="text-right">
                                Date
                            </Label>
                            <Input id="date" type="date" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="election-state" className="text-right">
                                State
                            </Label>
                            <Input id="election-state" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="status" className="text-right">
                                Status
                            </Label>
                            <Input id="status" className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save Election</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

