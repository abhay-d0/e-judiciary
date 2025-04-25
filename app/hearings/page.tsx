import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardLayout from "@/components/dashboard-layout"
import { Calendar, ChevronLeft, ChevronRight, Clock, Eye, MapPin, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HearingsPage() {
  // Mock data
  const hearings = [
    {
      id: 1,
      caseId: "C-2023-1001",
      caseTitle: "Smith vs. Johnson",
      date: "2023-06-15",
      time: "10:00 AM",
      location: "Court Room 3",
      type: "Initial Hearing",
      judge: "Hon. Maria Garcia",
      status: "Scheduled",
    },
    {
      id: 2,
      caseId: "C-2023-1042",
      caseTitle: "Property Dispute - 123 Main St",
      date: "2023-06-18",
      time: "2:30 PM",
      location: "Court Room 1",
      type: "Initial Hearing",
      judge: "Hon. James Wilson",
      status: "Scheduled",
    },
    {
      id: 3,
      caseId: "C-2023-1001",
      caseTitle: "Smith vs. Johnson",
      date: "2023-07-20",
      time: "11:15 AM",
      location: "Court Room 3",
      type: "Evidence Hearing",
      judge: "Hon. Maria Garcia",
      status: "Pending",
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Hearing Schedule</h1>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Hearings</CardTitle>
            <CardDescription>View all scheduled hearings for your cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search hearings..." className="w-full pl-8" />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="initial">Initial Hearing</SelectItem>
                    <SelectItem value="evidence">Evidence Hearing</SelectItem>
                    <SelectItem value="trial">Trial</SelectItem>
                    <SelectItem value="sentencing">Sentencing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50 font-medium">
                      <th className="px-4 py-3 text-left">Case</th>
                      <th className="px-4 py-3 text-left">Date & Time</th>
                      <th className="px-4 py-3 text-left">Location</th>
                      <th className="px-4 py-3 text-left">Type</th>
                      <th className="px-4 py-3 text-left">Judge</th>
                      <th className="px-4 py-3 text-left">Status</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hearings.map((hearing) => (
                      <tr key={hearing.id} className="border-b">
                        <td className="px-4 py-3">
                          <div>
                            <div className="font-medium">{hearing.caseTitle}</div>
                            <div className="text-xs text-muted-foreground">{hearing.caseId}</div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{hearing.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{hearing.time}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{hearing.location}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">{hearing.type}</td>
                        <td className="px-4 py-3">{hearing.judge}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`rounded-full px-2 py-1 text-xs font-medium ${
                              hearing.status === "Scheduled"
                                ? "bg-blue-100 text-blue-800"
                                : hearing.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : hearing.status === "Cancelled"
                                    ? "bg-red-100 text-red-800"
                                    : hearing.status === "Pending"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {hearing.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={`/cases/${hearing.caseId}`}>
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">View Case</span>
                            </Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between px-4 py-2">
                <p className="text-sm text-muted-foreground">
                  Showing <strong>1</strong> to <strong>3</strong> of <strong>3</strong> results
                </p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous page</span>
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next page</span>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
