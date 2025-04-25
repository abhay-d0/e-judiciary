import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardLayout from "@/components/dashboard-layout"
import { Calendar, Clock, FileText, Gavel, MapPin, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function JudgeDashboard() {
  // Mock data
  const assignedCases = [
    {
      id: 1,
      caseId: "C-2023-1001",
      title: "Smith vs. Johnson",
      filingDate: "2023-05-10",
      status: "Scheduled",
      nextHearing: "2023-06-15",
      type: "Civil",
    },
    {
      id: 2,
      caseId: "C-2023-1042",
      title: "Property Dispute - 123 Main St",
      filingDate: "2023-05-22",
      status: "Pending",
      nextHearing: "2023-06-18",
      type: "Civil",
    },
    {
      id: 3,
      caseId: "C-2023-1078",
      title: "Insurance Claim #45892",
      filingDate: "2023-06-01",
      status: "Filed",
      nextHearing: "Pending",
      type: "Commercial",
    },
  ]

  const todayHearings = [
    {
      id: 1,
      caseId: "C-2023-0985",
      title: "Thompson vs. City Council",
      time: "09:00 AM",
      location: "Court Room 3",
      type: "Initial Hearing",
      status: "Scheduled",
    },
    {
      id: 2,
      caseId: "C-2023-0992",
      title: "Divorce Case #4582",
      time: "11:30 AM",
      location: "Court Room 3",
      type: "Evidence Hearing",
      status: "Scheduled",
    },
    {
      id: 3,
      caseId: "C-2023-1015",
      title: "Business License Dispute",
      time: "02:00 PM",
      location: "Court Room 3",
      type: "Initial Hearing",
      status: "Scheduled",
    },
  ]

  return (
    <DashboardLayout userRole="judge">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Judge Dashboard</h1>
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search cases..." className="w-full pl-8" />
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Assigned Cases</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+3 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Today's Hearings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next at 09:00 AM</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Decisions</CardTitle>
            <Gavel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">2 due this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completed Cases</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+12 this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Today's Hearing Schedule</CardTitle>
            <CardDescription>Your hearings scheduled for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayHearings.map((hearing) => (
                <div key={hearing.id} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-1">
                    <p className="font-medium">{hearing.title}</p>
                    <p className="text-sm text-muted-foreground">Case ID: {hearing.caseId}</p>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{hearing.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{hearing.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>{hearing.type}</span>
                      </div>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/judge/cases/${hearing.caseId}`}>View Case</Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recently Assigned Cases</CardTitle>
              <CardDescription>Cases recently assigned to you</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/judge/cases">View All Cases</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50 font-medium">
                    <th className="px-4 py-3 text-left">Case ID</th>
                    <th className="px-4 py-3 text-left">Title</th>
                    <th className="px-4 py-3 text-left">Type</th>
                    <th className="px-4 py-3 text-left">Filing Date</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-left">Next Hearing</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {assignedCases.map((caseItem) => (
                    <tr key={caseItem.id} className="border-b">
                      <td className="px-4 py-3">{caseItem.caseId}</td>
                      <td className="max-w-[200px] truncate px-4 py-3" title={caseItem.title}>
                        {caseItem.title}
                      </td>
                      <td className="px-4 py-3">{caseItem.type}</td>
                      <td className="px-4 py-3">{caseItem.filingDate}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-medium ${
                            caseItem.status === "Scheduled"
                              ? "bg-blue-100 text-blue-800"
                              : caseItem.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : caseItem.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : caseItem.status === "Dismissed"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {caseItem.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">{caseItem.nextHearing}</td>
                      <td className="px-4 py-3 text-right">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/judge/cases/${caseItem.id}`}>View</Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
