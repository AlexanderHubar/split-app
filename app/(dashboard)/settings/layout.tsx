import { Metadata } from "next"

import { Separator } from "@/components/ui/separator"
import { ROUTES } from "constants/routes"
import { SidebarNav } from "./sidebar-nav"

export const metadata: Metadata = {
  title: "Settings | Split App",
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: ROUTES.SETTINGS.PROFILE,
  },
  {
    title: "Appearance",
    href: ROUTES.SETTINGS.APPEARANCE,
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="hidden space-y-6 p-8 pt-6 md:block">
        <div className="space-y-0.5">
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}
