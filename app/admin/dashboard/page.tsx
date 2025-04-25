import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardLayout from "@/components/dashboard-layout"
import { BarChart, Calendar, FileText, Gavel, Plus, Users } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  // Mock data
  const recentCases = [
    {
      id: 1,
      caseId: "C-2023-1078",
      title: "Insurance Claim #45892",
      filingDate: "2023-06-01",
      status: "Filed",
      type: "Commercial",
    },
    {
      id: 2,
      caseId: "C-2023-1079",
      title: "Tenant Eviction - 456 Oak Ave",
      filingDate: "2023-06-02",
      status: "Filed",
      type: "Housing",
    },
    {
      id: 3,
      caseId: "C-2023-1080",
      title: "Divorce Proceedings - Case #789",
      filingDate: "2023-06-03",
      status: "Filed",
      type: "Family",
    },
  ]

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

  return (
    <DashboardLayout userRole="admin">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/admin/cases/new">
              <Plus className="mr-2 h-4 w-4" /> Add Case
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/admin/reports">
              <BarChart className="mr-2 h-4 w-4" /> View Reports
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Cases</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground">+24 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,427</div>
            <p className="text-xs text-muted-foreground">+342 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Scheduled Hearings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">For the next 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Courts</CardTitle>
            <Gavel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">Across 5 districts</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Cases</CardTitle>
              <CardDescription>Recently filed cases requiring review</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/admin/cases">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCases.map((caseItem) => (
                <div key={caseItem.id} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{caseItem.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {caseItem.caseId} • {caseItem.type}
                    </p>
                    <div className="flex items-center pt-2">
                      <span
                        className={`mr-2 rounded-full px-2 py-0.5 text-xs font-medium ${
                          caseItem.status === "Filed" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {caseItem.status}
                      </span>
                      <span className="text-xs text-muted-foreground">Filed: {caseItem.filingDate}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/admin/cases/${caseItem.id}`}>Review</Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Upcoming Hearings</CardTitle>
              <CardDescription>Hearings scheduled for the next 7 days</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/admin/hearings">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingHearings.map((hearing) => (
                <div key={hearing.id} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{hearing.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {hearing.caseId} • {hearing.court}
                    </p>
                    <div className="flex items-center pt-2">
                      <span className="text-xs text-muted-foreground">
                        {hearing.date} at {hearing.time}
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/admin/hearings/${hearing.id}`}>View</Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Case Distribution by Type</CardTitle>
            <CardDescription>Breakdown of cases by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full rounded-md border p-4">
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-muted-foreground">Chart visualization would appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Case Status</CardTitle>
            <CardDescription>Current case status distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full rounded-md border p-4">
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-muted-foreground">Chart visualization would appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Trends</CardTitle>
            <CardDescription>Case filing trends over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full rounded-md border p-4">
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-muted-foreground">Chart visualization would appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
