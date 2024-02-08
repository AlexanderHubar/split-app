import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DeleteAccount() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Delete Account</CardTitle>
        <CardDescription>Your account and all your data will be permanently deleted.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="destructive">Delete Account</Button>
      </CardContent>
    </Card>
  )
}
