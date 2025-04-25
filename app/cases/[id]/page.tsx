import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardLayout from "@/components/dashboard-layout"
import { ArrowLeft, Calendar, Clock, Download, FileText, MapPin, Upload, User, Gavel } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function CaseDetailPage({ params }: { params: { id: string } }) {
  // Mock data for a specific case
  const caseData = {
    id: params.id,
    caseId: "C-2023-1001",
    title: "Smith vs. Johnson",
    description:
      "Contract dispute regarding property renovation at 123 Main Street. The plaintiff alleges that the defendant failed to complete the renovation work as specified in the contract dated January 15, 2023.",
    filingDate: "2023-05-10",
    status: "Scheduled",
    type: "Civil",
    court: "District Court - Civil Division",
    judge: "Hon. Maria Garcia",
    plaintiff: "John Smith",
    defendant: "Robert Johnson",
    hearings: [
      {
        id: 1,
        date: "2023-06-15",
        time: "10:00 AM",
        location: "Court Room 3",
        type: "Initial Hearing",
        status: "Scheduled",
      },
    ],
    documents: [
      {
        id: 1,
        name: "Initial Complaint.pdf",
        type: "Complaint",
        uploadedBy: "John Smith",
        uploadDate: "2023-05-10",
        size: "1.2 MB",
      },
      {
        id: 2,
        name: "Contract.pdf",
        type: "Evidence",
        uploadedBy: "John Smith",
        uploadDate: "2023-05-10",
        size: "3.5 MB",
      },
      {
        id: 3,
        name: "Response to Complaint.pdf",
        type: "Response",
        uploadedBy: "Robert Johnson",
        uploadDate: "2023-05-25",
        size: "0.8 MB",
      },
    ],
    timeline: [
      {
        id: 1,
        date: "2023-05-10",
        time: "09:15 AM",
        event: "Case Filed",
        description: "Initial complaint filed by John Smith",
      },
      {
        id: 2,
        date: "2023-05-12",
        time: "02:30 PM",
        event: "Case Assigned",
        description: "Case assigned to Judge Maria Garcia",
      },
      {
        id: 3,
        date: "2023-05-15",
        time: "11:00 AM",
        event: "Notice Sent",
        description: "Notice sent to defendant Robert Johnson",
      },
      {
        id: 4,
        date: "2023-05-25",
        time: "10:45 AM",
        event: "Response Filed",
        description: "Response to complaint filed by Robert Johnson",
      },
      {
        id: 5,
        date: "2023-06-01",
        time: "03:15 PM",
        event: "Hearing Scheduled",
        description: "Initial hearing scheduled for June 15, 2023",
      },
    ],
  }

  return (
    <DashboardLayout>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/cases">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to cases</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">{caseData.title}</h1>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        Case ID: {caseData.caseId} • Filed on {caseData.filingDate}
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Case Details</CardTitle>
              <CardDescription>Complete information about this case</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="hearings">Hearings</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Description</h3>
                      <p className="mt-1 text-sm">{caseData.description}</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <h3 className="text-lg font-medium">Plaintiff</h3>
                        <div className="mt-2 flex items-center gap-2">
                          <Avatar>
                            <AvatarFallback>JS</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{caseData.plaintiff}</p>
                            <p className="text-xs text-muted-foreground">
                              Represented by: Law Offices of Smith & Associates
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium">Defendant</h3>
                        <div className="mt-2 flex items-center gap-2">
                          <Avatar>
                            <AvatarFallback>RJ</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{caseData.defendant}</p>
                            <p className="text-xs text-muted-foreground">Represented by: Johnson Legal Group</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <h3 className="text-lg font-medium">Court Information</h3>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center gap-2">
                            <Gavel className="h-4 w-4 text-muted-foreground" />
                            <p className="text-sm">{caseData.court}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <p className="text-sm">Judge: {caseData.judge}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium">Case Information</h3>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <p className="text-sm">Type: {caseData.type}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <p className="text-sm">Filed: {caseData.filingDate}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="hearings">
                  <div className="space-y-4">
                    {caseData.hearings.map((hearing) => (
                      <div key={hearing.id} className="rounded-lg border p-4">
                        <div className="flex flex-col justify-between gap-2 sm:flex-row">
                          <div>
                            <h3 className="font-medium">{hearing.type}</h3>
                            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>{hearing.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>{hearing.time}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span>{hearing.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span
                              className={`rounded-full px-2 py-1 text-xs font-medium ${
                                hearing.status === "Scheduled"
                                  ? "bg-blue-100 text-blue-800"
                                  : hearing.status === "Completed"
                                    ? "bg-green-100 text-green-800"
                                    : hearing.status === "Cancelled"
                                      ? "bg-red-100 text-red-800"
                                      : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {hearing.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}

                    {caseData.hearings.length === 0 && (
                      <div className="rounded-lg border border-dashed p-8 text-center">
                        <h3 className="font-medium">No hearings scheduled</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          There are no hearings scheduled for this case yet.
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="documents">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Case Documents</h3>
                      <Button size="sm">
                        <Upload className="mr-2 h-4 w-4" /> Upload Document
                      </Button>
                    </div>

                    <div className="rounded-md border">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b bg-muted/50 font-medium">
                            <th className="px-4 py-3 text-left">Document Name</th>
                            <th className="px-4 py-3 text-left">Type</th>
                            <th className="px-4 py-3 text-left">Uploaded By</th>
                            <th className="px-4 py-3 text-left">Date</th>
                            <th className="px-4 py-3 text-left">Size</th>
                            <th className="px-4 py-3 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {caseData.documents.map((document) => (
                            <tr key={document.id} className="border-b">
                              <td className="px-4 py-3">{document.name}</td>
                              <td className="px-4 py-3">{document.type}</td>
                              <td className="px-4 py-3">{document.uploadedBy}</td>
                              <td className="px-4 py-3">{document.uploadDate}</td>
                              <td className="px-4 py-3">{document.size}</td>
                              <td className="px-4 py-3 text-right">
                                <Button variant="ghost" size="icon">
                                  <Download className="h-4 w-4" />
                                  <span className="sr-only">Download</span>
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="timeline">
                  <div className="space-y-4">
                    <h3 className="font-medium">Case Timeline</h3>
                    <div className="relative ml-3 space-y-0">
                      {caseData.timeline.map((event, index) => (
                        <div key={event.id} className="mb-4 grid grid-cols-[1fr_auto_1fr] items-start gap-4">
                          <div className="text-right text-sm">
                            <div className="font-medium">{event.date}</div>
                            <div className="text-muted-foreground">{event.time}</div>
                          </div>
                          <div className="relative flex h-full w-6 items-center justify-center">
                            <div className="absolute h-full w-px bg-border" />
                            <div className="relative z-10 h-2 w-2 rounded-full bg-primary" />
                          </div>
                          <div>
                            <div className="font-medium">{event.event}</div>
                            <div className="text-sm text-muted-foreground">{event.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Case Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col items-center justify-center">
                  <div
                    className={`mb-2 rounded-full px-3 py-1 text-sm font-medium ${
                      caseData.status === "Scheduled"
                        ? "bg-blue-100 text-blue-800"
                        : caseData.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : caseData.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : caseData.status === "Dismissed"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {caseData.status}
                  </div>
                  <p className="text-sm text-muted-foreground">Last updated: June 1, 2023</p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-2 font-medium">Next Hearing</h3>
                  {caseData.hearings.length > 0 ? (
                    <div className="rounded-lg border p-3">
                      <div className="font-medium">{caseData.hearings[0].type}</div>
                      <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{caseData.hearings[0].date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{caseData.hearings[0].time}</span>
                        </div>
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{caseData.hearings[0].location}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">No hearings scheduled</p>
                  )}
                </div>

                <Separator />

                <div>
                  <h3 className="mb-2 font-medium">Key Parties</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{caseData.plaintiff}</p>
                        <p className="text-xs text-muted-foreground">Plaintiff</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>RJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{caseData.defendant}</p>
                        <p className="text-xs text-muted-foreground">Defendant</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>MG</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{caseData.judge}</p>
                        <p className="text-xs text-muted-foreground">Judge</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/cases/${caseData.id}/documents`}>
                      <FileText className="mr-2 h-4 w-4" /> View All Documents
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/cases/${caseData.id}/hearings`}>
                      <Calendar className="mr-2 h-4 w-4" /> View All Hearings
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
