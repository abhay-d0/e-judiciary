"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardLayout from "@/components/dashboard-layout"
import { ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

export default function NewCasePage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/cases")
    }, 1500)
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
        <h1 className="text-3xl font-bold tracking-tight">File New Case</h1>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">Submit a new case to the judicial system</p>

      <div className="mt-6">
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Case Information</CardTitle>
              <CardDescription>Provide the details of your case</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Case Title</Label>
                  <Input id="title" placeholder="Enter a descriptive title for your case" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Case Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a detailed description of your case"
                    rows={5}
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="type">Case Type</Label>
                    <Select required>
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select case type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="civil">Civil</SelectItem>
                        <SelectItem value="criminal">Criminal</SelectItem>
                        <SelectItem value="family">Family</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="housing">Housing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="court">Court</Label>
                    <Select required>
                      <SelectTrigger id="court">
                        <SelectValue placeholder="Select court" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="district-civil">District Court - Civil Division</SelectItem>
                        <SelectItem value="district-criminal">District Court - Criminal Division</SelectItem>
                        <SelectItem value="family-court">Family Court</SelectItem>
                        <SelectItem value="commercial-court">Commercial Court</SelectItem>
                        <SelectItem value="housing-court">Housing Court</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Parties Information</h3>

                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="mb-3 font-medium">Plaintiff Information</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="plaintiff-name">Full Name</Label>
                        <Input id="plaintiff-name" defaultValue="John Smith" disabled />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="plaintiff-contact">Contact Number</Label>
                        <Input id="plaintiff-contact" defaultValue="(555) 123-4567" disabled />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="plaintiff-email">Email</Label>
                        <Input id="plaintiff-email" defaultValue="john.smith@example.com" disabled />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="plaintiff-address">Address</Label>
                        <Input id="plaintiff-address" defaultValue="123 Main St, Anytown, USA" disabled />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="mb-3 font-medium">Defendant Information</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="defendant-name">Full Name</Label>
                        <Input id="defendant-name" placeholder="Enter defendant's full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="defendant-contact">Contact Number (if known)</Label>
                        <Input id="defendant-contact" placeholder="Enter defendant's contact number" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="defendant-email">Email (if known)</Label>
                        <Input id="defendant-email" placeholder="Enter defendant's email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="defendant-address">Address</Label>
                        <Input id="defendant-address" placeholder="Enter defendant's address" required />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Supporting Documents</h3>
                <div className="rounded-lg border border-dashed p-8 text-center">
                  <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center">
                    <div className="mb-4 rounded-full bg-muted p-3">
                      <FileText className="h-6 w-6" />
                    </div>
                    <h3 className="mb-1 text-lg font-semibold">Upload Documents</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Drag and drop your documents here or click to browse
                    </p>
                    <Input id="file-upload" type="file" className="hidden" multiple />
                    <Button variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
                      Choose Files
                    </Button>
                    <p className="mt-2 text-xs text-muted-foreground">PDF, DOCX, JPG, PNG up to 10MB each</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional-notes">Additional Notes</Label>
                <Textarea
                  id="additional-notes"
                  placeholder="Any additional information that might be relevant to your case"
                  rows={3}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/cases">Cancel</Link>
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Case"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </DashboardLayout>
  )
}
