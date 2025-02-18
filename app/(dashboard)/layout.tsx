import { ReactNode } from "react"
import { MainNav } from "./components/main-nav"
import { TeamSwitcher } from "./components/team-switcher"
import { UserNav } from "./components/user-nav"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
