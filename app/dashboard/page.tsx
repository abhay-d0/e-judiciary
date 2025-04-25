import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardLayout from "@/components/dashboard-layout"
import { AlertCircle, Calendar, FileText, Plus, Gavel, Clock } from "lucide-react"
import Link from "next/link"

export default function UserDashboard() {
  // Mock data
  const upcomingHearings = [
    {
      id: 1,
      caseId: "C-2023-1001",
      title: "Smith vs. Johnson",
      date: "2023-06-15",
      time: "10:00 AM",
      court: "Court Room 3",
      judge: "Hon. Williams",
    },
    {
      id: 2,
      caseId: "C-2023-1042",
      title: "Property Dispute - 123 Main St",
      date: "2023-06-18",
      time: "2:30 PM",
      court: "Court Room 1",
      judge: "Hon. Garcia",
    },
  ]

  const myCases = [
    {
      id: 1,
      caseId: "C-2023-1001",
      title: "Smith vs. Johnson",
      filingDate: "2023-05-10",
      status: "Scheduled",
      nextHearing: "2023-06-15",
    },
    {
      id: 2,
      caseId: "C-2023-1042",
      title: "Property Dispute - 123 Main St",
      filingDate: "2023-05-22",
      status: "Pending",
      nextHearing: "2023-06-18",
    },
    {
      id: 3,
      caseId: "C-2023-1078",
      title: "Insurance Claim #45892",
      filingDate: "2023-06-01",
      status: "Filed",
      nextHearing: "Pending",
    },
  ]

  const notifications = [
    { id: 1, message: "Your hearing for case C-2023-1001 has been scheduled", date: "2023-06-10" },
    { id: 2, message: "New document uploaded for case C-2023-1042", date: "2023-06-09" },
    { id: 3, message: "Case status updated: C-2023-1078", date: "2023-06-08" },
  ]

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Button asChild>
          <Link href="/cases/new">
            <Plus className="mr-2 h-4 w-4" /> File New Case
          </Link>
        </Button>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Cases</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+1 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Hearings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Next on Jun 15, 2023</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Cases</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Awaiting court date</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Resolved Cases</CardTitle>
            <Gavel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">No cases resolved yet</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>My Cases</CardTitle>
            <CardDescription>Overview of your current cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {myCases.map((caseItem) => (
                <div key={caseItem.id} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{caseItem.title}</p>
                    <p className="text-sm text-muted-foreground">Case ID: {caseItem.caseId}</p>
                    <div className="flex items-center pt-2">
                      <span
                        className={`mr-2 rounded-full px-2 py-0.5 text-xs font-medium ${
                          caseItem.status === "Scheduled"
                            ? "bg-blue-100 text-blue-800"
                            : caseItem.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {caseItem.status}
                      </span>
                      <span className="text-xs text-muted-foreground">Filed: {caseItem.filingDate}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Next Hearing</p>
                    <p className="text-sm">{caseItem.nextHearing}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full" asChild>
                <Link href="/cases">View All Cases</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Recent updates and alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex gap-3 rounded-lg border p-3">
                  <AlertCircle className="h-5 w-5 text-muted-foreground" />
                  <div className="space-y-1">
                    <p className="text-sm">{notification.message}</p>
                    <p className="text-xs text-muted-foreground">{notification.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Hearings</CardTitle>
            <CardDescription>Your scheduled court appearances</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingHearings.map((hearing) => (
                <div key={hearing.id} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{hearing.title}</p>
                    <p className="text-sm text-muted-foreground">Case ID: {hearing.caseId}</p>
                    <p className="text-sm text-muted-foreground">
                      {hearing.court} • Judge: {hearing.judge}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{hearing.date}</p>
                    <p className="text-sm">{hearing.time}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full" asChild>
                <Link href="/hearings">View All Hearings</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
