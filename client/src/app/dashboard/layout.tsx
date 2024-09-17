import Loading from "@/app/dashboard/loading"
import { Suspense } from "react"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>Nav</nav>
        <Suspense fallback={<Loading/>}>
             {children}
        </Suspense> 
      </section>
    )
  }