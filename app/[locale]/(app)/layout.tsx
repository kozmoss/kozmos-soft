import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/footer"


interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="bg-background relative z-10 flex min-h-svh flex-col">
    <SiteHeader />
    <main className="flex flex-1 flex-col">{children}</main>
    <SiteFooter />
  </div>
  )
}