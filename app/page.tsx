"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Gavel, BarChart2, Clock, FileText, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="relative overflow-hidden sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 animate-gradient bg-[length:400%_400%] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-20" />

        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Gavel className="h-6 w-6" />
            <span className="text-xl font-bold">Indiciary</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Digital Justice for a Modern World
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our platform digitizes court case management, making the judicial process transparent, faster, and
                    more accessible.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg">Get Started</Button>
                  </Link>
                  <Link href="#features">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center"
              >
                <div className="relative h-[350px] w-[350px] rounded-full bg-muted flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Gavel className="h-32 w-32 text-primary" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-center justify-center space-y-2 border rounded-lg bg-background p-4 shadow-sm"
              >
                <div className="text-3xl font-bold">5,000+</div>
                <div className="text-sm text-muted-foreground">Cases Processed</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center justify-center space-y-2 border rounded-lg bg-background p-4 shadow-sm"
              >
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm text-muted-foreground">Registered Courts</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center justify-center space-y-2 border rounded-lg bg-background p-4 shadow-sm"
              >
                <div className="text-3xl font-bold">50%</div>
                <div className="text-sm text-muted-foreground">Faster Resolution</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center justify-center space-y-2 border rounded-lg bg-background p-4 shadow-sm"
              >
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Access</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a comprehensive suite of tools to streamline the judicial process.
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <FileText className="h-8 w-8 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Case Management</h3>
                    <p className="text-muted-foreground">
                      File, track, and manage cases with ease. Access case details, documents, and status updates in
                      real-time.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start gap-4"
                >
                  <Clock className="h-8 w-8 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Hearing Schedules</h3>
                    <p className="text-muted-foreground">
                      View and manage court hearing schedules. Receive notifications for upcoming hearings and changes.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="grid gap-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <Users className="h-8 w-8 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">User Management</h3>
                    <p className="text-muted-foreground">
                      Different access levels for citizens, judges, and administrators with role-specific dashboards.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start gap-4"
                >
                  <BarChart2 className="h-8 w-8 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Analytics & Reporting</h3>
                    <p className="text-muted-foreground">
                      Comprehensive analytics and reporting tools to monitor case progress and court performance.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Judicial Process?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of courts and citizens already benefiting from our digital judicial system.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/register">
                    <Button size="lg">Get Started</Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      Contact Sales
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <Gavel className="h-6 w-6" />
            <span className="text-xl font-bold">Indiciary</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Indiciary. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}