"use client"
import { signOut } from "next-auth/react"
import { DropdownMenuItem, DropdownMenuShortcut } from "@/components/ui/dropdown-menu"

export const LogoutButton = () => {
  const handleLogout = async () => {
    await signOut()
  }

  return (
    <DropdownMenuItem onClick={handleLogout}>
      Log out
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  )
}
