"use client"

import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export function ProfileForm() {
  const session = useSession()

  return (
    <form className="space-y-8">
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" defaultValue={String(session.data?.user?.name)} placeholder="Name" />
        <p className={cn("text-sm text-muted-foreground")}>
          This is your public display name. It can be your real name or a pseudonym.
        </p>
      </div>
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" value={String(session.data?.user?.email)} placeholder="Email" disabled />
      </div>
      <Button type="submit">Update profile</Button>
    </form>
  )
}
