import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardLayout from "@/components/dashboard-layout"
import { ChevronLeft, ChevronRight, Download, Eye, FileText, Plus, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CasesPage() {
  // Mock data
  const cases = [
    {
      id: 1,
      caseId: "C-2023-1001",
      title: "Smith vs. Johnson",
      description: "Contract dispute regarding property renovation",
      filingDate: "2023-05-10",
      status: "Scheduled",
      hearingDate: "2023-06-15",
      type: "Civil",
    },
    {
      id: 2,
      caseId: "C-2023-1042",
      title: "Property Dispute - 123 Main St",
      description: "Boundary dispute between neighboring properties",
      filingDate: "2023-05-22",
      status: "Pending",
      hearingDate: "2023-06-18",
      type: "Civil",
    },
    {
      id: 3,
      caseId: "C-2023-1078",
      title: "Insurance Claim #45892",
      description: "Dispute over insurance claim rejection",
      filingDate: "2023-06-01",
      status: "Filed",
      hearingDate: "Pending",
      type: "Commercial",
    },
    {
      id: 4,
      caseId: "C-2023-1079",
      title: "Tenant Eviction - 456 Oak Ave",
      description: "Eviction proceedings for non-payment of rent",
      filingDate: "2023-06-02",
      status: "Filed",
      hearingDate: "Pending",
      type: "Housing",
    },
    {
      id: 5,
      caseId: "C-2023-1080",
      title: "Divorce Proceedings - Case #789",
      description: "Divorce and asset division proceedings",
      filingDate: "2023-06-03",
      status: "Filed",
      hearingDate: "Pending",
      type: "Family",
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">My Cases</h1>
        <Button asChild>
          <Link href="/cases/new">
            <Plus className="mr-2 h-4 w-4" /> File New Case
          </Link>
        </Button>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Case Management</CardTitle>
            <CardDescription>View and manage all your cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search cases..." className="w-full pl-8" />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="filed">Filed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="dismissed">Dismissed</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="civil">Civil</SelectItem>
                    <SelectItem value="criminal">Criminal</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="housing">Housing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50 font-medium">
                      <th className="px-4 py-3 text-left">Case ID</th>
                      <th className="px-4 py-3 text-left">Title</th>
                      <th className="px-4 py-3 text-left">Type</th>
                      <th className="px-4 py-3 text-left">Filing Date</th>
                      <th className="px-4 py-3 text-left">Status</th>
                      <th className="px-4 py-3 text-left">Hearing Date</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cases.map((caseItem) => (
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
                        <td className="px-4 py-3">{caseItem.hearingDate}</td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" asChild>
                              <Link href={`/cases/${caseItem.id}`}>
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Link>
                            </Button>
                            <Button variant="ghost" size="icon">
                              <FileText className="h-4 w-4" />
                              <span className="sr-only">Documents</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Download</span>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between px-4 py-2">
                <p className="text-sm text-muted-foreground">
                  Showing <strong>1</strong> to <strong>5</strong> of <strong>5</strong> results
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
