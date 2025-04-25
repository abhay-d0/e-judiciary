"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  BarChart2,
  Calendar,
  FileText,
  Gavel,
  Home,
  LogOut,
  Menu,
  Search,
  Settings,
  User,
  Users,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

interface DashboardLayoutProps {
  children: React.ReactNode
  userRole?: "admin" | "judge" | "user"
}

export default function DashboardLayout({ children, userRole = "user" }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Define navigation items based on user role
  const getNavItems = () => {
    const baseItems = [
      {
        title: "Dashboard",
        href: userRole === "admin" ? "/admin/dashboard" : userRole === "judge" ? "/judge/dashboard" : "/dashboard",
        icon: Home,
      },
    ]

    const userItems = [
      ...baseItems,
      { title: "My Cases", href: "/cases", icon: FileText },
      { title: "Hearings", href: "/hearings", icon: Calendar },
      { title: "Documents", href: "/documents", icon: FileText },
    ]

    const judgeItems = [
      ...baseItems,
      { title: "Assigned Cases", href: "/judge/cases", icon: FileText },
      { title: "Hearing Schedule", href: "/judge/hearings", icon: Calendar },
    ]

    const adminItems = [
      ...baseItems,
      { title: "Cases", href: "/admin/cases", icon: FileText },
      { title: "Hearings", href: "/admin/hearings", icon: Calendar },
      { title: "Courts", href: "/admin/courts", icon: Gavel },
      { title: "Users", href: "/admin/users", icon: Users },
      { title: "Judges", href: "/admin/judges", icon: User },
      { title: "Reports", href: "/admin/reports", icon: BarChart2 },
      { title: "Settings", href: "/admin/settings", icon: Settings },
    ]

    switch (userRole) {
      case "admin":
        return adminItems
      case "judge":
        return judgeItems
      default:
        return userItems
    }
  }

  const navItems = getNavItems()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile Header */}
      <header className="sticky top-0 z-40 border-b bg-background lg:hidden">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <Gavel className="h-6 w-6" />
              <span className="text-xl font-bold">Indiciary</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>{userRole === "admin" ? "AD" : userRole === "judge" ? "JD" : "US"}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/login">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar for desktop */}
        <aside className="hidden w-64 flex-col border-r bg-muted/40 lg:flex">
          <div className="flex h-16 items-center gap-2 border-b px-6">
            <Gavel className="h-6 w-6" />
            <span className="text-xl font-bold">Indiciary</span>
          </div>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-full bg-background pl-8" />
            </div>
            <nav className="grid gap-1">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted",
                    pathname === item.href ? "bg-muted" : "transparent",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="border-t p-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>{userRole === "admin" ? "AD" : userRole === "judge" ? "JD" : "US"}</AvatarFallback>
              </Avatar>
              <div className="flex flex-1 flex-col">
                <span className="text-sm font-medium">
                  {userRole === "admin" ? "Admin User" : userRole === "judge" ? "Judge Smith" : "John Citizen"}
                </span>
                <span className="text-xs text-muted-foreground capitalize">{userRole}</span>
              </div>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/login">
                  <LogOut className="h-4 w-4" />
                  <span className="sr-only">Logout</span>
                </Link>
              </Button>
            </div>
          </div>
        </aside>

        {/* Mobile sidebar (off-canvas) */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
            <div className="fixed inset-y-0 left-0 w-full max-w-xs border-r bg-background p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                  <Gavel className="h-6 w-6" />
                  <span className="text-xl font-bold">Indiciary</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <div className="mt-6">
                <nav className="grid gap-1">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted",
                        pathname === item.href ? "bg-muted" : "transparent",
                      )}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="mt-6 border-t pt-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>{userRole === "admin" ? "AD" : userRole === "judge" ? "JD" : "US"}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-1 flex-col">
                    <span className="text-sm font-medium">
                      {userRole === "admin" ? "Admin User" : userRole === "judge" ? "Judge Smith" : "John Citizen"}
                    </span>
                    <span className="text-xs text-muted-foreground capitalize">{userRole}</span>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="/login">
                      <LogOut className="h-4 w-4" />
                      <span className="sr-only">Logout</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <div className="container py-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
